import React, {useEffect} from 'react';
import Poster from "./Poster";
import {useDispatch, useSelector} from "react-redux";
import Products from "./Products";
import Categories from "./Categories";
import Banner from "./Banner";
import {filterByPrice} from "../features/products/productsSlice";

function Home() {
    const dispatch = useDispatch();
    const filtered = useSelector((state)=> state.productsSlice.filtered);
    const products = useSelector((state) => state.productsSlice.list);
    const categories = useSelector((state) => state.categoriesSlice.list);
    useEffect(() => {
        if (!products.length) return;
        dispatch(filterByPrice(100));
    }, [dispatch, products.length]);
    return (
        <>
            <Poster/>
            <Products products={products} amount={5} title='Trending'/>
            <Categories categories={categories} amount={5} title='Worth seeing'/>
            <Banner/>
            <Products products={filtered} amount={5} title='Less than 100$'/>
        </>
    );
}

export default Home;