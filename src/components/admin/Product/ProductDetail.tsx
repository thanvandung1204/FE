import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useGetProductsQuery } from '../../../api/product';
import { Spin } from 'antd';

const ProductDetail = () => {
    const { id } = useParams<{ id: string }>();
    const { data: productData, isLoading } = useGetProductsQuery(id);
    console.log('Product Detail', productData);
    const product = productData?.products[0];

    if (isLoading) {
        return <Spin />;
    }

    return (
        <div>
            <h2> Name : {product?.name}</h2>
            <img src={product?.image}  width={100}/>
            <p> Price {product?.price}</p>
            <p> category {product?.categoryId}</p>
            <p> sale: {product?.sale}</p>
            <p>{product?.quanlity}</p>
            <p>{product?.trang_thai}</p>
            <p>{product?.description}</p>
        </div>
    );
};

export default ProductDetail;