import axios from "axios";
import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Spinner from "react-bootstrap/Spinner";
import Header from "../../components/Header/Header";
import { useCartContext } from "../../context/CartContext";
import "./style.scss";

const ShopPage = () => {
  const [equipments, setEquipments] = useState<Equipment[]>([]);
  const { addToCart } = useCartContext();
  const [loading, setLoading] = useState<boolean>(true);
  const [added, setAdded] = useState<Record<string, boolean>>({});

  const fetchEquipments = async () => {
    try {
      const response = await axios.get(
        `https://crossfit-server.onrender.com/api/equipments/get`
      );
      setEquipments(response.data);
    } catch (error) {
      console.error("Error fetching equipments", error);
    } finally {
      setLoading(false);
    }
  };

  const handleCartBtn = (equipment: Equipment) => {
    addToCart(equipment);
    setAdded((prev) => ({ ...prev, [equipment._id]: true }));
    setTimeout(() => {
      setAdded((prev) => ({ ...prev, [equipment._id]: false }));
    }, 3000);
  };

  useEffect(() => {
    fetchEquipments();
  }, []);

  return (
    <div className="shop-page">
      <Header />
      <h1>Accessories</h1>
      <div className="products-container">
        {loading ? (
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        ) : equipments.length === 0 ? (
          <p>No equipments found</p>
        ) : (
          equipments.map((equipment) => (
            <Card key={equipment._id}>
              <div className="image-container">
                <Card.Img
                  className="equipment-image"
                  variant="top"
                  src={equipment.imgUrl}
                />
              </div>
              <Card.Body>
                <Card.Title> {equipment.name}</Card.Title>
                <Card.Text>{`$${equipment.price}`}</Card.Text>
                <Button
                  onClick={() => handleCartBtn(equipment)}
                  variant={added[equipment._id] ? "light" : "outline-primary"}
                  disabled={added[equipment._id]}
                >
                  <i
                    className={
                      added[equipment._id] ? "bi bi-check-lg" : "bi bi-cart"
                    }
                  ></i>
                  {added[equipment._id] ? "Added" : "Add To Cart"}
                </Button>
              </Card.Body>
            </Card>
          ))
        )}
      </div>
    </div>
  );
};

export default ShopPage;
