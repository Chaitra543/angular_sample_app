/*angular.module("myApp", [])
      .controller("myFirstController",['$scope', function ($scope){
          console.log("This is form controller");
          $scope.hello="hello world";
      }]);*/

angular.module("myApp").controller("myFirstController", function ($scope)
{
    let Student= {
        FirstName: "Chaitra",
        LastName : "Vemula",
        StudentId : "S534735@nwmisouri.edu"
    }
    $scope.Student=Student;
    
});