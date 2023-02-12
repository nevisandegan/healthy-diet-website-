import { comments } from "../content/contents";
import Gallery from "./Gallery";

const Comments = () => {
  return (
    <>
      <section className="section-testimonials grid grid2cols">
        <div className="testimonials-container" id="comments">
          <span className="subheading">گالری عکس و نظرات مشتریان</span>
          <h2 className="heading-secondary again-secondary">
            یکبار امتحان کنی نمیتونی دیگه دست بکشی
          </h2>

          <div className="testimonials">
            {comments.map((a, index) => (
              <figure className="testimonial" key={index}>
                <img
                  src={require(`.././img/customers/${a.img}`)}
                  alt="fc"
                  className="testimonial-img"
                />
                <blockquote className="testimonial-text">
                  {a.text}
                  <div className="comment-name">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="#777"
                      width="2rem"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    <span className="testimonial-name">{a.name}</span>
                  </div>
                </blockquote>
              </figure>
            ))}
          </div>
        </div>
        <Gallery/>
      </section>
    </>
  );
};

export default Comments;
