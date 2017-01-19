/**
 * Created by Ericlam on 16/1/2017.
 */

var extendString = function(StringConstructor)
{
    StringConstructor.prototype.filterBBcode = function(){
        //[img]
        return this.replace(/\[.*\]/g, '');
    }

    StringConstructor.prototype.filterLineBreak = function(){
        return this.replace(/(\r\n|\n|\r)/gm," ");
    }

    StringConstructor.prototype.filterSmileysCode = function() {
        return this.replace(/:\$?.*:\$?/g, '').replace(/：\w+：?/g, '').replace(/:\w+/g, '').replace(/&#.*;/g, '');
    }

    StringConstructor.prototype.filterGuff = function() {
        return this.replace('*** 作者被禁止或刪除 內容自動屏蔽 ***', '')
    }

    StringConstructor.prototype.filterHtml = function() {
        return this.replace(/(<[^>]*>)/g,' ');
    }

    StringConstructor.prototype.filterAll = function () {
        return this.filterSmileysCode().filterBBcode().filterGuff().filterHtml().filterLineBreak()
    }
}


exports.extendString = extendString;