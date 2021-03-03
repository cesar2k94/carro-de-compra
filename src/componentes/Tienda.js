import React from 'react';
import Productos from './Productos'

const Tienda = ({productos, carrito, cambiarCarrito}) => {
    return ( 
        <div>
            <h1>Tienda</h1>
            <Productos productos={productos} cambiarCarrito={cambiarCarrito} carrito={carrito}/>
        </div>
     );
}
 
export default Tienda;