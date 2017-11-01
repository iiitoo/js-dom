// function testDiv() {
//     var testdiv = document.getElementById('testdiv');
//     testdiv.innerHTML = "<p>This is <em>my</em> content.</p>";
// }

// window.onload = testDiv;


// function testP() {
//     var para = document.createElement("p");
//     var info = "nodeName: ";
//     info += para .nodeName;
//     info += " nodeType: ";
//     info += para.nodeType;
//     console.log(info);
// }
// window.onload = testP;




// function addPtxt() {
//     var para = document.createElement("p");
//     var txt1 = document.createTextNode("This is ");
//     para.appendChild(txt1);
//     var emphasis = document.createElement("em");
//     var txt2 = document.createTextNode("my");
//     emphasis.appendChild(txt2);
//     para.appendChild(emphasis);
//     var txt3 = document.createTextNode(" content.");
//     para.appendChild(txt3);
//     var testdiv = document.getElementById('testdiv');
//     testdiv.appendChild(para);
// }


function addPtxt() {
    var para = document.createElement("p");
    var txt1 = document.createTextNode("This is ");
    var emphasis = document.createElement("em");
    var txt2 = document.createTextNode("my");
    var txt3 = document.createTextNode(" content.");
    var testdiv = document.getElementById("testdiv");
    emphasis.appendChild(txt2);
    para.appendChild(txt1);
    para.appendChild(emphasis);
    para.appendChild(txt3);
    testdiv.appendChild(para);
}

window.onload = addPtxt();