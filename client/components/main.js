import React, { Component } from "react";

import { Students } from "../../imports/collections/students";

import { createContainer } from "meteor/react-meteor-data";

class Main extends Component {
   componentDidMount() {
      Meteor.call("students.set-mark", "C", "sd", (error, cardId) => {
         //browserHistory.push(cardId);
         console.log(cardId);
      });
   }
   render() {
      const { classes } = this.props;
      console.log(classes);

      return (
         <div>
            <div class="header">
               <div class="class">Alpha</div>
               <div class="class selected">Beta</div>
               <div class="class">Charlie</div>
            </div>
            <div class="grid">
               <table>
                  <thead>
                     <tr>
                        <th></th>
                        <th>Student Name</th>
                        {/* {classes.projects.map(p => (
                           <th>{ p.name }</th>
                        ))} */}
                     </tr>
                     <tr>
                        <th></th>
                        <th></th>
                        {/* {classes.projects.map(p => (
                           <div class="totals">
                              <div>20</div>
                              <div>15%</div>
                           </div>
                        ))} */}
                     </tr>
                  </thead>
                  <tbody>
                     {/* {classes.students.map(s => {
                        {classes.projects.map(p => (
                           <td>{ s.marks.find(m => m.project == p.code).mark }</td>
                        ))}
                     })} */}
                  </tbody>
               </table>
            </div>
         </div>
      )
   }
}
//<td class="input-cell"><input type="text" maxLength={36}/></td>


export default createContainer(props => {
   Meteor.subscribe("students");
   return { students: Students.find().fetch() };
}, Main);
