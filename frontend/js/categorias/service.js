var app = angular.module("ControlInventario");

/**
 * @brief Servicio para obtener las categorias
 * @param {$resource} Recibe la instancia de ngResource
 * @return {list} Retorna todas las caegorias obtenidas del servicio
 * @author Rodrigo Boet
 * @date 26/11/2016
 */
app.service('CategoriasService',function($resource){
	Categorias = $resource("http://localhost/control_inventario/backend/rest/v1/categorias");
	return Categorias.query();
});