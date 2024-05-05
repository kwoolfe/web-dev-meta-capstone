
import food_hero from "../../Assets/restauranfood.jpg"
import './CallToAction.scss'

function CallToAction() {
    return (
        <section id="hero-section">
        <div className="row" id="hero-row">
            <div className="row-content" id="hero-row-content">
                <article id="hero-content-left">
                    <h1 id="hero-title">Little Lemon</h1>
                        <h2 id="hero-subtitle">Chicago</h2>
                        <p>
                            We are a family owned Mediterranean restaurant,
                            focused on traditional recipes served with a modern twist.
                        </p>
                    <button type="button">Reserve a table</button>
                </article>
                <div id="hero-right">
                    <img
                        src={food_hero}
                        alt="A server carrying a tracy of delicious food"
                        width={417}
                    />
                </div>
            </div>
        </div>
        </section>
    )
}

export default CallToAction;