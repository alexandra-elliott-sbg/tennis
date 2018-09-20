module.exports = {

    viewAll: (app, req, res) => {
        // res.send("View All");
        app.get('myDb').collection('staffCollection').find({}).toArray((err, docs) => {

            if (err) {
                console.error(err)
            }
            res.json(docs)
        })
    },

    viewSingle: (app, req, res) => {
        let staffID = req.params.staffID;
        staffID = parseInt(staffID);
        //res.send(`Just one record looking for ${staffID}`);
        app.get('myDb').collection('staffCollection').find({'staffID': staffID}).toArray((err, docs) => {

            if (err) {
                console.error(err)
            }
            res.json(docs)
        })
    },

    addStaff: (app, req, res) => {
        let newStaff = req.body;
        let staffID = parseInt(newStaff.staffID);
        newStaff.staffID = staffID
        console.info(newStaff);
        // res.send('post')
        // res.send(`here we'll add a record with this data `);
        app.get('myDb').collection('staffCollection').insertOne(newStaff, (err, docs) => {
            if (err) {
                console.error(err)
            }
            res.json({'msg':'successful'})
        })
    },
    editStaff: (app, req, res) => {
        var amendStaff = req.body;
        var staffID = parseInt(amendStaff.staffID);
        app.get('myDb').collection('staffCollection').updateOne(
            {'staffID': staffID},
            { $set: {
                'staffName' : amendStaff.staffName,
                'staffEmail': amendStaff.staffEmail}
            },
            (err, docs) => {
            if (err) {
                console.error(err)
            }
            res.json({'msg':'successful'})
        })
    },
    deleteStaff: (app, req, res) => {
        var deleteStaff = req.body;
        var staffID = parseInt(deleteStaff.staffID);
        app.get('myDb').collection('staffCollection').deleteOne({'staffID': staffID}, (err, dbResp) => {
            if (err) {
                console.error(err)
            }
            if(dbResp.deletedCount === 1){
                res.json({'msg':'successful'})
            }else{
                res.json({'msg':'not found'}) 
            }
           
        })
    }}
