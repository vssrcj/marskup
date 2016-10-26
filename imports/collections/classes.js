import { Mongo } from "meteor/mongo";

Meteor.methods({
   

   "classes.insert": function(name) {
      return Classes.insert({ name });
   },

   "classes.set": function(name) {
      return Classes.update(
         { "_id": _id },
         { $set: { "name": name }}
      );
   },

   "classes.remove": function(_id) {
      return Classes.remove(_id);
   }
});

export const Classes = new Mongo.Collection("classes");

// "classes.insert": function(name) {
//    return Classes.insert({
//       name,
//       students: [], // id, name, marks: [ { mark, project }]
//       projects: [] // code, name
//    });
// },
// "classes.set-mark": function(_id, project, mark) {
//    return Classes.update(
//       { "_id": _id, "marks.project": project },
//       { $set: { "marks.$.mark": mark } }
//    );
// },
// "classes.set-project": function(_id, code, name) {
//    return Classes.update(
//       { "_id": _id, "project.code": code },
//       { $set: { "project.$.name": name } }
//    );
// }
