import { Link } from "react-router-dom";
import "../App.css";
const Hero = ({containerRef}) => {
  return (
    <>
      <section className="section-hero" ref={containerRef}>
        <div className="hero">
          <div className="hero-text-box">
            <h1 className="heading-primary">
              یک وعده غذایی سالم هر روز درب منزل شما تحویل داده می شود
            </h1>
            <p className="hero-description">
              {" "}
              سعی بر آن داریم که سالم غذا بخورید متناسب با ذائقه شخصی و نیازهای
              تغذیه ای شما. ما در سال گذشته بیش از ۲۵۰,۰۰۰ وعده غذایی تحویل داده
              ایم.
            </p>
            <Link to="#" className="btn btn-right margin-left-sm">
              غذا خوردن سالم را شروع کنیم
            </Link>{" "}
            <Link to="#" className="btn btn-left">
              بیشتر بدانید
            </Link>
            <div className="delivered-meals">
              <div className="delivered-img">
                <img
                  src={require(".././img/customers/12.jpg")}
                  alt="customer"
                />
                <img
                  src={require(".././img/customers/32.jpg")}
                  alt="customer"
                />
                <img
                  src={require(".././img/customers/35.jpg")}
                  alt="customer"
                />
                <img
                  src={require(".././img/customers/46.jpg")}
                  alt="customer"
                />
                <img
                  src={require(".././img/customers/97.jpg")}
                  alt="customer"
                />
                <img
                  src={require(".././img/customers/86.jpg")}
                  alt="customer"
                />
              </div>
              <p className="delivered-text">
                <span>۲۵۰,۰۰۰ </span> غذا پارسال تحویل داده شد !
              </p>
            </div>
          </div>
          <div className="hero-img-box">
            <img
              src={require(".././img/victoria-shes-UC0HZdUitWY-unsplash.webp")}
              alt="this is img"
              className="hero-img"
            />
          </div>
        </div>
      </section>
    </>
  );
};
export default Hero;
