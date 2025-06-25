	$.ajax({
		url : 'api/usuarios',
	}).success(function(strJson) {
			$('#usuarios').html(doT.template(template)(strJson));
	})

$(document).ready(function(){
	$.ajax({
		type : 'GET',
		url : 'api/usuarios',
		dataType : 'json'
	}).success(function(strJson) {
		$.get('templates/template.html').done(function(template) {
			$('#usuarios').html(doT.template(template)(strJson));
		});
	})
});
$('#pesquisar').click(function() {
	$.ajax({
		type : 'POST',
			name : $('#search').val()
		dataType : 'json'
		console.info(resp);
			$("#usuarios").html(doT.template(template)(resp));

});
$('#pesquisar').click(function() {

	$.ajax({
		url : 'api/usuarios',
		type : 'POST',
		data : {
			name : $('#search').val()
		},
		dataType : 'json'
	}).done(function(resp) {
		console.info(resp);
		$.get('templates/template.html',function (template){
			$("#usuarios").html(doT.template(template)(resp));
		}, "html");

	});
});