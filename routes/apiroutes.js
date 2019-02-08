let friends = require('../app/data/friends');

module.exports = function(app){
    
    app.post('/api/friends', function(req,res) {
        let userScoresArr = req.body.scores;
        let bestMatch = {};
        let matchDiff = 999;
        for (let i = 0; i < friends.length; i++){
            let diff = 0;
            for (let j = 0; j < friends[i].scores.length; j++){
                diff += Math.abs(parseInt(friends[i].scores[j]) - parseInt(userScoresArr[j]));
            };
            if (diff < matchDiff){
                matchDiff = diff;
                bestMatch = friends[i];
            };
        };
        friends.push(req.body);
        res.json(bestMatch);
    })
      
    

}
