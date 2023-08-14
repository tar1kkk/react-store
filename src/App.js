import React from 'react';
import AppRoutes from "./components/Routes/Routes";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";

function App(props) {
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