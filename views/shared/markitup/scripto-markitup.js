jQuery( window ).load(function() {
    jQuery('#scripto-transcription-page-wikitext').markItUp(mySettings);
    jQuery('#scripto-transcription textarea').keypress(function(event) {
        if(event.keyCode == 13) {
            insertAtCaret(this, "\n");
        }
    });
});

function insertAtCaret(element, text) {
    var caretPos = jQuery(element).prop("selectionStart");
    var currentValue = jQuery(element).val();
    jQuery(element).val(currentValue.substring(0, caretPos) + text + currentValue.substring(caretPos));
}
