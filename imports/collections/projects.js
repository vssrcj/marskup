import { Mongo } from "meteor/mongo";

Meteor.methods({

   "projects.insert": function(name, class_id) {
      return Projects.insert({
         name,
         class_id
      });
   },

   "projects.set": function(_id, name) {
      return Projects.update({
         { "_id": _id },
        { $set: { "name": name } }
      });
   },


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
});

export const Projects = new Mongo.Collection("projects");
