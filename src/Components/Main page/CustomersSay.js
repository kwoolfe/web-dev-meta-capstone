import star from "../../Assets/star.png"
import './CustomersSay.scss'

function CustomersSay (props) {
    return (
        <section id="customers-say-section" >
            <div className="row" id="customers-say-row">
                <div className="row-content" id="customers-say-row-content">
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
        <article className="testimonial" id={item.name}>
            <div className="testimonial-body">
                <h4 className="testimonial-title">{item.name}</h4>
                <img 
                    src={require(`../../Assets/${item.picture}`)}
                    alt="Profile picture"
                    width="50px"
                    className="testimonial-profile"
                />
                <p>{item.review}</p>
                <div className="testimonial-stars">
                    {new Array(item.rating).fill('').map(
                        (_, index) => <img 
                            src = {star}
                            id = {index}
                            key = {index}
                            className = "review-star"
                        />
                    )}
                </div>
            </div>
        </article>
    )
}

export default CustomersSay;