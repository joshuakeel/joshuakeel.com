const { DateTime } = require('luxon');
const htmlmin = require('html-minifier');

module.exports = function(eleventyConfig) {

    eleventyConfig.addFilter('readableDate', date => {
        return DateTime.fromJSDate(new Date(date), { zone: 'utc' }).toLocaleString(DateTime.DATE_FULL);
    });

    eleventyConfig.addCollection('mostRecentPosts', collection => {
        return collection.getFilteredByTag('post')
            .reverse()
            .slice(0, 3);
    });

    eleventyConfig.addTransform('htmlmin', function(content, outputPath) {
        if(outputPath.endsWith('.html')) {
            let minified = htmlmin.minify(content, {
                useShortDoctype: true,
                removeComments: true,
                collapseWhitespace: true
            });

            return minified;
        }

        return content;
    });

    eleventyConfig.addPassthroughCopy("assets");
    eleventyConfig.addPassthroughCopy("wp-content");
};