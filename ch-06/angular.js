var app = angular.module("app", []);

app.component("rootComponent", {
  template: '<p style="color:{{textColor}}">{{message}}</p><button ng-click="count=count+1">Increment</button><p>Count: {{count }}</p>',
  controller: function($scope) {
    $scope.message = "I am an Angular app! There are many like it, but this one is mine!!";
    $scope.count = 0;
    $scope.textColor = "red";
  }
});
