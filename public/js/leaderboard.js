var myObj, txt = "";
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
