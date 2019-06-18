// when clicking on list adds line-through and grays it
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});

// click on X to delete Todo

$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	event.stopPropagation();
});

$("input[type='text']").keypress(function(evt){
	if(evt.which === 13){
		var new_item = $(this).val();
		$(this).val("");
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> "+ new_item + "</li>");
	}
});
