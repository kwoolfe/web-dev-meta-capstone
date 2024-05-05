import restaurant_image from "../../Assets/restaurant.jpg"
import restaurant_chef_image from "../../Assets/restaurant chef B.jpg"

import './RestaurantInfo.scss'

function RestaurantInfo (props) {
    return (
        <section className="row" id="info-section">
            <div className="row-content" id="info-row-content">
                <article id="info-left">
                    <h1>Little Lemon</h1>
                    <h2>Chicago</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
                </article>
                <div id="info-right">
                    <img
                        id="info-img-1"
                        src={restaurant_image}
                        alt="The outdoor area at the Little Lemon Restaurant"
                    />
                    <img
                        id="info-img-2"
                        src={restaurant_chef_image}
                        alt="A chef at the Little Lemon Restaurant"
                    />
                </div>
            </div>
        </section>
    )
}

export default RestaurantInfo;