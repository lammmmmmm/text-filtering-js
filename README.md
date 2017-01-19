# text-filtering-js
Purify text for NLP task or Data Analytic  
When we crawl data from forum blog etc  
we may get text with bunch of formatting that can infect our analyze
this library aims to remove all formatting and unused string
In order to purify the text

在做NLP和數據分析時
經常需要到網上的討論區,博客,論壇,FB 等不同網站尋找語料  
當中爬取的文本，有不少都會包含一些無意義的文字和無用格式  
這個library的想法就是希望過濾這些內容    

#Features
 - extend String
 - Filter BBcode [img][/img]
 - Filter LineBreak
 - FilterSmileysCode :?test:
 - Filter Guff *** 作者被禁止或刪除 內容自動屏蔽 ***
 - Filter Html
 - Filter All (Apply all filter)
 
#Installation
` npm install text-filtering-js --save`
#Example Usage
```javascript
var filter = require('text-filtering-js');
filter.extendString(String);

var test_str = 'hi[img]path[/img]'
console.log(test_str.filterBBcode());
```

#list of filter
```javascript
var test_str = 'content'
test_str.filterBBcode();
test_str.filterGuff();
test_str.filterLineBreak();
test_str.filterHtml();
text_str.filterAll();
```

#TODO
- append guff list
- more filter