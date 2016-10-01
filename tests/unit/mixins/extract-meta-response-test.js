import Ember from 'ember';
import ExtractMetaResponseMixin from 'ember-json-serializer-meta';
import { module, test } from 'qunit';

let meta, defaultArgs;

module('Unit | Mixin | extract meta response', {
  beforeEach() {
    meta = {
      page: 1
    };

    defaultArgs = [{}, {}, {
      meta
    }, null, 'findAll'];
  }
});

function argumentsFor(request) {
  return [{}, {}, {
    meta
  }, null, request];
}

test('it should extract meta from default key: meta', function(assert) {
  let factory = Ember.Object.extend(ExtractMetaResponseMixin);
  assert.deepEqual(factory.create().extractMetaResponse(...defaultArgs), meta);
});

test('it should delegate extractMetaQueryResponse to extractMetaArrayResponse', function(assert) {
  assert.expect(2);
  let factory = Ember.Object.extend(ExtractMetaResponseMixin, {
    extractMetaArrayResponse() {
      assert.deepEqual(Array.from(arguments), defaultArgs);
      return meta;
    }
  });
  assert.deepEqual(factory.create().extractMetaQueryResponse(...defaultArgs), meta);
});

test('it should delegate extractMetaFindAllResponse to extractMetaArrayResponse', function(assert) {
  assert.expect(2);
  let factory = Ember.Object.extend(ExtractMetaResponseMixin, {
    extractMetaArrayResponse() {
      assert.deepEqual(Array.from(arguments), defaultArgs);
      return meta;
    }
  });
  assert.deepEqual(factory.create().extractMetaFindAllResponse(...defaultArgs), meta);
});

test('it should delegate extractMetaFindHasManyResponse to extractMetaArrayResponse', function(assert) {
  assert.expect(2);
  let factory = Ember.Object.extend(ExtractMetaResponseMixin, {
    extractMetaArrayResponse() {
      assert.deepEqual(Array.from(arguments), defaultArgs);
      return meta;
    }
  });
  assert.deepEqual(factory.create().extractMetaFindHasManyResponse(...defaultArgs), meta);
});

test('it should delegate extractMetaFindManyResponse to extractMetaArrayResponse', function(assert) {
  assert.expect(2);
  let factory = Ember.Object.extend(ExtractMetaResponseMixin, {
    extractMetaArrayResponse() {
      assert.deepEqual(Array.from(arguments), defaultArgs);
      return meta;
    }
  });
  assert.deepEqual(factory.create().extractMetaFindManyResponse(...defaultArgs), meta);
});

test('it should delegate extractMetaArrayResponse to extractMetaArrayResponse', function(assert) {
  assert.expect(2);
  let factory = Ember.Object.extend(ExtractMetaResponseMixin, {
    extractMetaResponse() {
      assert.deepEqual(Array.from(arguments), defaultArgs);
      return meta;
    }
  });
  assert.deepEqual(factory.create().extractMetaArrayResponse(...defaultArgs), meta);
});

test('it should delegate extractMetaSaveResponse to extractMetaSingleResponse', function(assert) {
  assert.expect(2);
  let factory = Ember.Object.extend(ExtractMetaResponseMixin, {
    extractMetaSingleResponse() {
      assert.deepEqual(Array.from(arguments), defaultArgs);
      return meta;
    }
  });
  assert.deepEqual(factory.create().extractMetaSaveResponse(...defaultArgs), meta);
});

test('it should delegate extractMetaSingleResponse to extractMetaResponse', function(assert) {
  assert.expect(2);
  let factory = Ember.Object.extend(ExtractMetaResponseMixin, {
    extractMetaResponse() {
      assert.deepEqual(Array.from(arguments), defaultArgs);
      return meta;
    }
  });
  assert.deepEqual(factory.create().extractMetaSingleResponse(...defaultArgs), meta);
});

test('it should delegate extractMetaFindRecordResponse to extractMetaSingleResponse', function(assert) {
  assert.expect(2);
  let factory = Ember.Object.extend(ExtractMetaResponseMixin, {
    extractMetaSingleResponse() {
      assert.deepEqual(Array.from(arguments), defaultArgs);
      return meta;
    }
  });
  assert.deepEqual(factory.create().extractMetaFindRecordResponse(...defaultArgs), meta);
});

