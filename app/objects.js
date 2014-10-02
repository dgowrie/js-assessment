if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    alterContext : function(fn, obj) {

		// define a function for fn so that the following will pass
		// expect(answers.alterContext(a.sayIt, b)).to.eql('Yo, Rebecca!');

		return fn.call(obj);

    },

    alterObjects : function(constructor, greeting) {
    	
    	constructor.prototype.greeting = greeting;

    },

    iterate : function(obj) {

    	var results = [],
    		key;

    	for (key in obj) {
    		if (obj.hasOwnProperty(key)) {
    			results.push(key +': '+obj[key]);
    		}
    	}

    	return results;
    }
  };
});
