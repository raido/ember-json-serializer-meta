# ember-json-serializer-meta

[![Build Status](https://travis-ci.org/raido/ember-json-serializer-meta.svg)](https://travis-ci.org/raido/ember-json-serializer-meta)
[![npm version](https://badge.fury.io/js/ember-json-serializer-meta.svg)](https://badge.fury.io/js/ember-json-serializer-meta)

So I heard you are working with custom APIs that are not either JSONAPI or REST but rather something in between, a hybrid. Then this addon is for you! It enables extracting metadata for all the Ember Data normalize*Response hooks.

```ember install ember-json-serializer-meta```

**Works with Ember 1.13+**

## How it works

### Flow chart

```
                                               ┌─ extractMetaFindAllResponse() ─────┐
                                               ├─ extractMetaFindHasManyResponse() ─┼─ extractMetaArrayResponse() ─────────────────────────────────┐
                                               ├─ extractMetaFindManyResponse() ────┤                                                              │
                                               ├─ extractMetaQueryResponse() ───────┘                                                              │
                                               │                                                                                                   │
                                               ├─ extractMetaFindRecordResponse() ─────────────────────────────────┐                               │
normalizeResponse() - normalizeMetaResponse() ─┼─ extractMetaFindBelongsToResponse() ──────────────────────────────┤                               │
                                               ├─ extractMetaQueryRecordResponse() ────────────────────────────────┤                               │
                                               │                                                                   │                               │
                                               ├─ extractMetaCreateRecordResponse() ─┐                             │                               │
                                               ├─ extractMetaDeleteRecordResponse() ─┼─ extractMetaSaveResponse() ─┴─ extractMetaSingleResponse() ─┴─ extractMetaResponse()
                                               └─ extractMetaUpdateRecordResponse() ─┘

```

### API response

```
  {
    status: {
      errorCode: 0
    },
    records: [{
      id: 1,
      name: 'Tomster'
    }],
    pagination: {

    }
  }
```

 By default such payload is not supported by the JSONSerializer, it is impossible to extract metadata with default `extractMeta` hook.

Here comes in the addon which adds another serializer hook for extracting meta for your custom API responses with JSONSerializer.

```app/serializers/user.js
import extractMetaResponseMixin from 'ember-json-serializer-meta';

export default DS.JSONSerializer.extend(extractMetaResponseMixin, {
  extractMetaResponse(store, typeClass, payload/*, id, requestType*/) {
    if (payload && payload.pagination) {
      return payload.pagination;
    }
  }
});
```

Default implementation of extractMetaResponse will lookup `meta` property.

```
  {
    ...
    meta: {
      my: 'meta'
    }
    ...
  }
```

# Contribution

**This project follows [Gitflow Workflow](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow).**

## Installation

* `git clone` this repository
* `yarn install`
* `bower install`

## Running

* `ember server`
* Visit your app at http://localhost:4200.

## Running Tests

* `yarn test` (Runs `ember try:each` to test your addon against multiple Ember versions)
* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [http://www.ember-cli.com/](http://www.ember-cli.com/).
