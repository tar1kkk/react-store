import React from 'react';
import {useParams} from "react-router-dom";
import { useGetProductQuery} from "../features/api/apiSlice";

function SingleProduct(props) {
    const {id} = useParams();

    const {data,isLoading} = useGetProductQuery({id});

    console.log(data);
    return (
        <div></div>
    );
}

export default SingleProduct;