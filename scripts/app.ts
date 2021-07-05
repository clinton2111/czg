$(document).ready(function () {


	if ($(window).width() > 993) {
		resizeCol('.section_1');
		resizeCol('.section_2');

		$(window).resize(() => {
			resizeCol('.section_1');
			resizeCol('.section_2');
		})
	}

	$("#contactForm").submit(function (e) {

		e.preventDefault(); // avoid to execute the actual submit of the form.

		let form = $(this);
		console.log(form.serialize());

		const root: String = 'http://localhost/czg/'

		$.ajax({
			type: "POST",
			url: root + 'api/insert.php',
			data: form.serialize(), // serializes the form's elements.
			success: function (data) {

				data = JSON.parse(data)
				console.log(data); // show response from the php script.
				alert(data.message)
			}
		});


	});
});

let resizeCol = (identifier: any) => {
	$(identifier).each(function () {
		let $columns = $('.col', this);
		let maxHeight = Math.max.apply(Math, $columns.map(function () {
			return $(this).outerHeight();
		}).get());
		$columns.outerHeight(maxHeight);
	});
}