var keystone = require('keystone');
var Post = keystone.list('Post');
exports = module.exports = function (req, res) {
	var view = new keystone.View(req, res);
	var locals = res.locals;
	// locals.section is used to set the currently selected
	// item in the header navigation.
	locals.section = 'home';
	Post.model.find()
    .where('state', 'published')
		.where('categories', ['5aeb8c0e6f61fe19b501f9e7'])
    .sort('-publishedAt')
    .exec(function(err, posts) {
      console.log(posts);
			view.render('index',{posts: posts});
    });
	// Render the view
};
