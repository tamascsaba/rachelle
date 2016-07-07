/*
* rachelle.js
* @version 0.8.0
* @copyright (c) 2016 - KFlash
* @license MIT <undefined/blob/master/LICENSE>
*/
/*
 * This is the main entry point for your package.
 *
 * You can import other modules here, including external packages. When
 * bundling using rollup you can mark those modules as external and have them
 * excluded or, if they have a jsnext:main entry in their package.json (like
 * this package does), let rollup bundle them into your dist file.
 */
// Environment variable example. This will be removed in the productionbuild
if ("development" !== 'production') {
    console.log('production build');
}
var index = {
    // 'a' should not be covered
    a: function () {
        var uncovered = true;
        return uncovered;
    },
    b: function () { return true; }
};

export default index;