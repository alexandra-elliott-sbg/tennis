(function () {
    var myForm = document.getElementById('makeBet')
    var player = document.location.hash.slice(1)
    myForm.addEventListener('submit', (ev) => {
        ev.preventDefault();
        console.info('forms submitted')

        let formData = {};
        $('#makeBet').serializeArray().forEach(function(match, player){
            formUser = player;
            formData[match.name] = match.value;
        });

        console.dir(formData);
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
                console.dir(myData);
                if (myData.msg === 'successful') {
                    window.location.href = 'betSubmitted.html#' + player;
                }
            })
    })
})();

document.location.hash.slice(1)