# ember-json-serializer-meta

[![Build Status](https://travis-ci.org/raido/ember-json-serializer-meta.svg)](https://travis-ci.org/raido/ember-json-serializer-meta)

So I heard you are working with custom APIs that are not either JSONAPI or REST but rather something in between, a hybrid. Then this addon is for you! It enables using metadata with query responses.

```ember install ember-json-serializer-meta```

**Works with Ember 1.13+**

## How it works

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

Here comes in the addon which adds another serializer hook for extracting meta for query responses with JSONSerializer.

```app/serializers/user.js
import extractMetaQueryResponseMixin from 'ember-json-serializer-meta';

export default DS.JSONSerializer.extend(extractMetaQueryResponseMixin, {
  extractMetaQueryResponse(store, typeClass, payload) {
    if (payload && payload.pagination) {
      return payload.pagination;
    }
  }
});
```

Default implementation of extractMetaQueryResponse will lookup `meta` property.

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

## Installation

* `git clone` this repository
* `npm install`
* `bower install`

## Running

* `ember server`
* Visit your app at http://localhost:4200.

## Running Tests

* `npm test` (Runs `ember try:testall` to test your addon against multiple Ember versions)
* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [http://www.ember-cli.com/](http://www.ember-cli.com/).
