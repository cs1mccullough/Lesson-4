var angularTodo = angular.module('angularTodo', []);

angularTodo.controller('angularTodoC', ['$scope', function ($scope) {

    //$scope.done = false;
    // define list of items
    $scope.items = ["eat lunch", "learn about cheese", "complete ICP 4"];

    // Write code to push new item

    $scope.submitNewItem = function () {
        $scope.items.push($scope.submitNew);

    };

    // Write code to complete item

    $scope.completeItem = function (index) {
       // $scope.done = !$scope.done;
        $scope.items[index].toggleClass(index, 'li', donezo);

        };
        //[index].toggle('doner');
    //};


    // Write code to delete item

    $scope.deleteItem = function (index) {
        $scope.items.splice(index, 1);
    };
}]);


$scope.myFunc = function() {

}