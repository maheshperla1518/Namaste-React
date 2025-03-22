import React from "react";
import ReactDOM from "react-dom/client";


// var root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(parent);


//task-2
// div>>div>>ptag
var div_tag = React.createElement("div",{className:"alpha"},
    React.createElement("div",{className:"div2"},
        React.createElement("p",{className:"paragrapgh",},
            'this is h tag perla and continue your lession 🚀')))

var root = ReactDOM.createRoot(document.getElementById("root"));
root.render(div_tag);

