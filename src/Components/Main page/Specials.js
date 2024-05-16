import './Specials.scss'
import { Link } from 'react-router-dom';

function Specials (props) {
    return (
        <section className="row" id="specials-row">
            <div className="row-content" id="specials-row-content">
                <div id="specials-header">
                    <h1>This week's specials</h1>
                    <Link to="/Menu">
                        <button>Online menu</button>
                    </Link>
                </div>
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
        <article className="special" id={item.name} key={item.name}>
            <img
                src={require(`../../Assets/${item.image}`)}
                alt="Food available to order"
                width="100px"
            />
            <div className="card-body">
                <div className="card-header">
                    <h4 className="card-title">{item.name}</h4>
                    <p className="card-price">
                        <span className="highlight">{item.price}</span>
                    </p>
                </div>
                <p className="card-description">{item.description}</p>
                <Link to="/Order">Order online</Link>
            </div>
        </article>
    )
}

export default Specials;