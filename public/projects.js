
let projs = document.querySelectorAll(".child_proj");


// function OnMouseIn (elem) {
//             elem.style.border = "2px solid blue";
//         }
        
function moveDivs(event)
    {
        x=event.clientX;
        y=event.clientY;
        
        document.getElementById("_two").style.left=x - 450 +"px";
        document.getElementById("_two").style.top=y - 300 +"px";
    }



// console.log(projs[4].outerText);
// console.log(please[3].app_description);
function addElement(elementTag, elementTag1, elementId, html) {
		    // Adds an element to the document
		    // var p = document.getElementById(parentId);
		    var newElement = document.createElement(elementTag);
		    var newElement1 = document.createElement(elementTag1);
		    newElement.setAttribute('id', elementId);
		    newElement1.innerHTML = html;
		    document.body.appendChild(newElement);
		    newElement.appendChild(newElement1);
     	}



var delBut = function(){
    document.getElementById("_two").remove();
}




for (let i = 0; i < projs.length; i++){
projs[i].OnMouseIn = function()
    {

    	for (let x = 0; x < please.length; x++){
    	if (projs[i].outerText === please[x].app_title){
     		if (document.contains(document.getElementById("_two"))) {
            document.getElementById("_two").remove();
			}  
			addElement('div',"p", "_two", please[x].app_description);
			
     }
    }   
}

}




function OnMouseOut (elem) {
            delBut();
        }












// // console.log(please);
// // console.log(projs[4].outerText);



