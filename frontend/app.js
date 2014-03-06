$('.ui-start-button').on('click', function() {
    var request = new Request(100);
    request.isUserOnline();
});

$('.ui-reset-button').on('click', function() {
    $('.ui-progress-bar').css('width', "0%");
    $('.ui-history-field').html('');
});



