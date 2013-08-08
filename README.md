# servicelocator

[![Build](https://travis-ci.org/jaredhanson/node-servicelocator.png)](http://travis-ci.org/jaredhanson/node-servicelocator)
[![Coverage](https://coveralls.io/repos/jaredhanson/node-servicelocator/badge.png)](https://coveralls.io/r/jaredhanson/node-servicelocator)
[![Dependencies](https://david-dm.org/jaredhanson/node-servicelocator.png)](http://david-dm.org/jaredhanson/node-servicelocator)


A central location to register and locate services within a Node.js application.
This module implements the [service locator pattern](http://en.wikipedia.org/wiki/Service_locator_pattern),
as [detailed](http://martinfowler.com/articles/injection.html) by
[Martin Fowler](http://martinfowler.com/).

## Install

    $ npm install servicelocator

## Usage

#### Register a Service

```javascript
var locator = require('servicelocator');

locator.register('db', dbConnection);
```

#### Get a Service

```javascript
var locator = require('servicelocator');

var dbConnection = locator.get('db');
```

## Related Modules

- [notifications](https://github.com/jaredhanson/node-notifications) — a mechanism for dispatching notifications

## Tests

    $ npm install
    $ npm test

## Credits

  - [Jared Hanson](http://github.com/jaredhanson)

## License

[The MIT License](http://opensource.org/licenses/MIT)

Copyright (c) 2013 Jared Hanson <[http://jaredhanson.net/](http://jaredhanson.net/)>
