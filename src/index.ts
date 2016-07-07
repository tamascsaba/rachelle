/*
 * This is the main entry point for your package.
 *
 * You can import other modules here, including external packages. When
 * bundling using rollup you can mark those modules as external and have them
 * excluded or, if they have a jsnext:main entry in their package.json (like
 * this package does), let rollup bundle them into your dist file.
 */

// Environment variable example. This will be removed in the production build
if (process.env.NODE_ENV !== 'production') {
    console.log('production build');
}

// export default
export default {
    // 'a' should not be covered
    a: (): boolean => {
        const uncovered: boolean = true;
        return uncovered;
    },
    b: (): boolean => true
};
