/**
 * Creates an instance of `Locator`.
 *
 * @constructor
 * @api public
 */
function Locator() {
  this._registry = {};
}

/**
 * Get a service registered with `name`.
 *
 * @param {String} name
 * @return {Object} Previously registered service.
 * @api public
 */
Locator.prototype.get = function(name) {
  var svc = this._registry[name];
  if (!svc) { throw new Error('No service registered with name: ' + name); }
  return svc;
}

/**
 * Register a service with `name`.
 *
 * @param {String} name
 * @param {Object} svc
 * @return {Locator} for chaining
 * @api public
 */
Locator.prototype.register = function(name, svc) {
  this._registry[name] = svc;
  return this;
}

/**
 * Unegister a service with `name`.
 *
 * @param {String} name
 * @return {Locator} for chaining
 * @api public
 */
Locator.prototype.unregister = function(name) {
  delete this._registry[name];
  return this;
}

/**
 * Remove all registered services.
 *
 * @return {Locator} for chaining
 * @api public
 */
Locator.prototype.reset = function() {
  this._registry = {};
  return this;
}


/**
 * Expose `Locator`.
 */
module.exports = Locator;
