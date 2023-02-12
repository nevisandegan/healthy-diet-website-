import "./App.css";
import "./queries.css";
import Hero from "./components/Hero";
import Header from "./components/Header";
import { Helmet, HelmetProvider } from "react-helmet-async";
import How from "./components/How";
import Logos from "./components/Logos";
import Card from "./components/Cards";
import Comments from "./components/Comments";
import Price from "./components/Price";
import Cta from "./components/Cta";
import Footer from "./components/Footer";
import { useState,useRef, useEffect } from "react";
function App() {
  const [isVisible,setIsVisible]=useState(false)
  const containerRef=useRef(null)
  const callbackFunction = (entries) => {
    const [entry] = entries;
    setIsVisible(entry.isIntersecting);
  };
  //can useMemo
  const options = {
    root: null,
    threshold:0,
  };
  const handleClickScroll = (name) => {
    const element = document.getElementById(name);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  useEffect(() => {
    const observer = new IntersectionObserver(callbackFunction, options);
    if (containerRef.current) observer.observe(containerRef.current);

    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current);
    };
  }, [containerRef, options]);
  return (
    <HelmetProvider>
      <div className="App">
        <Helmet>
          <title>رستوران سلامت &mdash; دیگه غذا درست نکن</title>
        </Helmet>
        <Header handleClickScroll={handleClickScroll} containerRef={containerRef} isVisible={isVisible}/>
        <main>
          <Hero containerRef={containerRef}/>
          <Logos />
          <How />
          <Card />
          <Comments />
          <Price />
          <Cta />
          <Footer />
        </main>
      </div>
    </HelmetProvider>
  );
}

export default App;
