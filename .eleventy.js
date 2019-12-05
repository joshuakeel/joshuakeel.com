const { DateTime } = require('luxon');

module.exports = function(eleventyConfig) {

    eleventyConfig.addFilter('readableDate', date => {
        return DateTime.fromJSDate(new Date(date), { zone: 'utc' }).toLocaleString(DateTime.DATE_FULL);
    });
};