import Ember from 'ember';
import ExtractMetaResponseMixin from 'ember-json-serializer-meta';
import { module, test } from 'qunit';

module('Unit | Mixin | extract meta response');

test('normalizeMetaResponse -> extractMetaFindAllResponse -> extractMetaArrayResponse -> extractMetaResponse', function(assert) {
  assert.expect(4);
  let ExtractMetaResponseObject = Ember.Object.extend(ExtractMetaResponseMixin);
  let originalArguments = [{}, {}, {}, null, 'findAll'];
  let factory = ExtractMetaResponseObject.extend({
    extractMetaFindAllResponse() {
      assert.deepEqual(...arguments, originalArguments);
      return this._super(...arguments);
    },
    extractMetaArrayResponse() {
      assert.deepEqual(...arguments, originalArguments);
      return this._super(...arguments);
    },
    extractMetaResponse() {
      assert.deepEqual(...arguments, originalArguments);
      return {};
    }
  });
  let subject = factory.create();
  let result = subject.normalizeMetaResponse.apply(subject, originalArguments);
  assert.deepEqual(result, {});
});

test('normalizeMetaResponse -> extractMetaFindHasManyResponse -> extractMetaArrayResponse -> extractMetaResponse', function(assert) {
  assert.expect(4);
  let ExtractMetaResponseObject = Ember.Object.extend(ExtractMetaResponseMixin);
  let originalArguments = [{}, {}, {}, null, 'findHasMany'];
  let factory = ExtractMetaResponseObject.extend({
    extractMetaFindHasManyResponse() {
      assert.deepEqual(...arguments, originalArguments);
      return this._super(...arguments);
    },
    extractMetaArrayResponse() {
      assert.deepEqual(...arguments, originalArguments);
      return this._super(...arguments);
    },
    extractMetaResponse() {
      assert.deepEqual(...arguments, originalArguments);
      return {};
    }
  });
  let subject = factory.create();
  let result = subject.normalizeMetaResponse.apply(subject, originalArguments);
  assert.deepEqual(result, {});
});

test('normalizeMetaResponse -> extractMetaFindManyResponse -> extractMetaArrayResponse -> extractMetaResponse', function(assert) {
  assert.expect(4);
  let ExtractMetaResponseObject = Ember.Object.extend(ExtractMetaResponseMixin);
  let originalArguments = [{}, {}, {}, null, 'findMany'];
  let factory = ExtractMetaResponseObject.extend({
    extractMetaFindManyResponse() {
      assert.deepEqual(...arguments, originalArguments);
      return this._super(...arguments);
    },
    extractMetaArrayResponse() {
      assert.deepEqual(...arguments, originalArguments);
      return this._super(...arguments);
    },
    extractMetaResponse() {
      assert.deepEqual(...arguments, originalArguments);
      return {};
    }
  });
  let subject = factory.create();
  let result = subject.normalizeMetaResponse.apply(subject, originalArguments);
  assert.deepEqual(result, {});
});

test('normalizeMetaResponse -> extractMetaQueryResponse -> extractMetaArrayResponse -> extractMetaResponse', function(assert) {
  assert.expect(4);
  let ExtractMetaResponseObject = Ember.Object.extend(ExtractMetaResponseMixin);
  let originalArguments = [{}, {}, {}, null, 'query'];
  let factory = ExtractMetaResponseObject.extend({
    extractMetaQueryResponse() {
      assert.deepEqual(...arguments, originalArguments);
      return this._super(...arguments);
    },
    extractMetaArrayResponse() {
      assert.deepEqual(...arguments, originalArguments);
      return this._super(...arguments);
    },
    extractMetaResponse() {
      assert.deepEqual(...arguments, originalArguments);
      return {};
    }
  });
  let subject = factory.create();
  let result = subject.normalizeMetaResponse.apply(subject, originalArguments);
  assert.deepEqual(result, {});
});

test('normalizeMetaResponse -> extractMetaFindRecordResponse -> extractMetaSingleResponse -> extractMetaResponse', function(assert) {
  assert.expect(4);
  let ExtractMetaResponseObject = Ember.Object.extend(ExtractMetaResponseMixin);
  let originalArguments = [{}, {}, {}, null, 'findRecord'];
  let factory = ExtractMetaResponseObject.extend({
    extractMetaFindRecordResponse() {
      assert.deepEqual(...arguments, originalArguments);
      return this._super(...arguments);
    },
    extractMetaSingleResponse() {
      assert.deepEqual(...arguments, originalArguments);
      return this._super(...arguments);
    },
    extractMetaResponse() {
      assert.deepEqual(...arguments, originalArguments);
      return {};
    }
  });
  let subject = factory.create();
  let result = subject.normalizeMetaResponse.apply(subject, originalArguments);
  assert.deepEqual(result, {});
});

