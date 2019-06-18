function addElement(elementTag, elementTag1, elementTag2, elementTag3, elementId, imgUrl, html, buttonId) {
		    // Adds an element to the document
		    // var p = document.getElementById(parentId);
		    var newElement = document.createElement(elementTag);
		    var newElement1 = document.createElement(elementTag1);
		    var newElement2 = document.createElement(elementTag2);
		    var newElement3 = document.createElement(elementTag3);
		    newElement.setAttribute('id', elementId);
		    newElement2.setAttribute('src', imgUrl);
		    newElement3.setAttribute('id', buttonId);
		    newElement1.innerHTML = html;
		    newElement3.innerHTML = "X";
		    document.body.appendChild(newElement);
		    newElement.appendChild(newElement2);
		    newElement.appendChild(newElement1);
		    newElement.appendChild(newElement3);
     	}

var Foo = function(){
    document.getElementById( "delete_button" ).setAttribute( "onClick", "javascript: delBut();" );
}

var delBut = function(){
    document.getElementById("_").remove();
}

// function removeElement(elementId) {
//     // Removes an element from the document
//     let node = document.getElementById(elementId);
// 	if (parentNode != null) {
// 	  node.parentNode.removeChild(node);
// 	}
// }





let divs = document.querySelectorAll(".text");

// Object.entries(divs).map((object) => { console.log(object) });

for (let i = 0; i < divs.length; i++){
divs[i].onclick = function()
    {

    	for (let x = 0; x < myVar.length; x++){
    	if (divs[i].id === myVar[x].Name){
     		if (document.contains(document.getElementById("_"))) {
            document.getElementById("_").remove();
			}  
			addElement('div',"p", "img", "button", "_", myVar[x].Image, myVar[x].desc, "delete_button");
			Foo();
     		
     }
    }   
}

}
// removeElement("_"+myVar[x].Name)
// var idOfSelect = document.querySelector('.selected').id;
// console.log(idOfSelect);

// if(classList = "selected" && )
// alert("hello");


// console.log("hello");

// document.querySelector("#php").onclick = function()
//     {
//      alert("hello");
//      //validation code to see State field is mandatory.  
//     }   


