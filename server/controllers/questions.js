var mongoose = require('mongoose');
var Question = mongoose.model('Question');
var Answer = mongoose.model('Answer')

module.exports = {
  all: function(req, res) {
    Question.find({}).sort('rating').exec(function(err, questions) {
      console.log(questions);
      res.json(questions);
    })
  },

  create: function(req, res) {
    console.log(req);
    var question = new Question({question: req.body.question, description: req.body.description});
    question.save(function(err) {
      if(err){ 
        console.log("something went wrong");
      } else {
        console.log('THE Question HAS ENTERED THE DATABASE AS', question);
        res.json(question);
      }
    })
  },

    show: function(req, res){
      console.log(req.params.id);
      Question.findOne({_id: req.params.id}).populate({path: 'answers', options: { sort: { 'likes': -1 } } }).exec(function(err, question){
        if(err){
          console.log(err);
        }
        else {
          console.log("question has been found");
          res.json(question);    
        }
      }); 
        
    },
    
    update: function (req, res){
      var x = {};
      Question.findOne({_id: req.params.id}).populate('answers').exec(function(err, question){
        // data from form on the front end
        var answer = new Answer(req.body);
        console.log(req.body);
        //  set the reference like this:
        answer._question = question._id;
        // now save both to the DB
        answer.save(function(err){
                question.answers.push(answer);
                question.save(function(err){
                     if(err) {
                          console.log('Error');
                     } else {
                          console.log('Question Updated. - Answer Added');
                          res.json(question);
                     }
                 });
          });
      });
 },

  like: function(req,res){
    Answer.findOne({_id: req.params.id}, function(err, answer){
      answer.likes += 1;
      answer.save(function(err){
        if(err){
          console.log('Error');
        }
        else{
          res.redirect('/all');
        }
      })
    })
  }

}
