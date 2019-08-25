var friends = require('../data/friends.js');

function apiRoutes(app) {
    app.get('/api/friends', (req,res) => {
        res.json(friends);
    });

    app.post('/api/friends', (req,res) => {
        let differences = [];
        let me = req.body.scores;

        for (let i of friends) {
            let diff = 0;
            let scores = friends[i].scores
            for (let j of scores) {
                diff += Math.abs(me[j] - scores[j]);
            }
            differences.push(diff);
        }

        let index = 0;

        for (let i in differences) {
            if (differences[i] < differences[index]) {
                index = i;
            }
        }

        res.json(friends[index]);
    });
}

module.exports = apiRoutes;