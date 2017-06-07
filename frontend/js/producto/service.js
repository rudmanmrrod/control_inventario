var app = angular.module("ControlInventario");

/**
 * @brief Servicio para crear/actualizar un producto
 * @param $resource Recibe la instancia de ngResource
 * @return <b>object</b> Retorna un objeto con métodos
 * @author Rodrigo Boet
 * @date 26/11/2016
 */
app.service('CrearProductoService',function($resource){
	var CrearProductoService = {};
	Productos = $resource("http://localhost/control_inventario/backend/rest/v1/productos/:id",{id:"@id"});

	/**
	 * @brief Método para crear un producto
	 * @param data Recibe los datos para crear el producto
	 * @return <b>object</b> Retorna la creación del producto vía post
	 * @author Rodrigo Boet
	 * @date 26/11/2016
	 */
	CrearProductoService.add = function(data)
	{
		return Productos.save({
			'nombre':data.nombre,
			'codigo':data.codigo,
			'descripcion':data.descripcion,
			'fk_categoria':data.categoria,
		});
	};

	/**
	 * @brief Método para actualizar un producto
	 * @param data Recibe los datos para actualizar el producto
	 * @return <b>object</b> Retorna la actualización del producto vía put
	 * @author Rodrigo Boet
	 * @date 27/11/2016
	 */
	CrearProductoService.update = function(data)
	{
		Productos = $resource("http://localhost/control_inventario/backend/rest/v1/productos/:id",null,{'update': { method:'PUT' }});
		return Productos.update({id:data.pk_producto},{
			'nombre':data.nombre,
			'codigo':data.codigo,
			'descripcion':data.descripcion,
			'fk_categoria':data.categoria,
		});
	};

	return CrearProductoService;
});

/**
 * @brief Servicio para ver los productos
 * @param $resource Recibe la instancia de ngResource
 * @return <b>object</b> Retorna todos los productos
 * @author Rodrigo Boet
 * @date 26/11/2016
 */
app.service('VerProductoService',function($resource){
	Productos = $resource("http://localhost/control_inventario/backend/rest/v1/productos");

	VerProductoService = {};
	
	/**
	 * @brief Método para obtener todos los productos
	 * @return <b>object</b> Retorna todos los productos
	 * @author Rodrigo Boet
	 * @date 26/11/2016
	 */
	VerProductoService.get = function()
	{
		return Productos.query();
	}

	return VerProductoService;
});

/**
 * @brief Servicio para ver un producto en especifico
 * @param $resource Recibe la instancia de ngResource
 * @return <b>object</b> Retorna un producto en especifico
 * @author Rodrigo Boet
 * @date 26/11/2016
 */
app.service('ProductoService',function($resource){

	ProductoService = {};

	/**
	 * @brief Método para actualizar un producto
	 * @param id Recibe el id del producto
	 * @return <b>object</b> Retorna el producto correspondiente al id
	 * @author Rodrigo Boet
	 * @date 27/11/2016
	 */
	ProductoService.get = function(id)
	{
		Productos = $resource("http://localhost/control_inventario/backend/rest/v1/productos/:id",{id:"@id"});
		return Productos.get({id:id});
	}

	return ProductoService;
});