import "./Reservation.scss"
import { Header } from "../../components/header/Header";
export const Reservation = () => {
    return(
        <>
    <Header/>
    <div className="box_table">
        <div className="booking_box">
            <div className="box_name"><input/></div>
            <div className="box_email"><input/></div>
            <div className="box_message"><input/></div>
        </div>
    </div>


    </>
    )
}
