var locator = require('..');

describe('servicelocator', function() {
    
  it('should export default Locator directly from package', function() {
    expect(locator).to.be.an('object');
    expect(locator).to.be.an.instanceof(locator.Locator);
  });
  
  it('should export Locator constructor', function() {
    expect(locator.Locator).to.be.a('function');
  });
  
});
