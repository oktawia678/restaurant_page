import "./Reservation.scss"
import { Header } from "../../components/header/Header";
export const Reservation = () => {
    return(
        <>
    <Header/>
    <div className="box_table">
    <div className="box_message_reservation">WE WOULD BE HAPPY TO ANSWER YOUR QUESTIONS.</div>
        <div className="booking_box">
            <div className="box_name"><input placeholder="email"/></div>
            <div className="box_email"><input placeholder="name"/></div>
            <div className="box_message"><input placeholder="number"/></div>
        </div>
    </div>
    


    </>
    )
}
