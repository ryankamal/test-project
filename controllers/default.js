var Products = GETSCHEMA('Products');

exports.install = function() {
	F.route('/', view_homepage);
};

function view_homepage() {

	var self = this;

	self.view('index',{
		PRODUCTS : Products.Products
	});
}
