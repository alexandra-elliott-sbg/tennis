
fetch('/api/bets')
.then(function(response){
    return response.json();
})
.then(function(myData){
    console.dir(myData)
    
})