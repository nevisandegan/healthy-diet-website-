import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="container grid grid--footer">
          <div className="logo-col">
            <Link to={"#"} onClick={()=>window.scrollTo({
              top:0,
              behavior:"smooth"
            })}>
              <img
                className="logo"
                alt="healthy-diet"
                src={require(".././img/logo/logo3.jpeg")}
              />
            </Link>
            <p className="copyright">
              تمامی حقوق مادی و معنوی این سایت متعلق به رستوران سلامت می باشد و
              هرگونه کپی برداری غیرقانونی محسوب خواهد شد
            </p>
          </div>
          <div className="address-col">
            <p className="footer-heading">تماس با ما</p>
            <address className="contacts">
              <p className="address footer-link">
                {" "}
                آدرس : تهران تهرانپارس فلکه اول تهرانپارس جنب پاساژ سپید پلاک
                ۳۵۷۲
              </p>
              <p>
                <Link to={"tel:77313233"} className="footer-link">77313233</Link>
                <br/>
                <Link to={"salamatresturaunt@gmail.com"} className="footer-link">
                  salamatresturaunt@gmail.com
                </Link>
              </p>
            </address>
          </div>
          <nav className="nav-col">
            <p className="footer-heading">حساب کاربری</p>
            <ul className="footer-nav">
                <li><Link to={"#"} className="footer-link">ثبت نام</Link></li>
                <li><Link to={"#"} className="footer-link">ورود</Link></li>
                <li><Link to={"#"} className="footer-link">اپلیکیشن اندروید</Link></li>
                <li><Link to={"#"} className="footer-link">اپلیکیشن iOS</Link></li>
            </ul>
          </nav>
          <nav className="nav-col">
            <p className="footer-heading">شرکت</p>
            <ul className="footer-nav">
                <li><Link to={"#"} className="footer-link">درباره ی ما</Link></li>
                <li><Link to={"#"} className="footer-link">درباره ی کسب و کار</Link></li>
                <li><Link to={"#"} className="footer-link">آشپزی</Link></li>
                <li><Link to={"#"} className="footer-link">مشاغل</Link></li>
            </ul>
          </nav>
          <nav className="nav-col">
            <p className="footer-heading">منابع</p>
            <ul className="footer-nav">
                <li><Link to={"#"} className="footer-link">دستور پخت</Link></li>
                <li><Link to={"#"} className="footer-link">پشتیبانی</Link></li>
                <li><Link to={"#"} className="footer-link">شرایط حریم خصوصی</Link></li>
            </ul>
          </nav>
        
        </div>
      </footer>
    </>
  );
};

export default Footer;
