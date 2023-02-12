const Cta = () => {
  return (
    <>
      <section className="section-cta" id="cta">
        <div className="container">
          <div className="cta">
            <div className="cta-text-box">
              <h2 className="heading-secondary">
                یک نمونه غذای رایگان ارائه می دهیم
              </h2>
              <p className="cta-text">
                وعده های غذایی سالم، خوشمزه و بدون دردسر در انتظار شماست. از
                امروز خوب غذا بخورید. هر زمان خواستید می توانید آن را لغو کنید
                یا یه مدت توقف کنید. اولین وعده غذایی با ماست.
              </p>
              <form className="cta-form">
                <div>
                  <label htmlFor="full-name">نام نام خانوادگی</label>
                  <input id="full-name" type="text"  placeholder="عباس کریمی"/>
                </div>
                <div>
                  {" "}
                  <label htmlFor="email">ایمیل</label>
                  <input id="email" type="email"  placeholder="abas@gmail.com"/>
                </div>
                <div>
                  {" "}
                  <label htmlFor="select-where">کجا با ما آشنا شدی</label>
                  <select id="select-where">
                    <option value="">یکی را انتخاب کنید</option>
                    <option value="friends">دوستان و اشنایان</option>
                    <option value="yotube">یوتیوب</option>
                    <option value="padcast">پادکست</option>
                    <option value="facebook">فیسبوک</option>
                    <option value="others">دیگر</option>
                  </select>
                </div>

                <button className="btn btn--form" onClick={(e)=>e.preventDefault()}>ثبت نام کنید</button>
              </form>
            </div>
            <div className="cta-img-box" role="img" aria-label="eating"></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cta;
