import { content } from "../content/contents";
const How = () => {
  return (
    <>
     <section className="section-how" id="how">
              <div className="container">
                <span className="subheading">آشنایی با مراحل کار </span>
                <h2 className="heading-secondary">
                  سلامت روزانه شما در 3 مرحله
                </h2>
              </div>
      {content.map((a, index) =>
        a.id / 2 === 1 ? (
          <div className="container grid grid--2-cols sss" key={index}>
            <div className="step-text-box">
              <p className="step-number">{a.num}</p>
              <h3 className="heading-tertiary">{a.head}</h3>
              <p className="step-description">{a.text} </p>
            </div>
            <div className="step-img-box">
              <img
                src={require(`../img/how/${a.img}.webp`)}
                className="img-how"
                alt="sc"
              />
            </div>
          </div>
        ) : (
          <div className="container grid grid--2-cols sss" key={index}>
            <div className="step-img-box">
              <img
                src={require(`../img/how/${a.img}.webp`)}
                className="img-how"
                alt="sc"
              />
            </div>
            <div className="step-text-box">
              <p className="step-number">{a.num}</p>
              <h3 className="heading-tertiary">{a.head}</h3>
              <p className="step-description">{a.text} </p>
            </div>
          </div>
        )
      )}
      </section>
    </>
  );
};

export default How;
