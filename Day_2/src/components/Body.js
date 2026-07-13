import { swiggyURL } from "../utils/constant.js";
// import {restaurantsArr, }from "../utils/mcokData.js";
import RestaurantCard from "./RestaurantCards.js";
import  Shimmer  from "./Shimmer.js";
import { useState, useEffect } from "react";

const Body = () => {

        const [hotelList, setHotelList] = useState(null);

        useEffect(() => {

        getData();
    
    }, []);


        const getData = async () =>{
            const response = await fetch(swiggyURL)
        
            const data = await response.json();
            // console.log(data)

            console.log(
                data.data.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants,
            );

    //         setHotelList(
    //   data.data.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    // );
        setTimeout(() => {
    setHotelList(
      data.data.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  }, 1500);

    // console.log(`hotel list` ,hotelList)

        }
    if(hotelList == null){
        return <Shimmer/>;
    }

  return (
    <div className="body">
      <div className="res-container">
        {/* <RestaurantCard resName = {`Mehfil`} rating = {5}/>
        <RestaurantCard resDetail={RestaurantsArr[0]} />
        <RestaurantCard resDetail={RestaurantsArr[1]} />
        <RestaurantCard resDetail={RestaurantsArr[2]} /> */}
        {/* {restaurantsArr.map((resObj) => {
          return <RestaurantCard resDetail={resObj} extraDetail={`Open Now`} />;
        })} */}
        {/* <Shimmer/>
      <div style={{ margin: "100px" }}>
        {" "}
        <button onClick={getData}>Get data</button>{" "} */}

            {hotelList.map((resObj)=>{
                return(
                    <RestaurantCard resDetail={resObj?.info} key={resObj?.info.id}/>
                )
            })}

      </div>

      </div>
    // </div>
  );
};

export default Body;