export interface Producto{
    codigo:      number;
    nombre:      string;
    imagen:      string;
    precio:      number;
    descripcion: string;
}

export interface IDetallePedido{
    cant:     number;
    producto: Producto;
    total:    number;
}
