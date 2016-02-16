// Your JS goes here
  var bodyTarget = document.getElementsByTagName("body")[0];
  window.addEventListener("load", checkerBoard);

function checkerBoard(){

  // var newTable = document.createElement("table");
  // var newTableRow = document.createElement("tr");
  // var newTableData = document.createElement("td");
  //
  // newTableRow.appendChild(newTableData);
  // newTable.appendChild(newTableRow);
  // bodyTarget.appendChild(newTable);
  //
  // newTable.style.backgroundColor("blue");


  // var newDiv = document.createElement("div");
  // bodyTarget.appendChild(newDiv);
  // newDiv.style.height = "140px";
  // newDiv.style.width = "11.1%";
  // newDiv.style.backgroundColor = "black";
  // newDiv.syle.float = "left";


  for (var i = 0; i <= 8; i ++){
    for (var k = 0; k <= 8; k ++){
      if ((i%2 != 0 || k%2 == 0) && (i%2 == 0 || k%2 !=0)){
        var newDiv = document.createElement("div");
        bodyTarget.appendChild(newDiv);
        newDiv.style.backgroundColor = "black";
        newDiv.style.width = "11.1%";
        newDiv.style.paddingBottom = "11.1%"
        newDiv.style.float = "left";
      }else {
        var newDiv = document.createElement("div");
        bodyTarget.appendChild(newDiv);
        newDiv.style.backgroundColor = "red";
        newDiv.style.paddingBottom = "11.1%"
        newDiv.style.width = "11.1%";
        newDiv.style.float = "left";


      }
    }
  }

    //var body = document.getElementsByTagName('body')[0];
    // var tbl = document.createElement('table');
    // tbl.style.width = '100%';
    // tbl.style.height = '500px';
    // tbl.setAttribute('border', '1px');
    // var tbdy = document.createElement('tbody');
    // for (var i = 0; i < 9; i++) {
    //     var tr = document.createElement('tr');
    //     for (var j = 0; j < 9; j++) {
    //         if (i == 8 && j == 8) {
    //             break
    //         } else {
    //             var td = document.createElement('td');
    //             //td.appendChild(document.createTextNode('\u0020'))
    //             //i == 1 && j == 1 ? td.setAttribute('rowSpan', '2') : null;
    //             tr.appendChild(td)
    //         }
    //     }
    //     tbdy.appendChild(tr);
    // }
    // tbl.appendChild(tbdy);
    // bodyTarget.appendChild(tbl)


}