test('it should delegate extractMetaFindBelongsToResponse to extractMetaSingleResponse', function(assert) {
  assert.expect(2);
  let factory = Ember.Object.extend(ExtractMetaResponseMixin, {
    extractMetaSingleResponse() {
      assert.deepEqual(Array.from(arguments), defaultArgs);
      return meta;
    }
  });
  assert.deepEqual(factory.create().extractMetaFindBelongsToResponse(...defaultArgs), meta);
});

test('it should delegate extractMetaQueryRecordResponse to extractMetaSingleResponse', function(assert) {
  assert.expect(2);
  let factory = Ember.Object.extend(ExtractMetaResponseMixin, {
    extractMetaSingleResponse() {
      assert.deepEqual(Array.from(arguments), defaultArgs);
      return meta;
    }
  });
  assert.deepEqual(factory.create().extractMetaQueryRecordResponse(...defaultArgs), meta);
});

test('it should delegate extractMetaCreateRecordResponse to extractMetaSaveResponse', function(assert) {
  assert.expect(2);
  let factory = Ember.Object.extend(ExtractMetaResponseMixin, {
    extractMetaSaveResponse() {
      assert.deepEqual(Array.from(arguments), defaultArgs);
      return meta;
    }
  });
  assert.deepEqual(factory.create().extractMetaCreateRecordResponse(...defaultArgs), meta);
});

test('it should delegate extractMetaDeleteRecordResponse to extractMetaSaveResponse', function(assert) {
  assert.expect(2);
  let factory = Ember.Object.extend(ExtractMetaResponseMixin, {
    extractMetaSaveResponse() {
      assert.deepEqual(Array.from(arguments), defaultArgs);
      return meta;
    }
  });
  assert.deepEqual(factory.create().extractMetaDeleteRecordResponse(...defaultArgs), meta);
});

test('it should delegate extractMetaUpdateRecordResponse to extractMetaSaveResponse', function(assert) {
  assert.expect(2);
  let factory = Ember.Object.extend(ExtractMetaResponseMixin, {
    extractMetaSaveResponse() {
      assert.deepEqual(Array.from(arguments), defaultArgs);
      return meta;
    }
  });
  assert.deepEqual(factory.create().extractMetaUpdateRecordResponse(...defaultArgs), meta);
});

test('it should delegate normalizeMetaResponse to extractMetaFindRecordResponse for requestType: findRecord', function(assert) {
  assert.expect(2);
  let findRecordArguments = argumentsFor('findRecord');
  let factory = Ember.Object.extend(ExtractMetaResponseMixin, {
    extractMetaFindRecordResponse() {
      assert.deepEqual(Array.from(arguments), findRecordArguments);
      return meta;
    }
  });
  assert.deepEqual(factory.create().normalizeMetaResponse(...findRecordArguments), meta);
});

test('it should delegate normalizeMetaResponse to extractMetaQueryRecordResponse for requestType: queryRecord', function(assert) {
  assert.expect(2);
  let findRecordArguments = argumentsFor('queryRecord');
  let factory = Ember.Object.extend(ExtractMetaResponseMixin, {
    extractMetaQueryRecordResponse() {
      assert.deepEqual(Array.from(arguments), findRecordArguments);
      return meta;
    }
  });
  assert.deepEqual(factory.create().normalizeMetaResponse(...findRecordArguments), meta);
});

test('it should delegate normalizeMetaResponse to extractMetaFindAllResponse for requestType: findAll', function(assert) {
  assert.expect(2);
  let findRecordArguments = argumentsFor('findAll');
  let factory = Ember.Object.extend(ExtractMetaResponseMixin, {
    extractMetaFindAllResponse() {
      assert.deepEqual(Array.from(arguments), findRecordArguments);
      return meta;
    }
  });
  assert.deepEqual(factory.create().normalizeMetaResponse(...findRecordArguments), meta);
});

test('it should delegate normalizeMetaResponse to extractMetaFindBelongsToResponse for requestType: findBelongsTo', function(assert) {
  assert.expect(2);
  let findRecordArguments = argumentsFor('findBelongsTo');
  let factory = Ember.Object.extend(ExtractMetaResponseMixin, {
    extractMetaFindBelongsToResponse() {
      assert.deepEqual(Array.from(arguments), findRecordArguments);
      return meta;
    }
  });
  assert.deepEqual(factory.create().normalizeMetaResponse(...findRecordArguments), meta);
});

