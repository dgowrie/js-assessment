if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    indexOf : function(arr, item) {
        return arr.indexOf(item);
    },

    sum : function(arr) {
        var sum = 0,
            len = arr.length,
            i;


        for (i = 0; i < len; i++) {
            sum += arr[i];
        }

        return sum;
    },

    remove : function(arr, item) {

        var retarray = [],
            len = arr.length,
            i;

        for ( i = 0; i < len; i++ ) {
            if ( arr[i] !== item ) {
                retarray.push(arr[i]);
            }
        }

        return retarray;
    },

    removeWithoutCopy : function(arr, item) {

    },

    append : function(arr, item) {

        var result = arr;
        result.push(item);
        return result;


    },

    truncate : function(arr) {

    },

    prepend : function(arr, item) {

    },

    curtail : function(arr) {

    },

    concat : function(arr1, arr2) {

    },

    insert : function(arr, item, index) {

    },

    count : function(arr, item) {

    },

    duplicates : function(arr) {

    },

    square : function(arr) {

    },

    findAllOccurrences : function(arr, target) {

    }
  };
});
