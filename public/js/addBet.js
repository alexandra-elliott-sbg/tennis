(function () {

    var form = document.getElementById('submitMyButt');
    form.addEventListener('click', (ev) => {
        ev.preventDefault();
        console.info('forms submitted')

        let formData = {};
        $('#makeBet').serializeArray().forEach(function(match){
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
                    window.location.href = 'betSubmitted.html';
                }
            })
    })
})();
