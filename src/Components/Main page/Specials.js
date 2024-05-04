import './Specials.scss'

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
                src={require(`../../Assets/${item.image}`)}
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

export default Specials;