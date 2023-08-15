import React, {useEffect} from 'react';
import AppRoutes from "./components/Routes/Routes";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import {useDispatch} from "react-redux";
import {getCategories} from "./features/categories/categoriesSlice";
import {getProducts} from "./features/products/productsSlice";

function App(props) {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCategories());
        dispatch(getProducts());
    }, [dispatch]);
    return (
        <div className='app'>
            <Header/>

            <div className='container'>
                <Sidebar/>
                <AppRoutes/>
            </div>

            <Footer/>
        </div>
    );
}

export default App;