// var h1_tag = React.createElement("h1",{className:"para1"},"hello mahesh from React!");
// console.log(h1_tag); //object

// var root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(h1_tag);

//nested elements structure

// var parent = React.createElement(
//     "div",
//      { id: "parent" }, [
//         React.createElement("div", { id: "child1" }, [
//             React.createElement("h1", {}, "this is H1 tag"),
//             React.createElement("h2", {}, "this is H2 tag")
//         ]),
//         React.createElement("div", { id: "child2" }, [
//             React.createElement("h1", {}, "this is H1 tag"),
//             React.createElement("h2", {}, "this is H2 tag")
//         ])
//      ]
// );
// console.log(parent); //object

// var root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(parent);


//task-2
// div>>div>>ptag
var div_tag = React.createElement("div",{className:"alpha"},
    React.createElement("div",{className:"div2"},
        React.createElement("p",{className:"paragrapgh",},'hello mahesh perla')))

var root = ReactDOM.createRoot(document.getElementById("root"));
root.render(div_tag);








