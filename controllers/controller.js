module.exports = {
    viewAll: function (app, req, res) {
        //res.send("View All");
        app.get('myDb').collection('staffCollection').find({}).toArray(function (err, docs) {
            if (err) {
                console.error(err)
            }
            res.json(docs)
        })
    },
    viewSingle: function (app, req, res) {
        let staffID = req.params.staffID;
        staffID = parseInt(staffID);
        //res.send(`Just one Record looking for ${staffID}` );
        app.get('myDb').collection('staffCollection').find({ "staffID": staffID }).toArray(function (err, docs) {
            if (err) {
                console.error(err)
            }
            res.json(docs)
        })
    },
    addStaff: function (app, req, res) {
        let newStaff = req.body;
        let staffID = newStaff.staffID;
        newStaff.staffID = staffID;
        console.info(newStaff);
        // res.send(`Here we'll add a record with this data: `);
        app.get('myDb').collection('staffCollection').insertOne(newStaff, function (err, docs) {
            if (err) {
                console.error(err)
            }
            res.json({ "msg": "Successful" })
        })
    },
    editStaff: function (app, req, res) {
        // res.send("Here we do updates")
        console.info("PUT controller")
        var amendStaff = req.body;
        console.dir(amendStaff);
        var staffID = parseInt(amendStaff.staffID);
        app.get('myDb').collection("staffCollection").updateOne(
            { "staffID": staffID },
            {
                $set: {
                    "staffName": amendStaff.staffName,
                    "staffEmail": amendStaff.staffEmail
                }
            },
            function (err, dbResp) {
                if (err) {
                    console.error(err)
                }
                if (dbResp.modifiedCount === 1) {
                    res.json({ msg: "Successfully Amended" })
                } else {
                    res.json({ msg: "Not Found" })
                }
            })
    },
    deleteStaff: function (app, req, res) {
        // res.send("Delete a staff record")
        var removeStaff = req.body;
        var staffID = parseInt(removeStaff.staffID);
        console.dir(removeStaff);
        app.get('myDb').collection("staffCollection").deleteOne(
            { "staffID": staffID },
            function (err, dbResp) {
                if (err) {
                    console.error(err)
                }
                if (dbResp.deletedCount === 1) {
                    res.json({ msg: "Successfully Removed" })
                } else {
                    res.json({ msg: "Not Found" })
                }
            })
    }
}