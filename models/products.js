NEWSCHEMA('Products').make(function(schema) {
	schema.setQuery(function(error, options, callback, controller) {

     var sql = DB();

  	 sql.select('products', 'products').make(function(builder) {
  	 	builder.field('p_name');
  	 });

  	 sql.exec(function(err, response) {
        console.log(response.products);
  	 	return response.products;
      callback(callback);
  	 });

	});

});
