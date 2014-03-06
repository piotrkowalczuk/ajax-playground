var HTMLMapper = function() {
    this.mapObject = function(obj) {
        var result = '';

        $.each(obj, function(userId, isLoggedIn){
            result += 'user#'+userId+' is logged in: '+Boolean(isLoggedIn)+'<br/>';
        });

        return result;
    }
}