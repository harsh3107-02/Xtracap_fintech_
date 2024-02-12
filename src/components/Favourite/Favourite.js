import React, { useState, useEffect } from "react";
import Card from "../Body/Card";
import Saved from "../../assets/icons8-star.gif";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../../redux/store";

const Favourite = () => {
  const [beers, setBeers] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const storedBeers = JSON.parse(localStorage.getItem("cartItem")) || [];
    setBeers(storedBeers);
  }, []);

  const toggleStar = (beer) => {
    const updatedBeers = beers.filter((item) => item.id !== beer.id);
    localStorage.setItem("favouriteBeers", JSON.stringify(updatedBeers));
    setBeers(updatedBeers);
    dispatch(removeFromCart(beer));
  };

  return beers.length === 0 ? (
    <h1>Nothing to show</h1>
  ) : (
    <div className="container">
      {beers.map((beer) => (
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
            <img src={Saved} alt="star" />
          </button>
        </div>
      ))}
    </div>
  );
};

export default Favourite;
