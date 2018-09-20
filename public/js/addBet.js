(function(){
    var myForm = document.getElementById('myAddForm')
    myForm.addEventListener('submit', (ev) => {
        ev.preventDefault();
        console.info('forms submitted')
        // console.info(staffID);
        let userID = document.getElementById('userID').value;
        let formData = {
            'userID': userID
        };
        console.dir(formData);
        let endPoint = '/api/bets';
        fetch(endPoint, {
            method: 'post',
            body: JSON.stringify(formData),
            headers:{
                'Content-Type': 'application/json'
            }
        })
        .then(function(response){
            return response.json();
        })
        .then(function(myData){
            console.dir(myData);
            // if(myData.msg === 'successful'){
            //     window.location.href = 'thanks.html';
            // }
        })
    })
})();