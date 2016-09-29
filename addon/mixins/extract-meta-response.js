import Ember from 'ember';

const { assert } = Ember;

export default Ember.Mixin.create({
  /**
    `extractMetaResponse` is used to deserialize any meta information in the
    adapter payload from query response. By default addon expects meta information to
    be located on the `meta` property of the payload object.
    Example
    ```app/serializers/post.js
    import extractMetaResponseMixin from 'ember-json-serializer-meta';
    export default DS.JSONSerializer.extend(extractMetaResponseMixin, {
      extractMetaResponse(store, typeClass, payload) {
        if (payload && payload._pagination) {
          return payload._pagination;
        }
      }
    });
    ```
    @method extractMetaResponse
    @param {DS.Store} store
    @param {DS.Model} primaryModelClass
    @param {Object} payload
    @param {String|Number} id
    @param {String} requestType
    @return {Object}
    @public
  */

  extractMetaResponse(store, primaryModelClass, payload/* , id, requestType */) {
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
    @param {String|Number} id
    @param {String} requestType
    @return {Object}
    @public
  */

  extractMetaQueryResponse(/* store, primaryModelClass, payload, id, requestType*/) {
    return this.extractMetaArrayResponse(...arguments);
  },

  /**
    @public
    @method extractMetaFindAllResponse
    @param {DS.Store} store
    @param {DS.Model} primaryModelClass
    @param {Object} payload
    @param {String|Number} id
    @param {String} requestType
    @return {Object}
   */

  extractMetaFindAllResponse(/* store, primaryModelClass, payload, id, requestType*/) {
    return this.extractMetaArrayResponse(...arguments);
  },

  /**
    @public
    @method extractMetaFindHasManyResponse
    @param {DS.Store} store
    @param {DS.Model} primaryModelClass
    @param {Object} payload
    @param {String|Number} id
    @param {String} requestType
    @return {Object}
   */

  extractMetaFindHasManyResponse(/* store, primaryModelClass, payload, id, requestType*/) {
    return this.extractMetaArrayResponse(...arguments);
  },

  /**
    @public
    @method extractMetaFindManyResponse
    @param {DS.Store} store
    @param {DS.Model} primaryModelClass
    @param {Object} payload
    @param {String|Number} id
    @param {String} requestType
    @return {Object}
   */

  extractMetaFindManyResponse(/* store, primaryModelClass, payload, id, requestType*/) {
    return this.extractMetaArrayResponse(...arguments);
  },

  /**
    @public
    @method extractMetaArrayResponse
    @param {DS.Store} store
    @param {DS.Model} primaryModelClass
    @param {Object} payload
    @param {String|Number} id
    @param {String} requestType
    @return {Object}
   */

  extractMetaArrayResponse(/* store, primaryModelClass, payload, id, requestType*/) {
    return this.extractMetaResponse(...arguments);
  },

  /**
    @public
    @method extractMetaSaveResponse
    @param {DS.Store} store
    @param {DS.Model} primaryModelClass
    @param {Object} payload
    @param {String|Number} id
    @param {String} requestType
    @return {Object}
   */

  extractMetaSaveResponse(/* store, primaryModelClass, payload, id, requestType*/) {
    return this.extractMetaSingleResponse(...arguments);
  },

  /**
    @public
    @method extractMetaSingleResponse
    @param {DS.Store} store
    @param {DS.Model} primaryModelClass
    @param {Object} payload
    @param {String|Number} id
    @param {String} requestType
    @return {Object}
   */

  extractMetaSingleResponse(/* store, primaryModelClass, payload, id, requestType*/) {
    return this.extractMetaResponse(...arguments);
  },

  /**
    @public
    @method extractMetaFindRecordResponse
    @param {DS.Store} store
    @param {DS.Model} primaryModelClass
    @param {Object} payload
    @param {String|Number} id
    @param {String} requestType
    @return {Object}
   */

  extractMetaFindRecordResponse(/* store, primaryModelClass, payload, id, requestType*/) {
    return this.extractMetaSingleResponse(...arguments);
  },

  /**
    @public
    @method extractMetaFindBelongsToResponse
    @param {DS.Store} store
    @param {DS.Model} primaryModelClass
    @param {Object} payload
    @param {String|Number} id
    @param {String} requestType
    @return {Object}
   */

  extractMetaFindBelongsToResponse(/* store, primaryModelClass, payload, id, requestType*/) {
    return this.extractMetaSingleResponse(...arguments);
  },

  /**
    @public
    @method extractMetaQueryRecordResponse
    @param {DS.Store} store
    @param {DS.Model} primaryModelClass
    @param {Object} payload
    @param {String|Number} id
    @param {String} requestType
    @return {Object}
   */

  extractMetaQueryRecordResponse(/* store, primaryModelClass, payload, id, requestType*/) {
    return this.extractMetaSingleResponse(...arguments);
  },

  /**
    @public
    @method extractMetaCreateRecordResponse
    @param {DS.Store} store
    @param {DS.Model} primaryModelClass
    @param {Object} payload
    @param {String|Number} id
    @param {String} requestType
    @return {Object}
   */

  extractMetaCreateRecordResponse(/* store, primaryModelClass, payload, id, requestType*/) {
    return this.extractMetaSaveResponse(...arguments);
  },

  /**
    @public
    @method extractMetaDeleteRecordResponse
    @param {DS.Store} store
    @param {DS.Model} primaryModelClass
    @param {Object} payload
    @param {String|Number} id
    @param {String} requestType
    @return {Object}
   */

  extractMetaDeleteRecordResponse(/* store, primaryModelClass, payload, id, requestType*/) {
    return this.extractMetaSaveResponse(...arguments);
  },

  /**
    @public
    @method extractMetaUpdateRecordResponse
    @param {DS.Store} store
    @param {DS.Model} primaryModelClass
    @param {Object} payload
    @param {String|Number} id
    @param {String} requestType
    @return {Object}
   */

  extractMetaUpdateRecordResponse(/* store, primaryModelClass, payload, id, requestType*/) {
    return this.extractMetaSaveResponse(...arguments);
  },

  /**
    @public
    @method normalizeMetaResponse
    @param {DS.Store} store
    @param {DS.Model} primaryModelClass
    @param {Object} payload
    @param {String|Number} id
    @param {String} requestType
    @return {Object}
   */

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

  normalizeResponse(/* store, primaryModelClass, payload, id, requestType*/) {
    let meta = this.normalizeMetaResponse(...arguments);
    let documentHash = this._super(...arguments);

    if (meta) {
      // jscs: disable requireTemplateStringsForConcatenation
      assert(`The \`meta\` returned from \`extractMeta\` has to be an object, not "${  Ember.typeOf(meta)  }".`, Ember.typeOf(meta) === 'object');
      documentHash.meta = meta;
    }
    return documentHash;
  }
});
