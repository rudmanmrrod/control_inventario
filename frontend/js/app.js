/**
 * @brief Instancia del modulo ControlInventario
 * @param ngRoute Recibe el modulo para usar el routing
 * @param ngResource Recibe el modulo para usar el resource
 * @author Rodrigo Boet
 * @date 26/11/2016
 */
var app = angular.module("ControlInventario",['ngRoute','ngResource']);

/**
 * @brief Configuración de las rutas del proyecto
 * @param $routeProvider Recibe la instancia de ngRoute para establecer las rutas
 * @author Rodrigo Boet
 * @date 26/11/2016
 */
app.config(function($routeProvider){
	$routeProvider
	.when("/",{
		templateUrl:"js/site/templates/home.html"
	})
	.when("/producto",{
		templateUrl:"js/producto/templates/index.html"
	})
	.when("/producto/create",{
		controller:"ProductoCreate",
		templateUrl:"js/producto/templates/producto_form.html"
	})
	.when("/producto/view",{
		controller:"ProductoView",
		templateUrl:"js/producto/templates/producto_view.html"
	})
	.when("/producto/:id",{
		controller:"ProductoMore",
		templateUrl:"js/producto/templates/producto_more.html"
	})
	.when("/producto/edit/:id",{
		controller:"ProductoUpdate",
		templateUrl:"js/producto/templates/producto_form.html"
	})
	.otherwise("/");
});