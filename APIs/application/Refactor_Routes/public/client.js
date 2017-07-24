// request to blocks then append resutl to list

$(function () {

	$.get('/blocks', appendToList);

	function appendToList(blocks){
		var list = [];
		var content, block;
		for(var i in blocks){

			// list.push($('<li>',{text: blocks[i]}));
			block = blocks[i];
			content = '<a href="#" data-block="'+block+'""><img src="delete.png" width=15px height=15px ></a>'+ '<a href="/blocks/'+block+'">'+ block + '</a>' 
			;
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
	// a[data-block] aquellos links que tengan el atributo data-block 
	$('.block-list').on('click','a[data-block]',function(event){
		// primero agregamos una confirmacion
		if (!confirm('Are you sure?')){
			return false;
		}
		// the link element that was clicked
		var target = $(event.currentTarget);

		$.ajax({
			type: 'DELETE',
			//reads the block name form the link's data-block attribute
			url: '/blocks/' +target.data('block')
		}).done(function(){
			target.parents('li').remove();
		});

	});


});