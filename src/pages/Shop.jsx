import Card from '../components/Card'
import Navbar from '../components/Navbar'
import '../styles/card.css'
import useProductDetails from '../hooks/useProductDetails'

function Shop() {
  const { products, error, loading } = useProductDetails();

  if (loading) return <p>loading...</p>;
  if (error) return <p>has some issue will fix later</p>;

  return (
    <>
      <Navbar />
      <div className="cardContainer grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 p-8 bg-gray-100 min-h-screen">
        {products.map((product) => (
          <Card
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            imgUrl={product.image}
          />
        ))}
      </div>
    </>
  );
}

export default Shop