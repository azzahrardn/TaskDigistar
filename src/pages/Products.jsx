import { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // Tambahkan import Link
import styles from "./cycle.module.css"; 

function Products() {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [params, setParams] = useState({
    limit: 9,
    skip: 0,
  });

  // Fetch products when component mounts or params change
  useEffect(() => {
    const fetchProducts = async () => {
      const { limit = 10, skip = 0 } = params;
      try {
        setLoading(true);
        const response = await fetch(
          `https://dummyjson.com/products?limit=${limit}&skip=${skip}`
        );
        const data = await response.json(); // Parse the response as JSON
        setProducts(data.products);
      } catch (error) {
        console.log("error > ", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [params]);

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Products</h1>
      <div className={styles.createButton}>
        {/* Navigasi ke halaman tambah produk */}
        <Link to="/products/add">
          <button className={styles.createProductButton}>Create New Product</button>
        </Link>
      </div>
      <div>
        {loading ? (
          "loading..."
        ) : (
          <div className={styles.productsContainer}>
            {products?.map((item, idx) => (
              <div key={idx} className={styles.productsItem}>
                <img
                  className={styles.productsItemCover}
                  src={item.images?.[0]}
                  alt={`product-cover-${idx}`}
                />
                <span>{item.title}</span>
              </div>
            ))}
          </div>
        )}
      </div>
      <div className={styles.paginationContainer}>
        <button
          type="button"
          onClick={() =>
            setParams((prevParams) => ({
              ...prevParams,
              skip: Math.max(prevParams.skip - 9, 0),
            }))
          }
        >
          Prev
        </button>
        <button
          type="button"
          onClick={() =>
            setParams((prevParams) => ({
              ...prevParams,
              skip: prevParams.skip + 9,
            }))
          }
        >
          Next
        </button>
        <button
          type="button"
          onClick={() => window.history.back()}
          className={styles.backButton}
        >
          Back
        </button>
      </div>
    </div>
  );
}

export default Products;
