import React from "react";
import JsxParser from "react-jsx-parser";
import * as Components from "../components";
import someLayout from "../templates/Layout";

const Home = ({ title, image, pokemon, pokemonList, layout }) => {
  return (
    <JsxParser
      bindings={{
        title,
        image,
        pokemonList,
        pokemon
      }}
      components={{
        ...Components
      }}
      jsx={layout}
    ></JsxParser>
  );
};

Home.getInitialProps = async () => {
  return {
    title: "Super Listan",
    image:
      "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=2048&q=20",
    pokemonList: [92, 2, 23, 75, 34, 150, 151],
    pokemon: 12,
    layout: someLayout
  };
};

export default Home;
