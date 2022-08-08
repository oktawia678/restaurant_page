import { Button } from "../button/Button";
import "./section-center.css";
export const SectionCenter = () => {
  return (
    <div className="container">
      <div className="container_for_four_elements">
        <div className="title_one">WE`RE GOREAMEX RESTAURANT</div>
        <div className="title_two">MAKING DELICIOUS <br/> PREMIUM FOOD</div>
        <div className="title_three">
          Welcome to our restaurant! If you want to make a reservation, please, <br/>
          push the button below. Enjoy your meal!
        </div>
        <div className="title_four">
          <Button />
        </div>
      </div>
    </div>
  );
};
