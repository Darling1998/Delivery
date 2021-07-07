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