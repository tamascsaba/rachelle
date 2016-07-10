/*
* rachelle.js
* @version 0.10.0
* @copyright (c) 2016 - KFlash
* @license MIT <https://github.com/kflash/rachelle/blob/master/LICENSE>
*/
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (factory());
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
    (function (factory) {
        if (typeof module === 'object' && typeof module.exports === 'object') {
            var v = factory(require, exports); if (v !== undefined) module.exports = v;
        }
        else if (typeof define === 'function' && define.amd) {
            define(["require", "exports"], factory);
        }
    })(function (require, exports) {
        "use strict";
        if ("development" !== 'production') {
            console.log('production build');
        }
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.default = {
            // 'a' should not be covered
            a: function () {
                var uncovered = true;
                return uncovered;
            },
            b: function () { return true; }
        };
    });

}));