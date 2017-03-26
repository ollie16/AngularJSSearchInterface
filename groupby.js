App.controller('SecondController', ['$scope', 'mscService', function (scope, mscService) {
 scope.model = mscService.get();

   scope.removeName = function(div1){
   var i= scope.model.indexOf(div1);
   scope.model.splice(i,1);
   };
 
var indexedurls = [];
    
    scope.urlsToFilter = function() {
        indexedurls = [];
        return scope.model;
    }
    
    scope.filterurls = function(div1) {

var str= div1.Url;




if (str.indexOf("gov.uk" || "gov.org") != -1)
{
        var urlIsNew = indexedurls.indexOf(str) == -1;
        if (urlIsNew) {
            indexedurls.push(str);
        }
        return urlIsNew;
    }

if (str.indexOf("nhs") != -1)
{
        var urlIsNew = indexedurls.indexOf(str) == -1;
        if (urlIsNew) {
            indexedurls.push(str);
        }
        return urlIsNew;
    }
 if (str.indexOf("gov.org") != -1)
{
        var urlIsNew = indexedurls.indexOf(str) == -1;
        if (urlIsNew) {
            indexedurls.push(str);
        }
        return urlIsNew;
    }   
if (str.indexOf("ac.uk") != -1)
{
        var urlIsNew = indexedurls.indexOf(str) == -1;
        if (urlIsNew) {
            indexedurls.push(str);
        }
        return urlIsNew;
    }

    else{
      //not found
    }
}
}
]);