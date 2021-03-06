import React, { useEffect, useState } from "react";
import roller from "../../../assets/header/loading.gif";
import {
  LiStyle,
  Title,
  UlStyle,
  Waiting,
  ImageFlag,
  ImageEffect,
} from "../../Style/Header/flagCountriesstyle";

function FlagCountries({ data }) {
  const [isLoading, setIsLoading] = useState(false);
  const [count, setCount] = useState({
    prev: 0,
    next: 20,
  });
  const [current, setCurrent] = useState(data.slice(count.prev, count.next));
  const [endFetch, setEndFetch] = useState(false);

  useEffect(() => {
    document.addEventListener("scroll", handleScroll);
    return () => document.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!isLoading) return;
    getMoreData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoading]);

  const handleScroll = () => {
    if (window.innerHeight + window.scrollY >= document.body.scrollHeight) {
      setIsLoading(true);
    }
    return;
  };

  const getMoreData = () => {
    if (current.length === data.length) {
      setIsLoading(false);
      setEndFetch(true);
      return;
    }

    setTimeout(() => {
      setCurrent(current.concat(data.slice(count.prev + 20, count.next + 20)));
      setCount((prevState) => ({
        prev: prevState.prev + 20,
        next: prevState.next + 20,
      }));
      setIsLoading(false);
    }, 1000);
  };

  return (
    <UlStyle>
      {current.map((flag) => (
        <LiStyle key={flag.name}>
          <ImageEffect>
            <ImageFlag src={flag.flag} />
          </ImageEffect>
            <Title>{flag.name}</Title>
        </LiStyle>
      ))}
      {isLoading && (
        <Waiting>
          <img src={roller} alt="loading icon" />
        </Waiting>
      )}
      {endFetch && "Hold on this is end dude"}
    </UlStyle>
  );
}

export default FlagCountries;
