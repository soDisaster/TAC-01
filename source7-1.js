var mult;
do {
	mult=prompt("Entrer un multiplicateur");
} while (isNaN(mult));

mult=parseInt(mult);

for (var i = 0; i < 10; i++) {
	document.write("<tr>");
	for (var j = 0; j < 10; j++) {
		var value = i*j*mult;
		nombre = value + "";
		if(value > 100)
			nombre = nombre.strike();
		else if(value/10 == parseInt(value/10))
			nombre = nombre.bold();
		document.write("<td>" + nombre + "</td>");
	}
	document.write("</tr>");
}


document.write("</tr>");


