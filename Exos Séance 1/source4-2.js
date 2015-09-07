for (var i = 0; i < 10; i++) {
	document.write("<tr>");
	for (var j = 0; j < 10; j++) {
		document.write("<td style='border-top : 1px solid red ; border-bottom : solid 1px green ; border-left : solid 1px blue ; border-right : solid 1px grey '>" + i*j + "</td>");
	}
	document.write("</tr>");
}
