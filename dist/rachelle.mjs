/*
* rachelle.js
* @version 0.7.2
* @copyright (c) 2016 - KFlash
* @license MIT <undefined/blob/master/LICENSE>
*/
var index = {
    // 'a' should not be covered
    a: function () {
        var uncovered = true;
        return uncovered;
    },
    b: function () { return true; }
};

export default index;