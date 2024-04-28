import food_hero from './Assets/restauranfood.jpg'
import specials from "./Assets/specials.json"
import testimonials from "./Assets/testimonials.json"
import star from "./Assets/star.png"

function Main() {
    return (
        <main>
            <CallToAction/>
            <Specials data={specials}/>
            <CustomersSay data={testimonials}/>
        </main>
    );
}

function CallToAction() {
    return (
        <section id="hero-section">
        <div class="row" id="hero-row">
            <div class="row-content" id="hero-row-content">
                <article id="hero-content-left">
                    <h1 id="hero-title">Little Lemon</h1>
                        <h2 id="hero-subtitle">Chicago</h2>
                        <p>
                            We are a family owned Mediterranean restaurant,
                            focused on traditional recipes served with a modern twist.
                        </p>
                    <button type="button">Reserve a table</button>
                </article>

                <img
                    src={food_hero}
                    alt="A server carrying a tracy of delicious food"
                    width={417}
                />
            </div>
        </div>
        </section>
    )
}

function Specials (props) {
    return (
        <section class="row" id="specials-row">
            <div class="row-content" id="specials-row-content">
                <h1>This week's specials!</h1>
                <div id="specials-section">
                    {props.data.map(
                        (special) => SpecialCard(special)
                    )}
                </div>
            </div>
        </section>
    )
}

function SpecialCard (item) {
    return (
        <article class="special" id={item.name}>
            <img
                src={require(`./Assets/${item.image}`)}
                alt="Food available to order"
                width="100px"
            />
            <div class="card-body">
                <div class="card-header">
                    <h4 class="card-title">{item.name}</h4>
                    <p class="card-price">
                        <span class="highlight">{item.price}</span>
                    </p>
                </div>
                <p class="card-description">{item.description}</p>
                <a>Order online</a>
            </div>
        </article>
    )
}

function CustomersSay (props) {
    return (
        <section class="row" id="customers-say-row">
            <div class="row-content" id="customers-say-row-content">
                <h1>Testimonials</h1>
                <div id="testimonials-section">
                    {props.data.map(
                        (testimonial) => CustomerCard(testimonial)
                    )}
                </div>
            </div>
        </section>
    )
}

function CustomerCard (item) {
    return (
        <article class="testimonial" id={item.name}>
            <div class="testimonial-body">
                <h4 class="testimonial-title">{item.name}</h4>
                <img 
                    src={require(`./Assets/${item.picture}`)}
                    alt="Profile picture"
                    width="50px"
                    class="testimonial-profile"
                />
                <p>{item.review}</p>
                <div class="testimonial-stars">
                    {new Array(item.rating).fill('').map(
                        (_, index) => <img 
                            src = {star}
                            id = {index}
                            class = "review-star"
                        />
                    )}
                </div>
            </div>
        </article>
    )
}

export default Main;