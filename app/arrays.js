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

        var i, 
            len = arr.length;

        for ( i = 0; i < len; i++ ) {
            if ( arr[i] === item ) {
                arr.splice(i, 1);
                i = i - 1;
                len = len - 1;
            }
        }

        return arr;

    },

    append : function(arr, item) {

        var result = arr;
        result.push(item);
        return result;


    },

    truncate : function(arr) {

        var len = arr.length;

        arr.splice(-1, 1);

        return arr;

        // alternate:
        /*
         arr.pop();
         return arr;
        */

    },

    prepend : function(arr, item) {

        arr.unshift(item);
        return arr;
    },

    curtail : function(arr) {

        return arr.slice(1);

        // alternate:
        /*
         arr.shift();
         return arr;
        */

    },

    concat : function(arr1, arr2) {
        var newarr = arr1.concat(arr2);
        return newarr;
    },

    insert : function(arr, item, index) {

        arr.splice(index, 0, item);
        return arr;

    },

    count : function(arr, item) {

        var count = 0,
            len = arr.length,
            i;

        for ( i = 0; i < len; i++ ) {
            if ( arr[i] === item ) {
                count++
            }
        }

        return count;
    },

    duplicates : function(arr) {

        var len = arr.length,
            dupes = [],
            map = {},
            i,
            key;

        for ( i = 0; i < len; i++ ) {
            map[arr[i]] = map[arr[i]] ? map[arr[i]] + 1 : 1;
        }

        //return map;

        for (key in map) {
            if ( map.hasOwnProperty(key) && map[key] !== 1 ) {
                dupes.push(key);
            }
        }

        return dupes;

    },

    square : function(arr) {

        var newarr = [],
            len = arr.length,
            i;

        for ( i = 0; i < len; i++ ) {
            newarr.push(arr[i] * arr[i]);
        }

        return newarr;

    },

    findAllOccurrences : function(arr, target) {

        var newarr = [],
            len = arr.length,
            i;

        for ( i = 0; i < len; i++ ) {

            if ( arr[i] === target ) {
                newarr.push(i);
            }
        }

        return newarr;

    }
  };
});
