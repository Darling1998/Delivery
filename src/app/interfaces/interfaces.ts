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