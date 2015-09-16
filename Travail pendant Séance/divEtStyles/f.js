//javascript:{var script = document.createElement("script");script.src = "http://localhost:63342/S%C3%A9ance%201/divEtStyles/f.js";document.getElementsByTagName("body")[0].appendChild(script);}

var background = document.createElement("div");
    var body = document.getElementsByTagName("body")[0];
    body.appendChild(background);
    background.style.backgroundColor = "rgba(0,0,0,0.5)";
    background.style.width = "100%";
    background.style.height = "100%";
    background .style.position = "absolute";
    background.style.top = "0";
    background.style.left = "0";
    background.style.zIndex = 300;

    var dialog = document.createElement("div");
    background.appendChild(dialog);
    dialog.style.backgroundColor = "#FFFFFF";
    dialog.style.margin = "auto";
    dialog.style.width = "300px";
    dialog.style.height = "200px";
    dialog.style.position = "relative";
    dialog.style.top = "200px";
    dialog.style.textalign="center";
    dialog.paddingTop = "20px";
    dialog.appendChild(document.createTextNode("Hey"));

    var buttonP = document.createElement("p");
    buttonP.style.textAlign = "right";
    buttonP.style.marginTop = "50px";
    buttonP.style.marginRight = "20px";

    dialog.appendChild(buttonP);

    var button = document.createElement("button");
    buttonP.appendChild(button);
    button.appendChild( document.createTextNode("Ok"));


    background.addEventListener(
        "click",
        function(){
            body.removeChild(background);
        }
    );

    button.addEventListener(
        "click",
        function() {
            background.removeChild(dialog);
        }
    );

    dialog.addEventListener(
        "click",
        function(event) {
            event.stopPropagation();
        }
    );



