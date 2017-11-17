var questions = require('../controllers/questions.js')
var path = require('path');

module.exports = function(app) {

	app.get('/all', questions.all); 

	app.get('/question/:id', questions.show); 
	
	app.post('/questions', questions.create);

	app.post('/questions/update/:id', questions.update);

	app.post('/questions/like/:id', questions.like);


	
		


	app.all("*", (req, res, next) => {
			res.sendFile(path.resolve("./client/dist/index.html"))
		});

		
	};
