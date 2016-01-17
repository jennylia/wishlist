/**
 * Created by jlian on 2016-01-17.
 */
app.controller ('wishlistController', ['$scope', '$resource', function($scope, $resource){

    $scope.list = [{name: 'book'}, {name: 'starbucks'}];

    $scope.addItem = function(){
        console.dir($scope);
        var item = {
            name: $scope.name
        }
        $scope.list.push(item);
        $scope.name = '';
    }


}])
