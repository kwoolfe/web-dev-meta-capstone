import './Specials.scss'

function Specials (props) {
    return (
        <section className="row" id="specials-row">
            <div className="row-content" id="specials-row-content">
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
        <article className="special" id={item.name}>
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
                <a>Order online</a>
            </div>
        </article>
    )
}

export default Specials;