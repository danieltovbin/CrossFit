import CarouselImages from "../CarouselImages/CarouselImages";
import ValidatedForm from "./ValidatedForm/ValidatedForm";
import "./style.scss";

const ContactUs = () => {
  const imgSrcs = [
    "https://www.crossfit.com/wp-content/uploads/2023/11/13131628/join-a-crossfit-class-1024x576.jpg",
    "https://thebarbellspin.com/wp-content/uploads/2024/05/victorhoffer_2024semifinals.jpg",
    "https://n9y9v4s5.rocketcdn.me/wp-content/uploads/CROSSFIT-HEADER-PIC--e1624548400157.jpg",
  ];

  return (
    <div id="contact-us">
      <h2>Contact Us</h2>
      <div className="container">
        <div className="content">
          <p>
            Ready to take the next step? We're here to help you get started.
            Contact us below for detailed information and personalized
            assistance. Let's make your journey a success together!
          </p>
          <div className="container__form">
            <ValidatedForm />
          </div>
        </div>
        <CarouselImages imgSrcs={imgSrcs} />
      </div>
    </div>
  );
};

export default ContactUs;
