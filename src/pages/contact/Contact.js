import { Header } from "../../components/header/Header";
import "./contact.scss";
export const Contact = () => {
  return (
    <div className="contact_main_container">
      <Header />
      <div className="contact_container">
        <div className="section_left">
          We are open daily, we serve seasonal food, including fish and meat.
          All freshly cooked.
        </div>
        <div className="section_right">
          <div className="header_container">
            <div className="header">(123) 456-7890 / contact@gmail.com</div>
            <div className="header">The Hoe, PL48RT Plymouth, UK</div>
            <div className="header_three">
              We are open daily to serve best food possible. Just call us to
              make an order. If you don’t know what meal to choose, our
              operators will help you with pleasure.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
