import React from 'react';
import Poster from "./Poster";
import {useSelector} from "react-redux";
import Products from "./Products";
import Categories from "./Categories";

function Home() {
    const products = useSelector((state)=> state.productsSlice.list);
    const categories = useSelector((state)=> state.categoriesSlice.list);
   console.log(categories)
    return (
       <>
           <Poster/>
           <Products  products={products} amount={5} title='Trending'/>
           <Categories categories={categories} amount={5} title='Trending' />
       </>
    );
}

export default Home;