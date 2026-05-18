import { useState, useEffect } from "react"


function useProductDetails() {
    const [products, setProducts] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      const fetchImage = async () => {
        try {
          const response = await fetch("https://fakestoreapi.com/products", {
            headers: {
              "User-Agent": "shopping-cart-project",
            },
          });

          if (response.status >= 400) {
            throw new Error("Server Error");
          }

          const data = await response.json();
          console.log(data);
          setProducts(data);
        } catch (error) {
          setError(error);
        } finally {
          setLoading(false);
        }
      };

      fetchImage();
    }, []);
    return {products, error, loading}
}

export default useProductDetails