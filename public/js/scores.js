var myObj, txt = "";
		$.ajax({
			type: "GET",
			url: '/Databases/scores.json',
			dataType: 'json',
			async: false,
			success: function (response) {
				myData = response;
				txt += "<table class='resTable'><tr>";
				txt += "<th>Match</th><th>Player One</th><th>Score</th><th>Player Two</th>";
				txt += "</tr><tbody>";
				for (x in myData) {
					txt += "<tr><td>" + myData[x].match + "</td><td>" + myData[x].player1 + "</td>";
					txt += "<td>" + myData[x].score + "</td><td>" + myData[x].player2 + "</td></tr>";
				}
				txt += "</tbody></table>"
				document.getElementById("results").innerHTML = txt;
			},
			error: function () {
				console.log(arguments);
				alert('Something went wrong!');
			}

		});
