var keystone = require('keystone');
var Gallery = keystone.list('Gallery');
exports = module.exports = function (req, res) {
	var view = new keystone.View(req, res);
	var locals = res.locals;
	// locals.section is used to set the currently selected
	// item in the header navigation.
	locals.section = 'home';
	Gallery.model.findOne()
    .where('name', 'periodicos')
    .exec(function(err, img_periodicos) {
      console.log(img_periodicos.images);
			view.render('periodicos',{img_periodicos: img_periodicos});
    });
	// Render the view
};
