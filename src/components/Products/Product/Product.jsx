import React from "react";
import { useNavigate } from "react-router-dom";
import "./Product.scss";

const Product = ({ data, id }) => {
    const navigate = useNavigate();
    return (
        <div
            className="product-card"
            onClick={() => navigate("/product/" + id)}
        >
            <div className="thumbnail">
            <img
    src={
        data.image && // Verificăm dacă există data.image
        data.image.data && // Verificăm dacă există data.image.data
        data.image.data.length > 0 && // Verificăm dacă data.image.data are elemente
        data.image.data[0].attributes.url // Accesăm URL-ul dacă este disponibil
            ? process.env.REACT_APP_STRIPE_APP_DEV_URL + data.image.data[0].attributes.url
            : '' // Gestionăm cazurile în care URL-ul nu există
    }
/>


            </div>
            <div className="prod-details">
                <span className="name">{data.title}</span>
                <span className="price">{data.price}lei</span>
            </div>
        </div>
    );
};

export default Product;