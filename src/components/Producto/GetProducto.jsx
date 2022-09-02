import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Producto from './Producto';

const Getproducto = () => {
    const [prod, setprod] = useState([])
    const { id } = useParams();

    useEffect(() => {
        const getdata = new Promise((res, rej) => {
            res(fetch(`https://fakestoreapi.com/products/${id}`))

        })


        getdata
            .then(res => res.json())
            .then(json => setprod(json))
            .catch((err) => console.error(err))

    }, [])

    return (
        <Producto producto={prod} />
    );
}

export default Getproducto;
