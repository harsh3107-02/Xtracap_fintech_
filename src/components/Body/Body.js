import React, { useState, useEffect } from "react";
import Card from "./Card";
import Shimmer from "../shimmer/shimmer";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../../redux/store";
import Saved from "../../assets/icons8-star.gif";
import R_Saved from "../../assets/icons8-star-48.png";
import useAllBeerList from "../../utils/useAllBeerList";

const Body = () => {
  const dispatch = useDispatch();
  const [beers, setBeers] = useAllBeerList();
  const searchResults = useSelector((state) => state.searchResults);
  const cart = useSelector((state) => state.cart);
  const [starStates, setStarStates] = useState({});
  const [saved, setsaved] = useState(false);

  useEffect(() => {
    const cartItems = JSON.parse(localStorage.getItem("CartItems")) || [];
    const starStatesFromStorage = JSON.parse(localStorage.getItem("StarStates")) || {};
    setStarStates(starStatesFromStorage);
    cartItems.forEach((item) => {
      starStatesFromStorage[item.id] = true;
    });
    setStarStates(starStatesFromStorage);
  }, []);

  const toggleStar = (beer) => {
    const updatedCart = saved ? cart.filter(item => item.id !== beer.id) : [...cart, beer];
    dispatch(saved ? removeFromCart(beer) : addToCart(beer));
    setsaved(!saved);
    
    // Update starStates
    const updatedStarStates = { ...starStates, [beer.id]: !saved };
    setStarStates(updatedStarStates);

    // Save starStates to local storage
    localStorage.setItem("StarStates", JSON.stringify(updatedStarStates));
  };

  return beers.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="container">
      {searchResults.length === 0
        ? beers.map((beer) => (
            <div className="ffd" key={beer.id} style={{ position: "relative" }}>
              <Card
                name={beer.name}
                tagline={beer.tagline}
                description={beer.description}
                imageUrl={beer.image_url}
              />
              <button
                className="star-button"
                onClick={() => toggleStar(beer)}
                style={{
                  position: "absolute",
                  top: "18px",
                  right: "18px",
                  backgroundColor: "hsl(353, 42%, 32%)",
                }}
              >
                {starStates[beer.id] ? <img src={Saved} alt="star" /> : <img src={R_Saved} alt="empty-star" />}
              </button>
            </div>
          ))
        : searchResults.map((beer) => (
            <div className="ffd" key={beer.id} style={{ position: "relative" }}>
              <Card
                name={beer.name}
                tagline={beer.tagline}
                description={beer.description}
                imageUrl={beer.image_url}
              />
              <button
                onClick={() => toggleStar(beer)}
                style={{
                  position: "absolute",
                  top: "18px",
                  right: "18px",
                  backgroundColor: "hsl(353, 42%, 32%)",
                }}
              >
                {starStates[beer.id] ? <img src={Saved} alt="star" /> : <img src={R_Saved} alt="empty-star" />}
              </button>
            </div>
          ))}
    </div>
  );
};

export default Body;
