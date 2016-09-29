import { test } from 'ember-qunit';
import { module } from 'qunit';
import Ember from 'ember';
import DS from 'ember-data';
import setupStore from '../../helpers/store';
import extractMetaQueryResponseMixin from 'ember-json-serializer-meta';

const { run } = Ember;
const { JSONSerializer, Model, attr } = DS;

let env;
module('Unit | Serializer | application', {
  // Specify the other units that are required for this test.
  needs: ['serializer:application'],

  beforeEach() {
    let user = Model.extend({
      name: attr()
    });
    env = setupStore({
      user
    });
  },

  afterEach() {
    run(env.store, 'destroy');
  }
});

test('it should extract meta from query response', function(assert) {
  env.registry.register('serializer:user', JSONSerializer.extend(extractMetaQueryResponseMixin, {
    extractMetaQueryResponse(/* store, modelClass, payload */) {
      let meta = this._super(...arguments);
      meta.authors.push('Tomhuda');
      return meta;
    },

    normalizeQueryResponse(store, primaryModelClass, payload, id, requestType) {
      let { nested: { records } } = payload;
      return this._super(store, primaryModelClass, records, id, requestType);
    }
  }));
  let modelClass = env.store.modelFor('user');
  let serializer = env.store.serializerFor('user');
  let payload = {
    nested: {
      records: [{
        id: 1,
        name: 'user 1'
      }]
    },
    meta: {
      authors: ['Tomster']
    }
  };
  let doc = serializer.normalizeResponse(env.store, modelClass, payload, null, 'query');
  assert.deepEqual(doc.meta.authors, ['Tomster', 'Tomhuda']);
});
