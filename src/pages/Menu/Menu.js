import './Menu.css'
import { Header } from "../../components/header/Header"
export const Menu  = () => {

  
return(
    <>
    <Header/>
    <div className="container_menu_card">
        <div className='offer_left'>
            <div className='option_dish_one'></div>
            <div className='option_dish_two'></div>
            <div className='option_dish_three'></div>
            
        </div>
        <div className='offer_right'>
            <div className='option_dish_four'></div>
            <div className='option_dish_five'></div>
            <div className='option_dish_six'></div>
        </div>


    </div>
    
    </>
    )
    
    
    
}