
var counter = 0;

module.exports = {
    
	like: function(req, res) {
		if (!req.params.targetId) {
			return res.send(400, 'Incorrect parameters');
		}
		res.send(200, {
			targetId: req.params.targetId,
			isMatched: !!(++counter % 3 == 0)
		});
	},
	
	dislike: function(req, res) {
		if (!req.params.targetId) {
			return res.send(400, 'Incorrect parameters');
		}
		res.send(204);
	},
	
	findByGeo: function (req, res) {
		UserService.suggestByGeo(req.params.userId, req.params.count)
			.then(function(users) {
				res.send(users);
			})
			.fail(function (error) {
				logger.error('Api SuggestByGeo: %s', error.toString());
				res.send(500, 'Internal error');
			});
	}
};

