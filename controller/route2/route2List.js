(function() {
    'use strict';

    angular
        .module('myapp')
        .controller('route2List', route2List);
		
	  route2List.$inject = ['$scope'];

    function route2List($scope) { 
		var vm = this;
		vm.things = ["A", "Set", "Of", "Things"];
	}
})();