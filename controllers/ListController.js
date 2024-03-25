window.ListController = function ($scope,$http) {
    var apiUrl = "http://localhost:3000/products";
    //khởi tạo hàm getProducts
    $scope.getProducts = function () {
        $http.get(apiUrl).then(function ($response) {
            //gán dữ liệu mà $response trả về vào biến products
            $scope.products = $response.data;
        })
    }

    $scope.getProducts(); //gọi hàm (thực thi)
}