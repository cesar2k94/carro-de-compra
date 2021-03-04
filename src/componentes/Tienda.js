import React from 'react';
import Productos from './Productos'

const Tienda = ({carrito, cambiarCarrito}) => {
    return ( 
        <div>
            <h1>Tienda</h1>
            <Productos cambiarCarrito={cambiarCarrito} carrito={carrito}/>
        </div>
     );
}
 
export default Tienda;