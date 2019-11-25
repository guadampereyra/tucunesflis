
    $('#recipeCarousel').carousel({
        interval: 10000
    })

    $('.carousel .carousel-item .movie').each(function(){
        var next = $(this).next();
        if (!next.length) {
           next = $(this).siblings(':first');
        }
        next.children(':first-child').clone().appendTo($(this));
        
        if (next.next().length>0) {
            next.next().children(':first-child').clone().appendTo($(this));
        }
        else {
            $(this).siblings(':first').children(':first-child').clone().appendTo($(this));
        };
    });


// $(function(){
// var includes = $('[data-include]');
// jQuery.each(includes, function(){
// var file = './partials/' + $(this).data('include') + '.html';
// $(this).load(file);
// });
// });
