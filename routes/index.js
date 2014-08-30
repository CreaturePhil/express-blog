var express = require('express');
var router = express.Router();
var Post = require('../models/post');

/* GET home page. */
router.get('/', function(req, res) {
  Post.find(function(err, posts) {
    res.render('index', { 
      title: 'my Blog!', 
      posts: posts
    });
  });
});

router.post('/', function(req, res) {
  if (!req.body.title || !req.body.text) {
    return res.redirect('/');
  }
  var post = new Post({
    title: req.body.title,
    text: req.body.text,
    date: (new Date())
  });
  post.save(function(err) {
    res.redirect('/'); 
  });
});

module.exports = router;
