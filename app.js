var myapp = angular.module('myapp', ["ui.router"])
    myapp.config(function($stateProvider, $urlRouterProvider){
      
      // For any unmatched url, send to /route1
      $urlRouterProvider.otherwise("/route1")
      
      $stateProvider
		.state ('parent', {
			abstract: true,
			url: '',
			template: '<ui-view/>',
			controller: "parent as parentVm",

		})
        .state('parent.route1', {
            url: "/route1",
            templateUrl: "view/route1/route1.html"
        })
		.state('parent.route1.list', {
			  url: "/list",
			  templateUrl: "view/route1/route1.list.html",
			  controller: "route1List as route1Vm",			  
		})
          
        .state('parent.route2', {
            url: "/route2",
            templateUrl: "view/route2/route2.html"
        })
          .state('parent.route2.list', {
              url: "/list",
              templateUrl: "view/route2/route2.list.html",
              controller: "route2List as route2Vm"
          })
    });
