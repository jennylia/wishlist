/**
 * Created by jlian on 2016-01-17.
 */
app.controller ('wishlistController', ['$scope', '$resource', function($scope, $resource){

    $scope.itemsCount = 5;

    $scope.list = [{name: 'book'}, {name: 'starbucks'}];
}])
