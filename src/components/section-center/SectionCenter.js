import { Button } from "../button/Button";
import "./section-center.css";
export const SectionCenter = () => {
  return (
    <>
      <div className="container">
        <div className="container_for_four_elements">
          <div className="title_one">WE`RE GOREAMEX RESTAURANT</div>
          <div className="title_two">
            MAKING DELICIOUS <br /> PREMIUM FOOD
          </div>
          <div className="title_three">
            Welcome to our restaurant!If you want to make a reservation, please,{" "}
            <br />
            push the button below. Enjoy your meal!
          </div>
          <div className="title_four">
            <Button />
          </div>
        </div>
      </div>
      <div className="container_two">
        <div className="container_center_page_one"></div>
        <div className="container_center_page_two">
          <div className="container_text">
            <div className="heading">INTRODUCE</div>
            <div className="text_first">
              COLLEGE OF ART UNDER THE GUIDANCE OF FOOD.
            </div>
            <div className="text_second">
              Goreamex is a restaurant, bar and coffee roastery located on a
              busy corner site in Farringdon’s Exmouth Market. With glazed
              frontage on two sides of the building. Far far away, behind the
              word mountains, far from the countries Vokalia and Consonantia.
            </div>
            <div className="text_third">
              There live the blind texts. Separated they live in Bookmarksgrove
              right at the coast of the Semantics, a large language ocean.
            </div>
          </div>
        </div>
      </div>
      <div className="container_three">
      <div className="container_information"></div>
      <div className="box_menu"></div>


      </div>
    </>
  );
};
