		
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
})();