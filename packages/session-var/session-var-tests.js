Tinytest.add('expect default value to be set', function (test) {
  // See: https://github.com/meteor/meteor/blob/devel/packages/session/session_tests.js
  delete Session.keys['counter'];
  var counter = new SessionVar('counter', 22);
  test.equal(counter.get(), 22);
  counter.setDefault(34);
  test.equal(counter.get(), 22);
});

Tinytest.add('expect value to be set', function (test) {
  delete Session.keys['counter'];
  var counter = new SessionVar('counter', 12);
  test.equal(12, counter.get());
  counter.set(34);
  test.equal(34, counter.get());
  counter.set(54);
  test.equal(54, counter.get());
});

Tinytest.add('expect equals to work as expected', function (test) {
  delete Session.keys['counter'];
  var counter = new SessionVar('counter', 12);
  test.equal(true, counter.equals(12));
  counter.set(34);
  test.equal(true, counter.equals(34));
  counter.set(54);
  test.equal(true, counter.equals(54));
  test.equal(false, counter.equals(45));
});

Tinytest.add('expect coersion to work as expected', function (test) {
  delete Session.keys['counter'];
  var counter = new SessionVar('counter', 12);
  test.equal(12, +counter);
  test.equal(-12, -counter);
  counter.set(counter * 2);
  test.equal(true, counter.equals(24));
});
