$(function(){
    
    // toggle comment reply button
    $('.comment-reply').click(function(){
        var commentForm = $('#formReply' + $(this).attr('data-comment'));
        $(this).tooltip('hide');
        if(commentForm.is(':hidden')) {
            commentForm.attr("hidden", false);
            $(this).removeClass('far').addClass('fas');
        } else {
            commentForm.attr("hidden", true);
            $(this).removeClass('fas').addClass('far');
        }
    });
    
    // toggle comment like button
    $('.comment-like').each(function (i, el) {
        var commentLike = $(el);
        if(commentLike.attr('data-comment-status') == 'on')
            commentLike.removeClass('far').addClass('fas');
        else
            commentLike.removeClass('fas').addClass('far');
    });
    
    $('.comment-like').click(function(){
        var commentLike = $(this);
        commentLike.tooltip('hide');
        if(commentLike.attr('data-comment-status') == 'on')
            commentLike.attr('data-comment-status', 'off').removeClass('fas').addClass('far');
        else
            commentLike.attr('data-comment-status', 'on').removeClass('far').addClass('fas');
    });
    
    // toggle comment branch
    $('.toggle-comments-branch').click(function(){
        var toggleBranch = $(this);
        var commentId = $(this).attr('data-comment');
        toggleBranch.tooltip('hide');
        if(toggleBranch.hasClass('fa-expand')){
            toggleBranch.removeClass('fa-expand').addClass('fa-compress').attr('data-original-title', 'Collapse the branch');
            $('#comment-' + commentId).addClass('expand');
        } else {
            toggleBranch.removeClass('fa-compress').addClass('fa-expand').attr('data-original-title', 'Expand the branch');
            $('#comment-' + commentId).removeClass('expand');
        }
    });
    $('.expand-comments-branch').click(function(){
        $('#comment-' + $(this).attr('data-comment') + ' .toggle-comments-branch').click();
    });
    
    // create event to clear button in textarea
    $('[data-action="clearable"]').each(function() {
        var $textarea = $(this).find('textarea'),
            $clear = $(this).find('[data-action="clear"]');
        $textarea.on('input focusin', function(){
            $clear.toggle(!!this.value);
        });
        $clear.on('touchstart click', function(e) {
            e.preventDefault();
            $textarea.val('').trigger('textarea').focus();
        });
    });    
    
});
