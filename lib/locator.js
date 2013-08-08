function Locator() {
  this._registry = {};
}

Locator.prototype.get = function(name) {
  var svc = this._registry[name];
  if (!svc) { throw new Error('No service registered with name: ' + name); }
  return svc;
}

Locator.prototype.register = function(name, svc) {
  this._registry[name] = svc;
}

Locator.prototype.unregister = function(name) {
  delete this._registry[name];
}

Locator.prototype.reset = function() {
  this._registry = {};
}


/**
 * Expose `Strategy`.
 */
module.exports = Locator;
