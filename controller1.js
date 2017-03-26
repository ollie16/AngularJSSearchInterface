App.controller('Controller', ['$scope', '$location','mscService','$http', function (scope,location, mscService, http) {

       var azurekey = 'l7T9uNVXVXKyuWTtavq23n46O9lx35UWPm3WwPFWCAg';
          
          scope.query = null;
          scope.click = function(hash) {

          
          var search = scope.query;
          var array = new Array(search.split(" +"));
          
          var myurl = 'https://api.datamarket.azure.com/Bing/Search/v1/Web?$format=json&Query='+'%27'+array+'%27'
          alert(myurl);
          scope.model='';

           http({
                method: 'get',
                url: myurl,
                headers: {
                    'Authorization': 'Basic Omw3VDl1TlZYVlhLeXVXVHRhdnEyM240Nk85bHgzNVVXUG0zV3dQRldDQWc='
                }
            }).success(function(data){

              scope.model = data.d.results;
               mscService.set(scope.model);
               location.path(hash);

                
 })
        .error(function (error, status){
        scope.data.error = { message: error, status: status};
        alert(scope.data.error.status);   
            });
       
 
  }

 scope.reset= function(){
scope.model.length=0;
scope.query=null;
    }
 }


]);
























 
  