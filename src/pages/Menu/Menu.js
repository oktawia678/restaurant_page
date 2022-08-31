import './Menu.css'
import { Header } from "../../components/header/Header"
export const Menu  = () => {

  
return(
    <>
    <Header/>
    <div className="container_menu_card">
        <div className='offer_left'>
            <div className='option_dish_one'>
                <div className='food_example_one'></div>
                <div className='text_price_one'>
                    <h1>nsjkc</h1>
                    <h2>vdkdvnkj</h2>
                </div>
            </div>
            <div className='option_dish_two'>
                <div className='food_example_two'></div>
                <div className='text_price_two'></div>
            </div>

            <div className='option_dish_three'>
                <div className='food_example_three'></div>
                <div className='text_price_three'></div>
            </div>
            
        </div>
        <div className='offer_right'>
            <div className='option_dish_four'>
                <div className='food_example_four'></div>
                <div className='text_price_four'></div>
            </div>
            <div className='option_dish_five'>
                <div className='food_example_five'></div>
                <div className='text_price_five'></div>
            </div>
            <div className='option_dish_six'>
                <div className='food_example_six'></div>
                <div className='text_price_six'></div>
            </div>
        </div>


    </div>
    
    </>
    )
    
    
    
}