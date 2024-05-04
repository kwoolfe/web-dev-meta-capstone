import specials from "../Assets/specials.json"
import testimonials from "../Assets/testimonials.json"

import Specials from './Main page/Specials'
import CallToAction from './Main page/CallToAction'
import RestaurantInfo from './Main page/RestaurantInfo'
import CustomersSay from './Main page/CustomersSay'

function HomePage() {
    return (
        <main>
            <CallToAction/>
            <Specials data={specials}/>
            <CustomersSay data={testimonials}/>
            <RestaurantInfo/>
        </main>
    );
}

export default HomePage;