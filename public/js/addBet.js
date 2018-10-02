(function () {
    var myForm = document.getElementById('makeBet')
    var player = document.location.hash.slice(1)
    myForm.addEventListener('submit', (ev) => {

        let formData = {};
        $('#makeBet').serializeArray().forEach(function(match, player){
            formUser = player;
            formData[match.name] = match.value;
        });

        let endPoint = '/api/bets';
        fetch(endPoint, {
            method: 'post',
            body: JSON.stringify(formData),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(function (response) {
                return response.json();
            })
            .then(function (myData) {
                if (myData.msg === 'successful') {
                    window.location.href = 'betSubmitted.html#' + player;
                }
            })
    })
})();