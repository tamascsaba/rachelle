/*
* rachelle.js
* @version 0.10.0
* @copyright (c) 2016 - KFlash
* @license MIT <https://github.com/kflash/rachelle/blob/master/LICENSE>
*/
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (global.rachelle = factory());
}(this, function () { 'use strict';

    /*
     * This is the main entry point for your package.
     *
     * You can import other modules here, including external packages. When
     * bundling using rollup you can mark those modules as external and have them
     * excluded or, if they have a jsnext:main entry in their package.json, let
     * rollup bundle them into your dist file.
     *
     * Environment variabels are also supported as seen in the example below.
     * The example code will be removed in the production build.
     */
    if ("development" !== 'production') {
        console.log('production build');
    }
    var rachelle = {
        // 'a' should not be covered
        a: function () {
            var uncovered = true;
            return uncovered;
        },
        b: function () { return true; }
    };

    return rachelle;

}));