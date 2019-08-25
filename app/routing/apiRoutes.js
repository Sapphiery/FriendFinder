function apiRoutes(app,friends,express) {
    app.use(express.urlencoded({ extended: true }));
    app.use(express.json());

    app.get('/api/friends', (req,res) => {
        res.json(friends);
    });

    app.post('/api/friends', (req,res) => {
        let differences = [];
        let me = req.body.scores;

        for (let i = 0; i < friends.length; i++) {
            let diff = 0;
            let scores = friends[i].scores;
            for (let j = 0; j < scores.length; j++) {
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

        friends.push(req.body);

        res.json(friends[index]);
    });
}

module.exports = apiRoutes;