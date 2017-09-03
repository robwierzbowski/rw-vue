// A custom Nightwatch assertion.
// The assertion name is the filename.
// Example usage:
//
//   browser.assert.elementCount(selector, count)
//
// For more information on custom assertions see:
// http://nightwatchjs.org/guide#writing-custom-assertions

exports.assertion = function (selector, count) {
  this.message = `Testing if element <${selector}> has count: ${count}`;
  this.expected = count;

  this.pass = function (value) {
    return value === this.expected;
  };

  this.value = function (result) {
    return result.value;
  };

  this.command = function (cb) {
    return this.api.execute(
      selectorToCount => document.querySelectorAll(selectorToCount).length,
      [selector],
      (result) => {
        cb(result);
      });
  };
};
