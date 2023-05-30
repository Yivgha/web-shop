import { Link } from "react-router-dom";

export const ProductList = ({ products }) => {
  return (
    <div style={{display: "flex", flexWrap: "wrap"}}>
      {products.map((product) => (
        <div key={product.id} style={{marginRight: "15px"}}>
          <Link to={`${product.id}`}>
            <img src="https://via.placeholder.com/200x100" alt="" />
            <h3>{product.name}</h3>
          </Link>
        </div>
      ))}
    </div>
  );
};
