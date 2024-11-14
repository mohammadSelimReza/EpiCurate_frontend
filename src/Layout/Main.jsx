import { Outlet } from "react-router-dom";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";

const Main = () => {
    return (
        <>
            <Header></Header> 
            <Outlet></Outlet>
            <Footer></Footer>  
        </>
    );
};

export default Main;