import { swiggyURL } from "../utils/constant.js";
import {restaurantsArr, }from "../utils/mcokData.js";
import RestaurantCard from "./RestaurantCards.js";
import { Shimmer } from "./Shimmer.js";
import { useState, useEffect } from "react";

const Body = () => {

        const getData = async () =>{
            const response = await fetch(swiggyURL)
        
            const data = await response.json();
            // console.log(data)

            console.log(
                data.data.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants,
            );
            
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
        <Shimmer/>
      <div style={{ margin: "100px" }}>
        {" "}
        <button onClick={getData}>Get data</button>{" "}
      </div>

      </div>
    </div>
  );
};

export default Body;