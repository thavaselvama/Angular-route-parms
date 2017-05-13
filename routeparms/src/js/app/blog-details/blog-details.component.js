'use strict';
angular.module("blogDetails").
component("blogDetails",{
	templateUrl: '/templates/blog-details.template.html',
	controller : function($http,$location,$routeParams, $scope){

      


      $http.get("/json/post.json").then(sucessCallback,errorCallback);

       function sucessCallback(response,status,config,statusText){
        $scope.notFound = true
        var blogItems = response.data
        $scope.posts = blogItems  
                        angular.forEach(blogItems,function(post){
                        if(post.id == $routeParams.id){
                        $scope.notFound = false
                        $scope.post = post
                        }
               
            })  

       }
       function errorCallback(response,status,config,statusText){
        $scope.notFound = true
        console.log(response)

       }


       if($scope.notFound){
        console.log("not Found")
        $location.path("/")
       }






  //   var blogItems = [
  //        {title:'someTitle1', id:1,description:'this is a book1',date:'17-04-2017'},
  //        {title:'someTitle2', id:2,description:'this is a book2',date:'16-04-2017'},
  //        {title:'someTitle3', id:3,description:'this is a book3',date:'15-04-2017'},
  //        {title:'someTitle4', id:4,description:'this is a book4',date:'14-04-2017'}
  //      ]
		// console.log($routeParams.id)
  //   $scope.title = "blog" + $routeParams.id;
        
  //      angular.forEach(blogItems,function(post){
  //       if(post.id == $routeParams.id){
  //           $scope.notFound = false
  //           $scope.post = post
  //       }
       
  //      })

	  }
	});

