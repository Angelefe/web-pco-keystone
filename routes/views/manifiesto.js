var keystone = require('keystone');
var Post = keystone.list('Post');
exports = module.exports = function (req, res) {
	var view = new keystone.View(req, res);
	var locals = res.locals;
	// locals.section is used to set the currently selected
	// item in the header navigation.
	locals.section = 'home';
	Post.model.findOne()
		.where('categories', ['5aeb8c176f61fe19b501f9e8'])
    .exec(function(err, post) {
      console.log(post.title);
			view.render('manifiesto',{post: post});
    });
	// Render the view
};
