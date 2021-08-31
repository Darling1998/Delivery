export interface Producto{
    idProducto:      number;
    nombre:      string;
    descripcion: string;
    precio_venta:      number;
    imagen:      string;
}

export interface IDetallePedido{
    cant:     number;
    producto: Producto;
    total:    number;
}

export interface Avatar{
    img:string,
    seleccionado:boolean
}

export interface ILogin {
    correo:     string;
    contrasena: string;
}

export interface IDirecciones {
    idDireccion: number;
    latitud:     number;
    longitud:    number;
    detalle:     string;
}

export interface IPedidos {
    apellido: string;
    costo_envio: number;
    detalle: string;
    fecha_pedido: string;
    idDireccion: number;
    idPedidos: number;
    idPersona: number;
    latitud: number;
    longitud: number;
    nombre: string;
    subtotal: number;
    telefono: string;
}