test('it should delegate normalizeMetaResponse to extractMetaFindHasManyResponse for requestType: findHasMany', function(assert) {
  assert.expect(2);
  let findRecordArguments = argumentsFor('findHasMany');
  let factory = Ember.Object.extend(ExtractMetaResponseMixin, {
    extractMetaFindHasManyResponse() {
      assert.deepEqual(Array.from(arguments), findRecordArguments);
      return meta;
    }
  });
  assert.deepEqual(factory.create().normalizeMetaResponse(...findRecordArguments), meta);
});

test('it should delegate normalizeMetaResponse to extractMetaFindManyResponse for requestType: findMany', function(assert) {
  assert.expect(2);
  let findRecordArguments = argumentsFor('findMany');
  let factory = Ember.Object.extend(ExtractMetaResponseMixin, {
    extractMetaFindManyResponse() {
      assert.deepEqual(Array.from(arguments), findRecordArguments);
      return meta;
    }
  });
  assert.deepEqual(factory.create().normalizeMetaResponse(...findRecordArguments), meta);
});

test('it should delegate normalizeMetaResponse to extractMetaQueryResponse for requestType: query', function(assert) {
  assert.expect(2);
  let findRecordArguments = argumentsFor('query');
  let factory = Ember.Object.extend(ExtractMetaResponseMixin, {
    extractMetaQueryResponse() {
      assert.deepEqual(Array.from(arguments), findRecordArguments);
      return meta;
    }
  });
  assert.deepEqual(factory.create().normalizeMetaResponse(...findRecordArguments), meta);
});

test('it should delegate normalizeMetaResponse to extractMetaCreateRecordResponse for requestType: createRecord', function(assert) {
  assert.expect(2);
  let findRecordArguments = argumentsFor('createRecord');
  let factory = Ember.Object.extend(ExtractMetaResponseMixin, {
    extractMetaCreateRecordResponse() {
      assert.deepEqual(Array.from(arguments), findRecordArguments);
      return meta;
    }
  });
  assert.deepEqual(factory.create().normalizeMetaResponse(...findRecordArguments), meta);
});

test('it should delegate normalizeMetaResponse to extractMetaDeleteRecordResponse for requestType: deleteRecord', function(assert) {
  assert.expect(2);
  let findRecordArguments = argumentsFor('deleteRecord');
  let factory = Ember.Object.extend(ExtractMetaResponseMixin, {
    extractMetaDeleteRecordResponse() {
      assert.deepEqual(Array.from(arguments), findRecordArguments);
      return meta;
    }
  });
  assert.deepEqual(factory.create().normalizeMetaResponse(...findRecordArguments), meta);
});

test('it should delegate normalizeMetaResponse to extractMetaUpdateRecordResponse for requestType: updateRecord', function(assert) {
  assert.expect(2);
  let findRecordArguments = argumentsFor('updateRecord');
  let factory = Ember.Object.extend(ExtractMetaResponseMixin, {
    extractMetaUpdateRecordResponse() {
      assert.deepEqual(Array.from(arguments), findRecordArguments);
      return meta;
    }
  });
  assert.deepEqual(factory.create().normalizeMetaResponse(...findRecordArguments), meta);
});

test('it should call super normalizeResponse and normalizeMetaResponse', function(assert) {
  assert.expect(2);
  Ember.Object.extend({
    normalizeResponse() {
      assert.deepEqual(Array.from(arguments), defaultArgs);
    }
  }, ExtractMetaResponseMixin, {
    normalizeMetaResponse() {
      assert.deepEqual(Array.from(arguments), defaultArgs);
    }
  }).create().normalizeResponse(...defaultArgs);
});

test('it should return "document" object with metadata', function(assert) {
  assert.deepEqual(Ember.Object.extend({
    normalizeResponse() {
      return {};
    }
  }, ExtractMetaResponseMixin, {
  }).create().normalizeResponse(...defaultArgs), { meta });
});

test('it should throw if returned metadata is not an object', function(assert) {
  assert.throws(function() {
    Ember.Object.extend({
      normalizeResponse() {
        return {};
      }
    }, ExtractMetaResponseMixin, {
      normalizeMetaResponse() {
        return true;
      }
    }).create().normalizeResponse(...defaultArgs);
  }, /The `meta` returned from `extractMeta\*Response` has to be an object, not "boolean"/);
});
