/**
 * Created by jlian on 2016-01-17.
 */
app.controller ('wishlistController', ['$scope', '$resource', function($scope, $resource){

    var Item = $resource('/api/items');
    Item.query(function(res){
        console.log(res);
        $scope.list = res;
    });

    $scope.list = [];

    //in database they are called item, each item has a name
    $scope.addItem = function(){
        var item = new Item();
        item.name = $scope.name;
        item.$save(function(res){
            console.log(res);
            $scope.list.push({name: res.name});
            $scope.name = '';
        });
    }


}])
