import { Meteor } from "meteor/meteor";

import { Students } from "../imports/collections/students";

Meteor.startup(() => {
   Meteor.publish("students", function() {
      //return Cards.find();
      return Students.find();
      // const numberOfRecords = Classes.find({}).count();
      //
      // Messages.insert({text: "Hello, world!"});
   });
  // code to run on server at startup
});
