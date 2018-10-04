var myObj, txt = "";
	var formUser = document.location.hash.slice(1)
	$.ajax({
		type: "GET",
		url: '/api/bets',
		dataType: 'json',
		async: false,
		success: function (response) {
			myData = response;
			// txt += "<table class='RS2'>";
			// txt += "<th>Player</th>   <th>Match 1</th>    <th>Match 2</th>   <th>Match 3</th>    <th>Match 4</th>";
            // txt += "<tr><td>"+ formUser + "</td><td>" + myData[0].match1 + "</td><td>" + myData[0].match2 + "</td><td>" + myData[0].match3 + "</td><td>" + myData[0].match4 + "</td>  </tr>";
            
            txt += "<table class='RS2'>";
            txt += "<th>Player</th>";
            txt += "<tr><td>"+ formUser + "</td></tr>"
            txt += "</table>"
            
            txt += "<table class='RS2'>";
            txt += "<th>Match1</th>";
            txt += "<tr><td>"+ myData[myData.length -1].match1 + "</td></tr>"
            txt += "</table>"

            txt += "<table class='RS2'>";
            txt += "<th>Match2</th>";
            txt += "<tr><td>"+ myData[myData.length -1].match2 + "</td></tr>"
            txt += "</table>"

            txt += "<table class='RS2'>";
            txt += "<th>Match3</th>";
            txt += "<tr><td>"+ myData[myData.length -1].match3 + "</td></tr>"
            txt += "</table>"

            txt += "<table class='RS2'>";
            txt += "<th>Match4</th>";
            txt += "<tr><td>"+ myData[myData.length -1].match4 + "</td></tr>"
            txt += "</table>"

            
            // for (x in myData) {
			// 	txt += "<tr><td>" + formUser + "</td><td>" + myData[x].match1 + "</td><td>" + myData[x].match2 + "</td><td>" + myData[x].match3 + "</td><td>" + myData[x].match4 + "</td>  </tr>";

			// }
			txt += "</table > "
			document.getElementById("bets").innerHTML = txt
		},
		error: function () {
			console.log(arguments);
			alert('Something went wrong!');
		}

	});