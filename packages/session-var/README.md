# session-var

A convenient ReactiveVar-like wrapper for session variables. This project contains the source for the [Meteor](https://www.meteor.com/) package session-var.


# Usage

  // CLI
  meteor create myapp
  cd myapp
  meteor add dschnare:session-var

  // app.js
  if (Meteor.isClient) {
    // counter starts at 0
    var counter = new SessionVar('counter', 0);

    Template.hello.helpers({
      counter: function () {
        return counter.get();
      }
    });

    Template.hello.events({
      'click button': function () {
        // increment the counter when button is clicked
        counter.set(counter + 1);
      }
    });
  }

  if (Meteor.isServer) {
    Meteor.startup(function () {
      // code to run on server at startup
    });
  }


# API

  SessionVar(sessionVarKey[, defaultValue])
  @param sessionVarKey The key of the session var to wrap.
  @param defaultValue The default value of the session var.

The `SessionVar` constructor creates a new `ReactiveVar`-like wrapper around
a session variable.


  SessionVar#get()

Retrieves the session var that is being wrapped.


  SesssionVar#set(value)
  @param value The value to set the wrapped session var to.

Sets the session var that is being wrapped. Returns `this`.


  SessionVar#defaultValue(value)
  @param value The value to set the wrapped session var to if it has not been set already.

Sets the wrapped session var's default value. Returns `this`.


  SessionVar#equals(value)
  @param value The value to tset the wrapped session var with.

Performs an equality test on the wrapped session var.


  SessionVar#valueOf()

Returns the result of calling `SessionVar#get()`. This override
makes it possible to coerce the SessionVar wrapper into a primitive value.

Examples:

  var counter = new SessionVar('counter', 2);

  // k will equal 6
  var k = counter + 4;
  k = counter * 3;
  k = 12 / counter
  k = 8 + -counter

  // can be used to conveniently increment
  counter.set(counter + 1);

  // eq will be true because
  // the != and == operators do not
  // use valueOf()
  var eq = counter != 3;

  // eq is true (equivalent to ==)
  var eq = counter <= 3 && counter >= 3;

  // eq is false (equivalent to !=)
  var eq = counter < 3 && counter > 3;

The overridden `valueOf` can be used for string values as well:

  var msg = new SessionVar('message', '');
  // msg will be set to ' Hello World!'
  msg.set(msg + ' Hello');
  msg.set(msg + ' World!');