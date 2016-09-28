# Elastic Search Client

This is a simple implementation of a Elastic Search API Client.

It use [React](https://facebook.github.io/react/) as presentation layer, and [MobX](https://www.npmjs.com/package/mobx) as the data store.  It is using the [axios](https://www.npmjs.com/package/axios) to make the XHR call to the Elastic Search endpoint.


## Installation

```
npm install
npm start
```

## Configuration

Please modify the following constant value to access the Elastic Search endpoint in the https://github.com/almandsky/elasticSearch/blob/master/src/js/TestStore.js#L6-L8

```
const elasticSearchUrl = 'http://localhost:9200/_search'
const elasticUserName = 'guest';
const elasticPassword = 'guest';
```

