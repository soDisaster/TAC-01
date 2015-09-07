var mult;
var intitules_colonnes,intitules_lignes;

intitules_colonnes = prompt("Colonnes : entrer une serie de nombres separes par des virgules","2,4,6,8,10,12,19");
intitules_lignes = prompt("Lignes : entrer une serie de nombres separes par des virgules","3,6,9,12,15,18,21");

var colonnes = intitules_colonnes.split(",");
colonnes.unshift(" ");
var lignes = intitules_lignes.split(",");

document.write("<tr>");
document.write("<td>" + colonnes.join("</td><td style='background-color : #00AAAA'>")+"</td>");
document.write("</tr>");
colonnes.shift();

for (var i = 0; i < lignes.length; i++) {
	var value_ligne = parseInt(lignes[i]);
	document.write("<td style='background-color : #00AAAA'>" + value_ligne + "</td>");
	for (var j = 0; j < colonnes.length; j++) {
		var value_colonne = parseInt(colonnes[j]);
		var value = value_ligne * value_colonne;
		var nombre = value + "";
		if(value > 100)
			nombre = nombre.strike();
		else if(value/10 == parseInt(value/10))
			nombre = nombre.bold();
		document.write("<td>" + nombre + "</td>");
	}
	document.write("</tr>");
}


document.write("</tr>");


