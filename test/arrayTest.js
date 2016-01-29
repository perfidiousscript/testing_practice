/**
 * Created by samuelmoss on 1/29/16.
 */
var chai = require('chai');
var assert = chai.assert;

describe('Array',function(){
    it('should start empty', function() {
        var arr = [];

        assert.equal(arr.length,0,'Array length was not 0');
    });
});