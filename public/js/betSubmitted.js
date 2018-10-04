var myObj, txt = "";
	var formUser = document.location.hash.slice(1)
	$.ajax({
		type: "GET",
		url: '/api/bets/',
		dataType: 'json',
		async: false,
		success: function (response) {
			myData = response;
			txt += "<table class='RS2'>";
			txt += "<th>Player</th>   <th>Match 1</th>    <th>Match 2</th>   <th>Match 3</th>    <th>Match 4</th>";

			for (x in myData) {
				txt += "<tr><td>" + formUser + "</td><td>" + myData[x].match1 + "</td><td>" + myData[x].match2 + "</td><td>" + myData[x].match3 + "</td><td>" + myData[x].match4 + "</td>  </tr>";

			}
			txt += "</table > "
			document.getElementById("bets").innerHTML = txt
		},
		error: function () {
			console.log(arguments);
			alert('Something went wrong!');
		}

	});