import { Link } from "react-router-dom";
import { card } from "../content/contents";
const Card = ({scollToRef}) => {
  return (
    <section className="section-meals" id="meals">
      <div className="container">
        <span className="subheading">وعده های غذایی </span>
        <h2 className="heading-secondary">
          در اینجا هوش مصنوعی بین بیش از ۵۰۰۰ دستور غذا انتخاب میکند
        </h2>
      </div>
      <div className="container grid grid--3-cols margin-bottom-md">
        {card.map((a, index) => (
          <div className="meal" key={index}>
            <img
              src={require(`../img/card/${a.img}`)}
              className="meal-img"
              alt="fish"
            />
            <div className="pad">
              {a.tag.map((b, index) => (
                <span className="tag" key={index}>
                  {b}
                </span>
              ))}
              <p className="meal-title">{a.name}</p>
              <ul className="meal-attributes">
                <div className="meal-icons">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="#cf711f"
                    width="3rem"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z"
                    />
                  </svg>
                  <li className="meal-attribute">کالری {a.calories}</li>
                </div>
                <div className="meal-icons">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="#cf711f"
                    width="3rem"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
                    />
                  </svg>
                  <li className="meal-attribute">امتیاز غذایی {a.score}</li>
                </div>
                <div className="meal-icons">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="#cf711f"
                    width="3rem"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                    />
                  </svg>
                  <li className="meal-attribute">{a.rate}/۵</li>
                </div>
              </ul>
            </div>
          </div>
        ))}
        <div className="diets">
          <h3 className="heading-tertiary">غذا هایی که میپذیم : </h3>
          <ul className="list">
            <li className="list-item">
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
              </svg>
              <span>بدون روغن</span>
            </li>
            <li className="list-item">
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
              </svg>
              <span>گیاه خواری</span>
            </li>
            <li className="list-item">
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
              </svg>
              <span>بدون لاکتوز</span>
            </li>
            <li className="list-item">
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
              <span>بدون قند</span>
            </li>
            <li className="list-item">
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
              <span>برگر های ذغالی</span>
            </li>
            <li className="list-item">
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
              </svg>
              <span>انواع پیتزا سبزیجات</span>
            </li>
            <li className="list-item">
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
              </svg>
              <span>انواع سالاد سبزیجات</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="container all-recipes">
        <Link to={"#"} className="link">
          همه دستور العمل ها را ببینید
        </Link>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="#e67e22"
          width="2rem"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75"
          />
        </svg>
      </div>
    </section>
  );
};

export default Card;
