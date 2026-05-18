import '../styles/card.css'
import { Link } from 'react-router';

function Card({id, title , price, imgUrl}) {

  return (
    <>
      <div className="card">
        <div className="productImg"><img src={imgUrl} alt={title} /></div>
        <div className="productTitle">
          <h1>{title} </h1>
        </div>
        <div className="productPrice">
          <p>Price : ${price}</p>
        </div>
        <div className="detailsBtn">
          <Link to={`/product/${id}`}>
          <button>See product details</button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Card