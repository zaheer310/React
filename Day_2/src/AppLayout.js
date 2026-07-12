import { Outlet } from "react-router-dom"
import Body from "./components/Body"
import Footer from "./components/Footer"
import Header from "./components/Header"
import  Shimmer  from "./components/Shimmer"

const AppLayout = () =>{
    return (
        <div>
            <Header />
            {/* <Body /> */}
            {/* <Shimmer/> */}
            <Outlet/>
            <Footer />
            
        </div>
    )
}

export default AppLayout;