/**
 * Created by Anne-So on 08/09/2015.
 */


//javascript:{var script = document.createElement("script");script.src = "http://localhost:63342/S%C3%A9ance%201/classes/f.js";document.getElementsByTagName("body")[0].appendChild(script);}

function Popup (title) {
    this.title = title;
}

Popup.prototype = {
    body : document.getElementsByTagName("body")[0],
    show : function (){
        this.createBackground();
        this.createDialogBox();
        this.createTitle();
        this.createButton();
    },
    createBackground : function () {
        var background = document.createElement("div");
        this.body.appendChild(background);
        background.style.backgroundColor = "rgba(0,0,0,0.5)";
        background.style.width = "100%";
        background.style.height = "100%";
        background .style.position = "absolute";
        background.style.top = "0";
        background.style.left = "0";
        background.style.zIndex = 300;
        /* On évite d'écrire : this.style à chaque fois. */
        this.background = background;
    },

    createDialogBox : function() {
        var dialog = document.createElement("div");
        this.background.appendChild(dialog);
        dialog.style.backgroundColor = "#FFFFFF";
        dialog.style.margin = "auto";
        dialog.style.width = "300px";
        dialog.style.height = "200px";
        dialog.style.position = "relative";
        dialog.style.top = "200px";
        dialog.style.textalign="center";
        dialog.paddingTop = "20px";
        dialog.appendChild(document.createTextNode("Hey"));
        this.dialog = dialog;
    },

    createTitle : function() {
        var buttonP = document.createElement("p");
        buttonP.style.textAlign = "right";
        buttonP.style.marginTop = "50px";
        buttonP.style.marginRight = "20px";
        this.dialog.appendChild(buttonP);
        this.buttonP = buttonP;
    },

    createButton : function() {
        var button = document.createElement("button");
        this.buttonP.appendChild(button);
        button.appendChild( document.createTextNode("Ok"));
        this.button = button;
    }

}

new Popup("Ouf").show();