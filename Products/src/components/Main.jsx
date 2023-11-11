import { useState } from "react";
import data from "../db/dogs.js";
import "../css/Main.css";
import absent from "../Images/no-image-available-vector-illustration-260nw-744886198.webp";

let count = 0;

const Main = () => {
  const [img, setimg] = useState([]);

  if (count <= 30) {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((res) => res.json())
      .then((data) => setimg((prev) => prev.concat(data.message)));
    count++;
  }

  return (
    <>
      <section>
        <h2>Featured Dogs</h2>
        <div className="featured-dog">
          {data.map((obj, index) => {
            return (
              <div className="dog-card" key={Math.random()}>
                <img src={img[index] ? img[index] : absent} alt=""></img>
                <span>{obj.name}</span>
                <span>{obj.price}</span>
                <span>{obj.description}</span>
                <button>Buy</button>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Main;
