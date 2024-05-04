import star from "../../Assets/star.png"
import './CustomersSay.scss'

function CustomersSay (props) {
    return (
        <section id="customers-say-section" >
            <div class="row" id="customers-say-row">
                <div class="row-content" id="customers-say-row-content">
                    <h1>Testimonials</h1>
                    <div id="testimonials-section">
                        {props.data.map(
                            (testimonial) => CustomerCard(testimonial)
                        )}
                    </div>
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
                    src={require(`../../Assets/${item.picture}`)}
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

export default CustomersSay;