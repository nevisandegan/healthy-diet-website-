import { features } from "../content/contents";

const Features = () => {
  return (
    <>
      <div className="container grid">
        <aside className="plan-details">
          هر زمان که بخواهید میتوانید کنسل کنید . هر دو طرح شامل موارد زیر است :
        </aside>
      </div>
      <div className="container grid grid--4-cols">
        {features.map((a, index) => (
          <div className="feature" key={index}>
            {a.icon}
            <p className="feature-title">{a.title}</p>
            <p className="feature-text">{a.text}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Features;
