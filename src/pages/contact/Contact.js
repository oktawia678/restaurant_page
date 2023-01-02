import { useEffect, useState } from "react";
import { Header } from "../../components/header/Header";
import "./contact.scss";
export const Contact = () => {
  const [welcomeElephants, setWelcomeElephants] = useState("");
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const response = await fetch("http://localhost:4000/elephants");
    const {data} = await response.json();
    setWelcomeElephants(data);
  };
  return (
    <div className="contact_main_container">
      <Header />
      <div className="contact_container">
        <div className="section_left">{welcomeElephants}</div>
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
