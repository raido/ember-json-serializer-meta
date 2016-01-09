import DS from 'ember-data';
import Ember from 'ember';

const { JSONSerializer } = DS;
const { assert } = Ember;

export default JSONSerializer.extend({

  /**
    `extractMetaQueryResponse` is used to deserialize any meta information in the
    adapter payload from query response. By default addon expects meta information to
    be located on the `meta` property of the payload object.
    Example
    ```app/serializers/post.js
    import JSONSerializerWithMeta from 'json-serializer-meta';
    export default JSONSerializerWithMeta.extend({
      extractMetaQueryResponse: function(store, typeClass, payload) {
        if (payload && payload._pagination) {
          return payload._pagination;
        }
      }
    });
    ```
    @method extractMetaQueryResponse
    @param {DS.Store} store
    @param {DS.Model} primaryModelClass
    @param {Object} payload
    @public
  */

  extractMetaQueryResponse(store, primaryModelClass, payload) {
    if (payload && payload.hasOwnProperty('meta')) {
      let { meta } = payload;
      delete payload.meta;
      return meta;
    }
  },

  /**
    @method normalizeResponse
    @param {DS.Store} store
    @param {DS.Model} primaryModelClass
    @param {Object} payload
    @param {String|Number} id
    @param {String} requestType
    @public
    @return {Object} JSON-API Document
  */

  normalizeResponse(store, primaryModelClass, payload, id, requestType) {
    let meta = null;
    if (requestType === 'query') {
      meta = this.extractMetaQueryResponse(store, primaryModelClass, payload);
    }

    let documentHash = this._super(...arguments);

    if (meta) {
      // jscs: disable requireTemplateStringsForConcatenation
      assert('The `meta` returned from `extractMeta` has to be an object, not "' + Ember.typeOf(meta) + '".', Ember.typeOf(meta) === 'object');
      documentHash.meta = meta;
    }
    return documentHash;
  }
});
