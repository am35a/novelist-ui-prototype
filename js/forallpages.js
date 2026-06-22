$(function(){
    
    // set autofocus for search nav
    $('#collapseSearch').on('shown.bs.collapse', function(){
        $('#globalSearch').focus();
    })            
    
    // initialize all tooltips on all pages by their data-toggle attribute
    $('[data-toggle="tooltip"]').tooltip()
    
    // initialize all popover on all pages by their data-toggle attribute
    $('[data-toggle="popover"]').popover()
    
    // collaps by click all header menu
    $('main').on('click', function(){
        $('header .collapse').collapse('hide');
    });
    
    // create and destroy gallery by click on data-type="gallery"
    $('[data-type="gallery"]').click(function(event){
        event.preventDefault();
        $('body')
            .css('padding-right', window.innerWidth - document.body.clientWidth)
            .addClass('overflow-hidden')
            .append('<div class="gallery text-light"><span class="p-3 small">Clik or tap to close!</span><img class="shadow-sm" src='+$(this).attr('data-image')+'></div>');
        $('.gallery').click(function(){
            $(this).remove();
            $('body')
                .removeClass('overflow-hidden')
                .css('padding-right', '');
        });
    });
    
    //create Show or hide to the top float navigation
    $('body').prepend('<button class="btn-top-jumper btn btn-primary p-1 border-0 rounded-circle shadow d-none" title="В начало страницы"><i class="fas fa-arrow-alt-circle-up fa-3x"></i></button>');
    $(window).scroll(function(){
        if ($(this).scrollTop() > $(window).height())
            $('.btn-top-jumper').removeClass('d-none');
        else
            $('.btn-top-jumper').addClass('d-none');
    });
    $('.btn-top-jumper').click(function(){
        $('body, html').animate({scrollTop: 0}, 500);
        return false;
    });
    
    // hide and show content block and aside block
    $('.toggleBlocks').on('click', function(){
        $('#listBlock, #asideBlock').toggleClass('d-none');
    });
    
    // catch href=# jump to top
    $('a[href="#"]').click(function(event){
        event.preventDefault();
        $(document).off('scroll');
        $('html, body').stop().animate({'scrollTop': $(this.hash).offset().top }, function(){$(document).on('scroll', onScroll)});
    });
    
    // enable tooltip as second call
    $('[data-rel="tooltip"]').tooltip({trigger: "hover"});
    
    
    // create event to clear button in input field
    $('[data-action="clearable"]').each(function(){
        var $input = $(this).find('input'),
            $clear = $(this).find('[data-action="clear"]');
        $input.on('input focusin', function(){
            $clear.toggle(!!this.value);
        });
        $clear.on('touchstart click', function(e) {
            e.preventDefault();
            $input.val('').trigger('input').focus();
        });
    });
    
    // create event to clear button in textarea
    // can finde in guestbook.js
    
    // toggle cards gallery view
    $('[data-decklist]').click(function(){
        var delishift = $(this).attr('data-delishift');
        switch($(this).attr('data-decklist')){
            case 'deck':
                $('#' + delishift).removeClass('card-list').addClass('card-deck');
                $(this).tooltip('hide').prop('disabled', true);
                $('[data-decklist="list"][data-delishift="' + delishift + '"]').prop('disabled', false);
                break;
            case 'list':
                $('#' + delishift).removeClass('card-deck').addClass('card-list');
                $(this).tooltip('hide').prop('disabled', true);
                $('[data-decklist="deck"][data-delishift="' + delishift + '"]').prop('disabled', false);
                break;
        }        
    });
    $('.card-deck').each(function(){
        $('[data-decklist="deck"][data-delishift="' + $(this).attr('id') + '"]').prop('disabled', true);
    });
    $('.card-list').each(function(){
        $('[data-decklist="list"][data-delishift="' + $(this).attr('id') + '"]').prop('disabled', true);
    });
    
    // like Bootstrap but not toggle all classes at once
    // <... data-area="collapse">
    //     <... class="collapse">...</>
    //     <... data-toggle="collapse-area" data-target=".collapse">...</>
    // </...>
    //$('[data-toggle="collapse-area"]').click(function() {
    //    $(this).parent().children('.collapse').toggleClass('show');
    //});
    
    // actions for clickable elements with attribute data-action
    //$('[data-action]').click(function() {
    //    switch($(this).attr('data-action')){
    //        case 'suicide':
    //            $(this).remove();
    //            break;
    //        case 'active':
    //            $(this).toggleClass('active');
    //            break;
    //    }
    //});
    
    /*
    $('[data-toggle="collapse"]').click(function() {
        $(this).toggleClass( "active" );
        if ($(this).hasClass("active")) {
            $(this).text("Hide");
        } else {
            $(this).text("Show");
        }
    });
    */
    
});