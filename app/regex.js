if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    containsNumber : function(str) {
        var regex1 = /\d/;
        var regex2 = /[0-9]/;

        // return regex1.test(str);
        return regex2.test(str);

    },

    containsRepeatingLetter : function(str) {

        var regex = /([A-Za-z])\1/;

        return regex.test(str);
    },

    endsWithVowel : function(str) {

        var regex = /[aeiou]$/i;
        return regex.test(str);
    },

    captureThreeNumbers : function(str) {

        var regex = /\d{3}/;
        var matches = regex.exec(str);

        return matches ? matches[0] : false;

    },

    matchesPattern : function(str) {

        var regex = /^\d{3}\-\d{3}\-\d{4}$/;
        return regex.test(str);

    },
    isUSD : function(str) {

        var regex = /^\$\d{1,3}(?:,\d{3})*(?:\.\d{2})?$/; // hot damn! nailed it

        return regex.test(str);
    }
  };
});
