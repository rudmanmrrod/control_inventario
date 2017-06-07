var app = angular.module("ControlInventario");

/**
 * @brief Controlador para crear un producto
 * @param $scope Recibe el objeto para crear modelos en Angular
 * @param $location Recibe el objeto para redirigir en angular
 * @param CategoriasService Recibe el servicio para obtener las categorias
 * @param CrearProductoService Recibe el servicio para crear un producto
 * @author Rodrigo Boet
 * @date 26/11/2016
 */
app.controller("ProductoCreate",function($scope,$location,CategoriasService,CrearProductoService){
	$scope.title = "Crear Producto";
	$scope.button = "Crear Registro";
	$scope.producto = {};
	$scope.categorias = CategoriasService;

	/**
	 * @brief Método para crear el producto
	 * @author Rodrigo Boet
	 * @date 27/11/2016
	 */
	$scope.CrearRegistro = function(){
		CrearProductoService.add($scope.producto).$promise.then(function(data){
			$location.path('/producto/'+data.pk_producto);
		});	
	};
});

/**
 * @brief Controlador para ver todos los productos
 * @param $scope Recibe el objeto para crear modelos en Angular
 * @param VerProductoService Recibe el servicio para ver todos los productos
 * @author Rodrigo Boet
 * @date 26/11/2016
 */
app.controller("ProductoView",function($scope,VerProductoService){
	$scope.title = "Ver Productos";
	$scope.productos = VerProductoService.get();
	setInterval(function(){
		$scope.productos = VerProductoService.get();
	},15000);
});

/**
 * @brief Controlador para actualizar un producto
 * @param $scope Recibe el objeto para crear modelos en Angular
 * @param $routeParams Recibe un objeto con los valores pasados en la url
 * @param CrearProductoService Recibe el servicio para crear un producto
 * @param ProductoService Recibe el servicio para traerse un objeto
 * @param CategoriasService Recibe el servicio para obtener las categorias
 * @author Rodrigo Boet
 * @date 27/11/2016
 */
app.controller("ProductoUpdate",function($scope,$routeParams,CrearProductoService,ProductoService,CategoriasService){
	$scope.title = "Actualizar Producto";
	$scope.button = "Actualizar Registro";
	$scope.producto = ProductoService.get($routeParams.id);
	$scope.categorias = CategoriasService;

	/**
	 * @brief Método para actualizar el producto
	 * @author Rodrigo Boet
	 * @date 26/11/2016
	 */
	$scope.CrearRegistro = function(){
		$scope.data = CrearProductoService.update($scope.producto);		
	};
});

/**
 * @brief Controlador para ver mas informacion de un producto
 * @param $scope Recibe el objeto para crear modelos en Angular
 * @param $routeParams Recibe un objeto con los valores pasados en la url
 * @param ProductoService Recibe el servicio para traerse un objeto
 * @author Rodrigo Boet
 * @date 26/11/2016
 */
app.controller("ProductoMore",function($scope,$routeParams,ProductoService){
	$scope.title = "Producto";
	$scope.producto = ProductoService.get($routeParams.id);
});