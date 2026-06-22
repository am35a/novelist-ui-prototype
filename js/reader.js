$(function(){
    
    // change reader color 
    $('#colorModel1').on('click', function(){
        $('main').removeClass();
    });
    $('#colorModel2').on('click', function(){
        $('main').removeClass().addClass('bg-secondary text-white')
    });
    $('#colorModel3').on('click', function(){
        $('main').removeClass().addClass('bg-dark text-white');
    });
    
    // change reader font size
    $('#fontSize1').on('click', function(){
        $('[class*="page-"]').css('font-size', '100%');
    });
    $('#fontSize2').on('click', function(){
        $('[class*="page-"]').css('font-size', '125%');
    });
    $('#fontSize3').on('click', function(){
        $('[class*="page-"]').css('font-size', '150%');
    });
    
    // hide Header on on scroll down
    var didScroll;
    var lastScrollTop = 0;
    var delta = 5;
    var navbarHeight = $('header').outerHeight();
    $(window).scroll(function (event) {
        didScroll = true;
    });
    setInterval(function () {
        if (didScroll) {
            hasScrolled();
            didScroll = false;
        }
    }, 250);
    function hasScrolled() {
        var st = $(this).scrollTop();
        // make sure they scroll more than delta
        if (Math.abs(lastScrollTop - st) <= delta) return;
        // if they scrolled down and are past the navbar, add class .nav-up.
        // this is necessary so you never see what is "behind" the navbar.
        if (st > lastScrollTop && st > navbarHeight) {
            // Scroll Down
            if (!$('#collapseInfo').hasClass('show') && !$('#collapseList').hasClass('show') && !$('#collapseSettings').hasClass('show')  )
                $('header').fadeOut();
        } else {
            // Scroll Up
            if (st + $(window).height() < $(document).height()) {
                $('header').fadeIn();
            }
        }
        lastScrollTop = st;
    }
    
    // TMP
//    $("#bookContent p").mouseup(function() {
//        var selected_text = "";
//        if(window.getSelection) {
//            selected_text = window.getSelection().toString();
//        } else if(document.selection && document.selection.type != "Control") {
//            selected_text = document.selection.createRange().text;
//        }
//        if(selected_text != "") {
//            // Действие, если текст выделен
//            alert('Select text');
//        }
//    });
    
    //https://stackoverflow.com/questions/5379120/get-the-highlighted-selected-text
    
/*function selectionOffset () {
    var selection = window.getSelection();
 
    if (!!selection.toString().length) {
        var offset = [selection.anchorOffset, selection.focusOffset];
 
        if (offset[0] > offset[1]) {
            var _offset = offset[0];
            offset[0] = offset[1], offset[1] = _offset;
        };
 
        if (selection.focusNode == selection.anchorNode) {
            //alert(offset);
            $('#txtselact').css('top', offset[0]).css('left', offset[1]);
        } else return false;
    };
};*/
/*    function getSelectionText() {
        var text = '';
        var activeEl = document.activeElement;
        var activeElTagName = activeEl ? activeEl.tagName.toLowerCase() : null;
        if (window.getSelection) {
            text = window.getSelection().toString();
        }
        return text;
    }
    document.onselectionchange = function(event) {
        if(getSelectionText() == '') {
            // нет выделения
            $('#sel').html('Пусто');
        } else {
            // выделенна область
            $('#sel').html(getSelectionText());
//            $('#sel').append(selectionOffset());
//            $('#txtselact').css('left', currentMousePos.x = event.pageX;).css('top', offset[1]);
        }
    };
    
    $('#bookContent').mousemove(function(event) {
        if(getSelectionText() != '')
            $('#txtselact').css('left', event.pageX).css('top', event.pageY);
    });    */
    
    // bookmarking
    $("#bookContent p").on('click', function (e) {
        if (e.offsetX > $(this).width())
            if(!$(this).hasClass('bookmarked')) {
                $(this).addClass('bookmarked');
            } else {
                $(this).removeClass('bookmarked');
            }
    });
    
    // delete mention blocks
    $('[data-dismiss="mention"]').on('click', function(){
        $('#' + $(this).attr('data-mention')).remove();
    });
    
    // set left position for text select button group
    function btnGroupSelectPosition(){
        var bcWidth = $('#bookContent').offset().left + $('#bookContent').outerWidth();
        if (($(window).width() - bcWidth - ($('#bookContent').outerWidth() - $('#bookContent').width())/2) > $('.btn-group-select').width())
            $('.btn-group-select').css('right', 'auto').css('left', bcWidth);
        else
            $('.btn-group-select').css('left', 'auto').css('right', 0);
    }
    btnGroupSelectPosition();
    
    // some functions in resize action
    $(window).resize(function(){
        btnGroupSelectPosition();
    });    

});
