import Ember from 'ember';

const { assert } = Ember;

export default Ember.Mixin.create({

  extractMetaResponse(store, primaryModelClass, payload/*, id, requestType */) {
    if (payload && payload.hasOwnProperty('meta')) {
      let { meta } = payload;
      delete payload.meta;
      return meta;
    }
  },

  /**
    `extractMetaQueryResponse` is used to deserialize any meta information in the
    adapter payload from query response. By default addon expects meta information to
    be located on the `meta` property of the payload object.
    Example
    ```app/serializers/post.js
    import extractMetaQueryResponseMixin from 'ember-json-serializer-meta';
    export default DS.JSONSerializer.extend(extractMetaQueryResponseMixin, {
      extractMetaQueryResponse(store, typeClass, payload) {
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

  extractMetaQueryResponse(/*store, primaryModelClass, payload, id, requestType*/) {
    return this.extractMetaArrayResponse(...arguments);
  },

  extractMetaFindAllResponse(/*store, primaryModelClass, payload, id, requestType*/) {
    return this.extractMetaArrayResponse(...arguments);
  },

  extractMetaFindHasManyResponse(/*store, primaryModelClass, payload, id, requestType*/) {
    return this.extractMetaArrayResponse(...arguments);
  },

  extractMetaFindManyResponse(/*store, primaryModelClass, payload, id, requestType*/) {
    return this.extractMetaArrayResponse(...arguments);
  },

  extractMetaArrayResponse(/*store, primaryModelClass, payload, id, requestType*/) {
    return this.extractMetaResponse(...arguments);
  },

  extractMetaSaveResponse(/*store, primaryModelClass, payload, id, requestType*/) {
    return this.extractMetaSingleResponse(...arguments);
  },

  extractMetaSingleResponse(/*store, primaryModelClass, payload, id, requestType*/) {
    return this.extractMetaResponse(...arguments);
  },

  extractMetaFindRecordResponse(/*store, primaryModelClass, payload, id, requestType*/) {
    return this.extractMetaSingleResponse(...arguments);
  },

  extractMetaFindBelongsToResponse(/*store, primaryModelClass, payload, id, requestType*/) {
    return this.extractMetaSingleResponse(...arguments);
  },

  extractMetaQueryRecordResponse(/*store, primaryModelClass, payload, id, requestType*/) {
    return this.extractMetaSingleResponse(...arguments);
  },

  extractMetaCreateRecordResponse(/*store, primaryModelClass, payload, id, requestType*/) {
    return this.extractMetaSaveResponse(...arguments);
  },

  extractMetaDeleteRecordResponse(/*store, primaryModelClass, payload, id, requestType*/) {
    return this.extractMetaSaveResponse(...arguments);
  },

  extractMetaUpdateRecordResponse(/*store, primaryModelClass, payload, id, requestType*/) {
    return this.extractMetaSaveResponse(...arguments);
  },

  normalizeMetaResponse(store, primaryModelClass, payload, id, requestType) {
    switch (requestType) {
      case 'findRecord':
        return this.extractMetaFindRecordResponse(...arguments);
      case 'queryRecord':
        return this.extractMetaQueryRecordResponse(...arguments);
      case 'findAll':
        return this.extractMetaFindAllResponse(...arguments);
      case 'findBelongsTo':
        return this.extractMetaFindBelongsToResponse(...arguments);
      case 'findHasMany':
        return this.extractMetaFindHasManyResponse(...arguments);
      case 'findMany':
        return this.extractMetaFindManyResponse(...arguments);
      case 'query':
        return this.extractMetaQueryResponse(...arguments);
      case 'createRecord':
        return this.extractMetaCreateRecordResponse(...arguments);
      case 'deleteRecord':
        return this.extractMetaDeleteRecordResponse(...arguments);
      case 'updateRecord':
        return this.extractMetaUpdateRecordResponse(...arguments);
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

  normalizeResponse(/*store, primaryModelClass, payload, id, requestType*/) {
    let meta = this.normalizeMetaResponse(...arguments);
    let documentHash = this._super(...arguments);

    if (meta) {
      // jscs: disable requireTemplateStringsForConcatenation
      assert('The `meta` returned from `extractMeta` has to be an object, not "' + Ember.typeOf(meta) + '".', Ember.typeOf(meta) === 'object');
      documentHash.meta = meta;
    }
    return documentHash;
  }
});
