'use strict';
 angular.module("try").
config(
	function(
		$locationProvider,
		$routeProvider
		){
		$locationProvider.html5Mode({
			enabled:true
		})
    $routeProvider.
    when("/",{
    	template : "<blog-list></blog-list>"
    }).
    when("/about", {
        templateUrl : "/templates/about.html"
    }).
    when("/blog/:id", {
        template: "<blog-details></blog-details>"
    }).
    when("/blog/:id/:abc", {
        template: "<blog-list></blog-list>"
    }).
    // when("/blog/:id/:abc ", {
    //     template: "<blog-list></blog-list>"
    // }).
    otherwise({
        template : "not found"
    })
});