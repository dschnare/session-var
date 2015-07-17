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
