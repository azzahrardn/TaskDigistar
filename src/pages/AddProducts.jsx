import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./cycle.module.css"; // Import the CSS module

function AddProduct() {
  const [form, setForm] = useState({
    title: "",
    description: "",
    price: 0,
    brand: "",
    sku: "",
    weight: 0,
  });

  const navigate = useNavigate();

  // Event handler untuk meng-update form saat input berubah
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  // Event handler untuk submit form
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Product Data:", form);

    // Redirect ke halaman products setelah submit
    navigate("/products");
  };

  return (
    <div className={styles.formContainer}>
      <h1 className={styles.heading}>Add New Product</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Title:
            <input
              type="text"
              name="title"
              value={form.title}
              onChange={handleChange}
              required
            />
          </label>
        </div>

        <div>
          <label>
            Description:
            <input
              type="text"
              name="description"
              value={form.description}
              onChange={handleChange}
              required
            />
          </label>
        </div>

        <div>
          <label>
            Price:
            <input
              type="number"
              name="price"
              value={form.price}
              onChange={handleChange}
              required
            />
          </label>
        </div>

        <div>
          <label>
            Brand:
            <input
              type="text"
              name="brand"
              value={form.brand}
              onChange={handleChange}
              required
            />
          </label>
        </div>

        <div>
          <label>
            SKU:
            <input
              type="text"
              name="sku"
              value={form.sku}
              onChange={handleChange}
              required
            />
          </label>
        </div>

        <div>
          <label>
            Weight:
            <input
              type="number"
              name="weight"
              value={form.weight}
              onChange={handleChange}
              required
            />
          </label>
        </div>

        <div className={styles.buttonContainer}>
          <button type="submit">Create Product</button>
        </div>
      </form>
    </div>
  );
}

export default AddProduct;
