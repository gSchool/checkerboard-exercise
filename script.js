// Your JS goes here

window.onload = function() {

// 1. create a div 
// 2. interate to create all the elements of the checkboard, numbering each 1-63
// 3. access all divs and change the height, width, and float property
// 4. access all divs and change color: odds are black, evens are red


// creatingDIV();
creatingColurfulDIVs();
};

var creatingDIV = function() {

    for(i = 1; i < 64; i++) {
        
        var div = document.createElement("div");
        // give div size properties
        div.style.width = "11.1%";
        div.style.float = "left";
        div.style.paddingBottom = "11.1%";
        var body = document.getElementsByTagName("body");

        if(i % 2 === 0){
        // change backgroundColor to red for even numbered tiles
        div.style.backgroundColor = "red";
        div.id = i;
        document.body.appendChild(div);
        }
        else {
            // change backgroundColor to black for odd numbered tiles
            div.style.backgroundColor = "black";
            div.id = i;
            document.body.appendChild(div);
        }
    }
};

var creatingColurfulDIVs = function() {

            var colors = ["DarkGreen", "DeepPink", "DodgerBlue", "red", "aqua", "blue", "green", "pink", "black", "yellow", "grey"];
            
            for(i = 1; i < 64; i++) {
            

                var div = document.createElement("div");
                // give div size properties
                div.style.width = "11.1%";
                div.style.float = "left";
                div.style.paddingBottom = "11.1%";
                var body = document.getElementsByTagName("body");
                
                var randomNumber = Math.floor(Math.random()*colors.length);
                // change backgroundColor to red for even numbered tiles
                div.style.backgroundColor = colors[randomNumber];
                div.id = i;
                document.body.appendChild(div);
           
        }
    };