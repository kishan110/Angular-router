(function () {
  'use strict';

  angular.module('myapp')
    .factory('getInitData', ['$http', '$q',
      function ($http, $q) {
        var listData = {};
		var deferred = $q.defer(); 
        listData.getList = function () {
            return $http.get('data/test.txt').then(function (res) {
				deferred.resolve(res);
                // promise is returned
				return deferred.promise;			  
            }, function(res) {
				deferred.reject(res);
                // promise is returned
                return deferred.promise;
			});
          }
        return listData;
      }
    ]);

})();
