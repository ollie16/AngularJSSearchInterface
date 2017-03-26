
App.controller('SecondController', ['$scope', 'mscService', function (scope, mscService) {
  scope.model = mscService.get();

   scope.removeName = function(div1){
   var i= scope.model.indexOf(div1);
   scope.model.splice(i,1);
   };
 
}

]);