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
	
})();