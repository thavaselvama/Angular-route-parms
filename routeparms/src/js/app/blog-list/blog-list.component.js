'use strict';
angular.module("blogList").
component("blogList",{
	templateUrl: '/templates/blog-list.template.html',
	controller : function($routeParams, $scope){

		console.log($routeParams)
		
       var blogItems = [
         {title:'someTitle1', id:1,description:'this is a book1',date:'17-04-2017'},
         {title:'someTitle2', id:2,description:'this is a book2',date:'16-04-2017'},
         {title:'someTitle3', id:3,description:'this is a book3',date:'15-04-2017'},
         {title:'someTitle4', id:4,description:'this is a book4',date:'14-04-2017'}
       ]
       $scope.items = blogItems;

        
	    
	  }
	});

