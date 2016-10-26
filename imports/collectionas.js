// import { Mongo } from "meteor/mongo";
//
// Meteor.methods({
//    "projects.insert": function(name) {
//       return Projects.insert({
//          name,
//          students: [],
//       });
//    },
//    "projects.set": function(_id, name) {
//       return Projects.update(
//          { "_id": _id },
//          { $set: { name: name } }
//       )
//    }
//    "students.insert": function(_id, name) {
//       return Projects.update(
//          { "_id": _id },
//          { $push: { students:  }}
//       )
//    }
//
//
//    "classes.set-mark": function(_id, project, mark) {
//       return Classes.update(
//          { "_id": _id, "marks.project": project },
//          { $set: { "marks.$.mark": mark } }
//       );
//    },
//    "classes.set-project": function(_id, code, name) {
//       return Classes.update(
//          { "_id": _id, "project.code": code },
//          { $set: { "project.$.name": name } }
//       );
//    }
// });
//
// export const Classes = new Mongo.Collection("classes");
