var Request = function(nbOfUsers) {

    this.userId = 0;
    this.numberOfUsers = nbOfUsers;

    this.isUserOnline = function(){
        $('.ui-progress-bar').css('width', (this.userId/this.numberOfUsers*100)+"%");

        if(this.userId === this.numberOfUsers) {
            this.fetchHistory();
        } else {
            this.fetchIsUserOnline()
        }
    };

    this.blockedHandler = function(){
        console.log('blocked');
    };

    this.resultHandler = function(response) {
        var htmlMapper = new HTMLMapper();
        $('.ui-history-field').html(htmlMapper.mapObject(response));
    };


    this.fetchIsUserOnline = function() {
        $.ajax({
            type: 'GET',
            url: '/is-user-online/'+(++this.userId),
            statusCode: {
                200: $.proxy(this.isUserOnline, this),
                403: $.proxy(this.blockedHandler, this)
            }
        });
    };

    this.fetchHistory = function() {
        $.ajax({
            type: 'GET',
            url: '/history',
            statusCode: {
                200:  $.proxy(this.resultHandler, this),
                403: $.proxy(this.blockedHandler, this)
            }
        });
    };

}