(function() {
    'use strict';

    angular
        .module('myapp')
        .controller('parent', parent);
		
	  parent.$inject = ['$scope','getInitData','$q'];

    function parent($scope, getInitData, $q) { 
		var vm = this;
		vm.active = active;
		active();
		
		function active() {
			getInitData.getList().then(
				function(result) {
					console.log('==>',result);
					vm.test12 = result.data.menu.value;
				},
				function (error) {
				
				
				}		
			)
		};
	};
	
})();;		
(function() {
    'use strict';

    angular
        .module('myapp')
        .controller('route1List', route1List);
		
	  route1List.$inject = ['$scope'];

    function route1List($scope) { 
		var vm = this;
		vm.items = ["A", "List", "Of", "Items"];
	}
})();;(function() {
    'use strict';

    angular
        .module('myapp')
        .controller('route2List', route2List);
		
	  route2List.$inject = ['$scope'];

    function route2List($scope) { 
		var vm = this;
		vm.things = ["A", "Set", "Of", "Things"];
	}
})();;(function () {
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
