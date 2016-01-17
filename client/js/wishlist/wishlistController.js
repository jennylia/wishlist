/**
 * Created by jlian on 2016-01-17.
 */
app.controller ('wishlistController', ['$scope', '$resource', function($scope, $resource){

    var Item = $resource('/api/items');
    $scope.list = [{name: 'book'}, {name: 'starbucks'}];
    //
    //$scope.addItem = function(){
    //    console.dir($scope);
    //    var item = {
    //        name: $scope.name
    //    }
    //    $scope.list.push(item);
    //    $scope.name = '';
    //}

    //in database they are called item, each item has a name
    $scope.addItem = function(){
        var item = new Item();
        item.name = $scope.name;
        item.$save(function(res){
            console.log(res.name);
            $scope.list.push({name: res.name});
        });
    }


}])
