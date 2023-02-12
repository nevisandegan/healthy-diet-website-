import { Link } from "react-router-dom";
import { priceStarter, priceComplete } from "../content/contents";
import Features from "./Features";

const Price = () => {
  return (
    <section className="section-pricing" id="price">
      <div className="container center-text">
        <span className="subheading">قیمت</span>
        <h2 className="heading-secondary">بدون ورشکسته شدن خوب غذا بخور</h2>
      </div>
      <div className="container grid grid--2-cols margin-bottom-md">
        <div className="pricing-plan princing-plan--starter">
          <header className="plan-header">
            <p className="plan-name">{priceStarter.name}</p>
            <p className="plan-price">
              {priceStarter.price}
              <span>تومان</span>
            </p>
            <p className="plan-text">{priceStarter.text}</p>
          </header>
          <ul className="list">
            {priceStarter.spn.map((a,index) => (
              <li className="list-item" key={index}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.8"
                  stroke="#cf711f"
                  width="2.5rem"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  />
                </svg>{" "}
                <span>{a}</span>
              </li>
            ))}
            
          </ul>
          <div className="plan-sing-up">
            <Link to="#" className="btn btn-right">
              غذا خوردن سالم را شروع کنیم
            </Link>
          </div>
        </div>
        <div className="pricing-plan princing-plan--compelte">
          <header className="plan-header">
            <p className="plan-name">{priceComplete.name}</p>
            <p className="plan-price">
              {priceComplete.price}
              <span>تومان</span>
            </p>
            <p className="plan-text">{priceComplete.text}</p>
          </header>
          <ul className="list">
            {priceComplete.spn.map((a,index) => (
              <li className="list-item" key={index}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.8"
                  stroke="#cf711f"
                  width="2.5rem"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  />
                </svg>{" "}
                <span>{a}</span>
              </li>
            ))}
          </ul>
          <div className="plan-sing-up">
            <Link to="#" className="btn btn-right">
              غذا خوردن سالم را شروع کنیم
            </Link>
          </div>
        </div>
      </div>
    <Features/>
    </section>
  );
};

export default Price;
