module.exports = {

    viewAll: (app, req, res) => {
        app.get('myDb').collection('bets').find({}).toArray((err, docs) => {

            if (err) {
                console.error(err)
            }
            res.json(docs)
        })
    },

    addBet: (app, req, res) => {
        let newBet = req.body;
        console.log(newBet);

        // assign bet ID
        
      
       
        app.get('myDb').collection('bets').insertOne(newBet, (err, docs) => {
            if (err) {
                console.error(err)
            }
            console.log(docs);
            res.json({ 'msg': 'successful' })
        })
    }
}