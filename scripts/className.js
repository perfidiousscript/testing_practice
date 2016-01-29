/**
 * Created by samuelmoss on 1/29/16.
 */
var classNameFunction = function addClass(el, newClass){
    if(el.className.indexOf(newClass) !== -1){
        return;
    }

    if(el.className !== ''){
        newClass = ' ' + newClass;
    }

    el.className += newClass;
};

module.exports = classNameFunction;

