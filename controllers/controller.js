module.exports = {

    viewAll: (app, req, res) => {
        // res.send("View All");
        app.get('myDb').collection('bets').find({}).toArray((err, docs) => {

            if (err) {
                console.error(err)
            }
            res.json(docs)
        })
    },

    addBet: (app, req, res) => {
        console.log(req.body);
        let newBet = req.body;
        // let betID = parseInt(newBet.betID);
        // newBet.betID = betID
        // console.info(newStaff);
        // res.send('post')
        // res.send(`here we'll add a record with this data `);
        app.get('myDb').collection('bets').insertOne(newBet, (err, docs) => {
            if (err) {
                console.error(err)
            }
            res.json({'msg':'successful'})
        })
    }
}
