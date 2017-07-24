// request to blocks then append resutl to list

$(function () {

	$.get('/blocks', appendToList);

	function appendToList(blocks){
		var list = [];
		var content, block;
		for(var i in blocks){

			// list.push($('<li>',{text: blocks[i]}));
			block = blocks[i];
			content = '<a href="/blocks/'+block+'">'+ block + '</a>';
			list.push($('<li>',{html: content}));
		}

		$('.block-list').append(list);
	}

	$('form').on('submit',function(event){
		event.preventDefault();
		var form = $(this);
		var blockData = form.serialize();

		$.ajax({
			type:'POST',
			url:'/blocks',
			data: blockData,
		}).done(function(blockName){
			// luego de terminar agregamos el archivo a nuestra
			// lista pero ocmo espera un arreglo del bloques y no 
			// un solo bloque lo ponemos entre []
			appendToList([blockName]);
			form.trigger('reset'); //clears input text fields

		});
	});


});