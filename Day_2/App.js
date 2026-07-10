import React from "react";
import ReactDom from "react-dom/client";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="header-logo"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgANqB6675mmRJ8tmv2qM93I77zW2zWnrybPG3wvKr1hDFsnOP_c6oaAA&s=10"
        />
      </div>
       <div className="search-bar">
        <input placeholder="Search For Restaurants and Food" />
      </div>

      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>Contact us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCard = (props) => {

     
  const { resName, rating } = props;
 const restaurentObj = props.resDetail;

  return (
    <div className="res-card">
      <div className="res-img-container">
        <img
          className="res-logo"
          alt="res-logo"
          src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2026/3/24/60cad3c2-5ba1-4697-955b-735d198ae7e8_491960.JPG"
        />
      </div>
      <h3 className="res-title">{restaurentObj.resName}</h3>
      <h4>{restaurentObj.cuisines}</h4>
      <h4>⭐️ {restaurentObj.rating} Stars</h4>
      <h4>{restaurentObj.delieveryTime} | {restaurentObj.costForTwo}</h4>
    </div>
  );
};

const RestaurantsArr = [

    {
        id: `40121`,
        resName: `Lucky Restaurant`,
        cuisines: [`Biryani`,`Tandoor`],
        avgRating : 4.3,
        delieveryTime : 36,
        costForTwo : `₹300 for two`,
        imgId : ``,
        location : `Santosh Nagar`
    },
    {
         id: "79706",
    resName: "Shah Ghouse Hotel & Restaurant",
    cuisines: ["Biryani", "Chinese", "Mughlai", "Tandoor"],
    avgRating: 4.4,
    delieveryTime: 30,
    costForTwo: "₹350 for two",
    imgId: "ggbuknqzqc4qoqfnl2cr",
    location: "Charminar",
    },
    {
         id: "150646",
    resName: "Cream Stone Ice Cream",
    cuisines: ["Ice Cream", "Desserts", "Beverages", "Ice Cream Cakes"],
    avgRating: 4.4,
    delieveryTime: 30,
    costForTwo: "₹250 for two",
    imgId:
      "RX_THUMBNAIL/IMAGES/VENDOR/2025/7/24/de4e5459-06d1-4249-bf8f-7e9277fb5035_150646.JPG",
    location: "Himayath Nagar",
    }

]
const Body = () =>{
    return (
        <div className="body">
            <div className="res-container">
                {/* <RestaurantCard resName = {`Mehfil`} rating = {5}/> */}
                <RestaurantCard resDetail ={RestaurantsArr[0]}/>
                <RestaurantCard resDetail ={RestaurantsArr[1]}/>
                <RestaurantCard resDetail ={RestaurantsArr[2]}/>
            </div>
        </div>
    );
};


const Footer = () => {
  return (
    <div
      className="footer"
      style={{
        fontSize: "2rem",
        color: "white",
      }}
    >
      <h4>© 2024 Md Zaheer. All rights reserved.</h4>
    </div>
  );
};

const App =() =>{
    return (
        <div>
            <Header />
            <Body/>
            <Footer></Footer>
        </div>
    );
};

const root=ReactDom.createRoot(document.querySelector("#root"))
root.render(<App/>)