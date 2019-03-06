// Check off specific todos by clicking
$("ul").on("click", "li", function(){
    $(this).toggleClass("completed")
});

// Click on X to delete todo
$("ul").on("click", "span", function(event){
    $(this).parent().fadeOut(500, function(){
        $(this).remove(); //'this' now is referred to the li (this.parent = li), not span
    });
    event.stopPropagation();
});

$("input[type='text']").keypress(function(){
    if(event.which === 13){
        var todoText = $(this).val();
        $(this).val("");
        $("ul").append("<li><span><i class='fas fa-trash-alt'></i> </span>" + todoText + "</li>");
    }
});

$(".fa-plus").click(function(){
    $("input[type='text']").fadeToggle();
});