import { Mongo } from "meteor/mongo";

Meteor.methods({

   "students.insert": function(name, class_id) {
      return Students.insert({
         name,
         class_id,
         marks: [], // { project_id, mark }
      });
   },

   "students.set": function(_id, name) {
      return Students.update(
         { _id: _id },
         { $set: { name: name } }
      )
   },

   "students.set-mark": function(_id, project, mark) {

      return Students.update(
         { "_id": _id, "marks.project": project },
         { $set: { "marks.$.mark": mark } },
         function(err, numAffected) {
            if(numAffected == 0) {
               return Students.update(
                  { "_id": _id },
                  { $push: { "marks": { project, mark }}}
               );
            }
         }
      );
   }
});

export const Students = new Mongo.Collection("students");
