

$(document).on('touchend click', function(){
    var str=window.getSelection().anchorNode.data;
    var str=str.substring(window.getSelection().anchorOffset,window.getSelection().focusOffset);
    if(str) {
        $("#txtselact").removeClass("d-none");
        $(window.getSelection().focusNode.parentNode).trigger({type:'onSelectStart',text:str});
    }
    else {
        $("#txtselact").addClass("d-none");
    }
});
function getSelectionCoords() {
    var sel = document.selection, range;
    var x = 0, y = 0;
    if (sel) {
        if (sel.type != "Control") {
            range = sel.createRange();
            range.collapse(true);
            x = range.boundingLeft;
            y = range.boundingTop;
        }
    } else if (window.getSelection) {
        sel = window.getSelection();
        if (sel.rangeCount) {
            range = sel.getRangeAt(0).cloneRange();
            if (range.getClientRects) {
                range.collapse(true);
                var rect = range.getClientRects()[0];
                x = rect.left;
                y = rect.top;
            }
        }
    }
    return { x: x, y: y };
}
$(document).ready( function() {
    $('main p').on('onSelectStart',function(e){
        var selection = window.getSelection().getRangeAt(0);
        $('p:last').text(e.text);
        var coords = getSelectionCoords();
//        $("#txtselact").css({"position": "absolute", "left": 25, "top": parseInt(coords.y - 20 + window.pageYOffset)});
//        $("#txtselact").html("<p> +++++ " + parseInt(coords.x) + ", " + parseInt(coords.y - 20) + "</p>");
        $("#txtselact").css({"left": parseInt(coords.x), "top": parseInt(coords.y + window.pageYOffset)})
    });
})
