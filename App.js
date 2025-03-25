import React from "react";
import ReactDOM from "react-dom/client";

// var root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(parent);

//task-2
// div>>div>>ptag
// var div_tag = React.createElement("div",{className:"alpha"},
//     React.createElement("div",{className:"div2"},
//         React.createElement("p",{className:"paragrapgh",},
//             'this is h tag perla and continue your lession 🚀')))

// var root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(div_tag);

//React element

var heading = React.createElement("h1", { id: "heading" }, "Namaste React 🚀");
console.log(heading);

//jsx elt--->babel converts into react elt
///react element
// var heading = (
//       <h1 id="heading">
//         Namaste React using jsx 🚀
//         </h1>
//         );
// console.log(heading);

// //react functional componenet
// var Heading = ()=>{
//     return <div>
//         <h1>Namaste React functional componenet 🚀</h1>
//     </div>
// }

// var root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

//task-2
//create two componenets and do componenet composistion
//render a react functional compoenent

var number = 15484
var Component_1 = function(){
  return (
   <div>
      <p className="para">this is react functional componenet 1 🚀</p>
    </div>
  )
}
var Component2 = () => {
    return (
  <div>
    {heading}
    {number}
    {Component_1()}
    <Component_1/>
    <Component_1></Component_1>
    <p className="para">this is react functional componenet 2 🚀🚀</p>
  </div>);
};

var root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Component2 />);
