/**
 * Created by ericlam on 19/1/2017.
 */

var filter = require('./text_filtering');
filter.extendString(String);

var test_str = 'hi[img]path[/img]'
console.log(test_str.filterBBcode());