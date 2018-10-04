var myObj, txt = "";
<<<<<<< HEAD
	$.ajax({
		type: "GET",
		url: '/Databases/users.json',
		dataType: 'json',
		async: false,
		success: function (response) {
			myData = response;
			txt += "<table class='resTable'><tr>";
			txt += "<th>Player</th><th>Score</th>";
			txt += "</tr></thead><tbody>";
			for (x in myData) {
				txt += "<tr><td>" + myData[x].userName + "</td><td>" + myData[x].score + "</td></tr>";
	
			}
			txt += "</tbody></table>"
			document.getElementById("leaderboard").innerHTML = txt;
		},
		error: function () {
			console.log(arguments);
			alert('Something went wrong!');
		}
		});
=======
		$.ajax({
			type: "GET",
			url: '/Databases/users.json',
			dataType: 'json',
			async: false,
			success: function (response) {
				myData = response;
				txt += "<table class='resTable'><tr>";
				txt += "<th>User</th><th>Score</th>";
				txt += "</tr><tbody>";
				for (x in myData) {
					txt += "<tr><td>" + myData[x].userName + "</td><td>" + myData[x].score + "</td>";
				}
				txt += "</tbody></table>"
				document.getElementById("leaderboard").innerHTML = txt;
			},
			error: function () {
				console.log(arguments);
				alert('Something went wrong!');
			}

		});
>>>>>>> ae56ac5a25ff9d030acf59c980a32a44f4c63011
