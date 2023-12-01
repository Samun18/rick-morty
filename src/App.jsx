/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef, useState } from "react";
import "./App.css";
import useFetch from "./hooks/useFetch";
import getRandomNum from "./utils/getRandomNum";
import LocationInfo from "./components/LocationInfo";
import ResidentCard from "./components/ResidentCard";

function App() {
  const [inputValue, setInputValue] = useState(getRandomNum(126));

  const url = `https://rickandmortyapi.com/api/location/${inputValue}`;
  const [location, getLocation, hasError] = useFetch(url);

  useEffect(() => {
    getLocation();
  }, [inputValue]);

  const inputSearch = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    setInputValue(inputSearch.current.value.trim());
  };
  return (
    <>
      <header className="header">
        <div className="hero">
          <h1 className="hero__title">Rick & Morty</h1>
          <img className="hero__img" src="./src/assets/bgCrop.jpg" alt="" />
        </div>
      </header>

      <main >
        <section className="form">
          <form onSubmit={handleSubmit}>
            <input placeholder="Search Dimension..." className="form__input" type="text" ref={inputSearch} />
            <button className="form__button">Search</button>
          </form>
        </section>
        <section className="main">
          {hasError ? (
            <h2>Hey! you must provide an id from 1 to 126</h2>
          ) : (
            <>
              <LocationInfo location={location} />
              <div className="container__cards">
                {location?.residents.map((url) => (
                  <ResidentCard key={url} url={url} />
                ))}
              </div>
            </>
          )}
        </section>
      </main>
    </>
  );
}

export default App;
