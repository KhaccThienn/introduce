var app = angular.module("myApp", ["ngRoute"]);

app.controller("myCtrl", function ($scope) { 
  $scope.toTop = () => {
    window.scroll(0, 0)
  }
});

app.controller(
  "contactsController",
  function ($scope, $routeParams, $location, $http) {
    $scope.emails = {
      EMAIL_FORMAT:
        /^\w+([\.-]?\w+)*@(list.)?gmail.com+((\s*)+,(\s*)+\w+([\.-]?\w+)*@(list.)?gmail.com)*$/,
      EMAIL_FORMAT_HELP: "Email... Ex: example@example.com",
    };
    $scope.submit = function (name, email, subject, mess) {
      $scope.contacts = JSON.parse(localStorage.getItem("contact") || "[]");
      $scope.data = {
        name,
        email,
        subject,
        mess,
      };
      if (!name || !email || !subject || !mess) {
        alert("Name, Email and Subject must be provided");
      } else {
        $scope.contacts.push($scope.data);
        localStorage.setItem("contact", JSON.stringify($scope.contacts));
        alert("Thanks for contacting");
        console.log($scope.contacts);
        $location.path("/");
      }
    };
  }
);


app.config([
  "$routeProvider",
  function ($routeProvider) {
    $routeProvider.when("/", {
      templateUrl: "pages/home.html",
    });
  },
]);
