
/**
 * 小巫
 */
function getContentMe() {
 		var formData = {
			'order_type' 		    : 'SHIUSS_ME'
		};

		// process the form
		$.ajax({
			type 		: 'GET', // define the type of HTTP verb we want to use (POST for our form)
			url 		: 'https://script.google.com/macros/s/AKfycbz9HhXguoQbEVY98kSJnccDsUsRjilPX4pmlcQY0bboptjvDfQK/exec', // the url where we want to POST
			data 		: formData, // our data object
			dataType 	: 'json', // what type of data do we expect back from the server
			success: function(json){
                alert(json);
				bindMe(json);
			},
			error: function(e){
				alert('失敗:' + e);
			}
		})
			// using the done promise callback
			.done(function(data) {
				//alert("送出完成");
			})

			// using the fail promise callback
			.fail(function(data) {

				// show any errors
				// best to remove for production
				alert("失敗("+data + ")");
			});

		// stop the form from submitting the normal way and refreshing the page
		event.preventDefault();
};


function bindMe(data) {
	document.getElementById("content_me").innerHTML = `
        <img src="./slides/logo.jpg" width="10%"/>	
		<p>
			${data.map(function(view) {
				return `
                    ${view[0]}
					`
			}).join('')}
		</p>
	`
}
