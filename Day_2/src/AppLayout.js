import Body from "./components/Body"
import Footer from "./components/Footer"
import Header from "./components/Header"
import  Shimmer  from "./components/Shimmer"

const AppLayout = () =>{
    return (
        <div>
            <Header />
            <Body />
            {/* <Shimmer/> */}
            <Footer />
            
        </div>
    )
}

export default AppLayout;