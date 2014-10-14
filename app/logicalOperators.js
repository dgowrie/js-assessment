if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    or : function(a, b) {

    	if ( a || b ) {
    		return true;
    	}
    	else {
    		return false;
    	}
    },

    and : function(a, b) {

    	if ( a && b ) {
    		return true;
    	} 
    	else {
    		return false;
    	}
    }

    // alternative - streamlined. my solution (above) has redudancies.
    /*
	or : function(a, b) {
		return a || b;
	},

	and : function(a, b) {
		return a && b;
	}
	*/

  };
});
