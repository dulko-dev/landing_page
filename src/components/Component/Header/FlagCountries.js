import React, { useEffect, useRef, useState } from "react";
import roller from "../../../assets/header/loading.gif";
import {
  LiStyle,
  Title,
  UlStyle,
  Waiting,
  ImageFlag,
  ImageEffect,
  EndText,
} from "../../Style/Header/flagCountriesstyle";

function FlagCountries({ data }) {
  const [isLoading, setIsLoading] = useState(false);
  const [count, setCount] = useState({
    prev: 0,
    next: 20,
  });
  const [current, setCurrent] = useState(data.slice(count.prev, count.next));
  const [endFetch, setEndFetch] = useState(false);

  const userRef = useRef(null);

  useEffect(() => {
    if (!isLoading) return;
    let idTimeout;

    const getMoreData = () => {
      if (current.length === data.length) {
        setIsLoading(false);
        setEndFetch(true);
        return;
      }
      idTimeout = setTimeout(() => {
        setCurrent(
          current.concat(data.slice(count.prev + 20, count.next + 20))
        );
        setCount((prevState) => ({
          prev: prevState.prev + 20,
          next: prevState.next + 20,
        }));
        setIsLoading(false);
      }, 1000);
    };
    getMoreData();
    return () => {
      clearTimeout(idTimeout);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoading]);

  useEffect(() => {
    const user = userRef.current;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsLoading(entry.isIntersecting);
          }
        });
      },
      { threshold: 1.0 }
    );
    if (user) {
      observer.observe(user);
    } else {
      observer.disconnect(user);
    }
  }, []);

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
          <img
            src={roller}
            alt="loading icon"
            style={{
              position: "fixed",
              left: "50%",
              bottom: "20%",
              transform: "translateX(-50%)",
            }}
          />
        </Waiting>
      )}
      {endFetch && <EndText>Hold on this is the end</EndText>}
      <div ref={userRef}></div>
    </UlStyle>
  );
}

export default FlagCountries;
