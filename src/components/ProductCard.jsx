export default function ProductCard(props) {
    return (
        <article className="card">
        <header className="card-header">
            <h2 className="card-title">{props.title}</h2>
            {props.badge && <span className="card-badge">{props.badge}</span>}
        </header>
        <img className="card-image" src={props.image} alt={props.title} />
        <h2>{props.brand}</h2>
        <div className="card-body">
            <p className="card-description">{props.description}</p>
            <div className="card-rate"><p className="card-price">${props.price.toFixed(2)}</p> <div>Rating<span>{props.rating}</span></div></div>
        </div>
        <button className="card-button" onClick={props.onAddToCart}>
            Add to cart
        </button>
        </article>
    );
}