test('normalizeMetaResponse -> extractMetaFindBelongsToResponse -> extractMetaSingleResponse -> extractMetaResponse', function(assert) {
  assert.expect(4);
  let ExtractMetaResponseObject = Ember.Object.extend(ExtractMetaResponseMixin);
  let originalArguments = [{}, {}, {}, null, 'findBelongsTo'];
  let factory = ExtractMetaResponseObject.extend({
    extractMetaFindBelongsToResponse() {
      assert.deepEqual(...arguments, originalArguments);
      return this._super(...arguments);
    },
    extractMetaSingleResponse() {
      assert.deepEqual(...arguments, originalArguments);
      return this._super(...arguments);
    },
    extractMetaResponse() {
      assert.deepEqual(...arguments, originalArguments);
      return {};
    }
  });
  let subject = factory.create();
  let result = subject.normalizeMetaResponse.apply(subject, originalArguments);
  assert.deepEqual(result, {});
});

test('normalizeMetaResponse -> extractMetaQueryRecordToResponse -> extractMetaSingleResponse -> extractMetaResponse', function(assert) {
  assert.expect(4);
  let ExtractMetaResponseObject = Ember.Object.extend(ExtractMetaResponseMixin);
  let originalArguments = [{}, {}, {}, null, 'queryRecord'];
  let factory = ExtractMetaResponseObject.extend({
    extractMetaQueryRecordResponse() {
      assert.deepEqual(...arguments, originalArguments);
      return this._super(...arguments);
    },
    extractMetaSingleResponse() {
      assert.deepEqual(...arguments, originalArguments);
      return this._super(...arguments);
    },
    extractMetaResponse() {
      assert.deepEqual(...arguments, originalArguments);
      return {};
    }
  });
  let subject = factory.create();
  let result = subject.normalizeMetaResponse.apply(subject, originalArguments);
  assert.deepEqual(result, {});
});

test('normalizeMetaResponse -> extractMetaCreateRecordToResponse -> extractMetaSaveResponse ->extractMetaSingleResponse -> extractMetaResponse', function(assert) {
  assert.expect(5);
  let ExtractMetaResponseObject = Ember.Object.extend(ExtractMetaResponseMixin);
  let originalArguments = [{}, {}, {}, null, 'createRecord'];
  let factory = ExtractMetaResponseObject.extend({
    extractMetaCreateRecordResponse() {
      assert.deepEqual(...arguments, originalArguments);
      return this._super(...arguments);
    },
    extractMetaSingleResponse() {
      assert.deepEqual(...arguments, originalArguments);
      return this._super(...arguments);
    },
    extractMetaSaveResponse() {
      assert.deepEqual(...arguments, originalArguments);
      return this._super(...arguments);
    },
    extractMetaResponse() {
      assert.deepEqual(...arguments, originalArguments);
      return {};
    }
  });
  let subject = factory.create();
  let result = subject.normalizeMetaResponse.apply(subject, originalArguments);
  assert.deepEqual(result, {});
});

test('normalizeMetaResponse -> extractMetaUpdateRecordToResponse -> extractMetaSaveResponse ->extractMetaSingleResponse -> extractMetaResponse', function(assert) {
  assert.expect(5);
  let ExtractMetaResponseObject = Ember.Object.extend(ExtractMetaResponseMixin);
  let originalArguments = [{}, {}, {}, null, 'updateRecord'];
  let factory = ExtractMetaResponseObject.extend({
    extractMetaUpdateRecordResponse() {
      assert.deepEqual(...arguments, originalArguments);
      return this._super(...arguments);
    },
    extractMetaSingleResponse() {
      assert.deepEqual(...arguments, originalArguments);
      return this._super(...arguments);
    },
    extractMetaSaveResponse() {
      assert.deepEqual(...arguments, originalArguments);
      return this._super(...arguments);
    },
    extractMetaResponse() {
      assert.deepEqual(...arguments, originalArguments);
      return {};
    }
  });
  let subject = factory.create();
  let result = subject.normalizeMetaResponse.apply(subject, originalArguments);
  assert.deepEqual(result, {});
});

test('normalizeMetaResponse -> extractMetaDeleteRecordToResponse -> extractMetaSaveResponse ->extractMetaSingleResponse -> extractMetaResponse', function(assert) {
  assert.expect(5);
  let ExtractMetaResponseObject = Ember.Object.extend(ExtractMetaResponseMixin);
  let originalArguments = [{}, {}, {}, null, 'deleteRecord'];
  let factory = ExtractMetaResponseObject.extend({
    extractMetaDeleteRecordResponse() {
      assert.deepEqual(...arguments, originalArguments);
      return this._super(...arguments);
    },
    extractMetaSingleResponse() {
      assert.deepEqual(...arguments, originalArguments);
      return this._super(...arguments);
    },
    extractMetaSaveResponse() {
      assert.deepEqual(...arguments, originalArguments);
      return this._super(...arguments);
    },
    extractMetaResponse() {
      assert.deepEqual(...arguments, originalArguments);
      return {};
    }
  });
  let subject = factory.create();
  let result = subject.normalizeMetaResponse.apply(subject, originalArguments);
  assert.deepEqual(result, {});
});
