import Ember from 'ember';
import DS from 'ember-data';

export default function setupStore(options) {
  let container, registry;
  let env = {};
  options = options || {};

  if (Ember.Registry) {
    registry = env.registry = new Ember.Registry();
    container = env.container = registry.container();
  } else {
    container = env.container = new Ember.Container();
    registry = env.registry = container;
  }

  env.replaceContainerNormalize = function replaceContainerNormalize(fn) {
    if (env.registry) {
      env.registry.normalize = fn;
    } else {
      env.container.normalize = fn;
    }
  };

  let adapter = env.adapter = (options.adapter || '-default');
  delete options.adapter;

  if (typeof adapter !== 'string') {
    env.registry.register('adapter:-ember-data-test-custom', adapter);
    adapter = '-ember-data-test-custom';
  }

  for (let prop in options) {
    let modelName = Ember.String.dasherize(prop);
    registry.register(`model:${modelName}`, options[prop]);
  }

  registry.register('service:store', DS.Store.extend({
    adapter
  }));

  registry.optionsForType('serializer', { singleton: false });
  registry.optionsForType('adapter', { singleton: false });
  registry.register('adapter:-default', DS.Adapter);

  registry.register('serializer:-default', DS.JSONSerializer);
  registry.register('serializer:-rest', DS.RESTSerializer);

  registry.register('adapter:-rest', DS.RESTAdapter);

  registry.register('adapter:-json-api', DS.JSONAPIAdapter);
  registry.register('serializer:-json-api', DS.JSONAPISerializer);

  env.restSerializer = container.lookup('serializer:-rest');
  env.store = container.lookup('service:store');
  env.serializer = env.store.serializerFor('-default');
  env.adapter = env.store.get('defaultAdapter');

  return env;
}

export {setupStore};

export function createStore(options) {
  return setupStore(options).store;
}