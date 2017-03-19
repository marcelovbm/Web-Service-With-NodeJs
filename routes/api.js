var express = require('express');
var router = express.Router();

/* GET List User */
router.get('/listUsers', function(req, res) {
    fs.readFile(__dirname + "/" + "users.json", 'utf8', function(err, data) {
        console.log(data);
        res.end(data);
    });
})

module.exports = router;