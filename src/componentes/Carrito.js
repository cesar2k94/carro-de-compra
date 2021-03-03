import React from 'react';
import styled from "styled-components";

const Carrito = ({carrito}) => {
    
    return ( 
        <div>
            <h3>Carrito de Compras</h3>
            {carrito.length > 0 ?
                carrito.map((producto, index)=>{
                    return(
                        <Producto key={index}>
                            <NombreProducto>
                                {producto.nombre}
                            </NombreProducto>
                            Cantidad: {producto.cantidad}
                        </Producto>
                    )
                })
            :
                <p>No se han agregado elementos al carrito</p>    
            }
        </div>
     );
}
 
const Producto = styled.div`
    padding: 10px;
    border-bottom: 1px solid #ebef3;
    font-size
`;

const NombreProducto = styled.p`
    font-weight: bold;
    font-size: 16px;
    color: #000;
`;

export default Carrito;