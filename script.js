// // Your JS goes here
//
// for(var count = 0; count < 80; count++){
//
//   if(count === 0){
//       document.write('<br/><div style="background-color:#000000;float:left; width: 11.1%; padding:11.1%; display:inline-block;"></div>');
//   }
//   if(count === 1){
//     document.write('<br/><div style="background-color:#FF0000;float:left; width: 11.1%; padding:11.1%; display:inline-block;"></div>');
//   }
//   else  if (count % 2 === 0){
//       document.write('<br/><div style="background-color:#FF0000;float:left; width: 11.1%; padding:11.1%; display:inline-block;"></div>');
//         }
//
//         else if(count % 5 === 0 && count % 2 !== 0){
//           document.write('<br/><div style="background-color:#000000; float:left; width: 11.1%; padding:11.1%; display:inline-block;"></div>');
//           }
//           else if(count % 5 === 0 && count % 2 === 0){
//         document.write('<br/><div style="background-color:#FF0000; float:left; width: 11.1%; padding:11.1%; display:inline-block;"></div>');
//           }
//           else if (count % 3 === 0 && count %2 !== 0) {
//             document.write('<br/><div style="background-color:#FF0000; float:left; width: 11.1%; padding:11.1%; display:inline-block;"></div>');
//           }
//     }
var container = document.createElement("div");
container.style.width = "100vw";
container.style.height = "100vh"
container.style.margin = "0"
container.style.padding = "0";

document.body.appendChild(container);




for (var counter = 0; counter < 63; counter++) {

  if(counter % 2 === 0){
    var div1 = document.createElement("div");
    div1.style.background = "#000000";
    div1.style.width = "11.1%";
    div1.style.paddingBottom = "11.1%";
    div1.style.float = "left";
    div1.style.display = "inline-block";
    container.appendChild(div1);
  }
  else{
    var div2 = document.createElement("div");
    div2.style.background = "#FF0000";
    div2.style.width = "11.1%";
    div2.style.paddingBottom = "11.1%";
    div2.style.float = "left";
    div2.style.display = "inline-block";
    container.appendChild(div2);
  }
}
