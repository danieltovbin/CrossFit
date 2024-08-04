import { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import "./style.scss";
import { useCartContext } from "../../context/CartContext";

const Cart = () => {
  const [show, setShow] = useState<boolean>(false);
  const { cart, removeFromCart } = useCartContext();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="cart-container">
      <i onClick={handleShow} className="bi bi-cart"></i>
      <Offcanvas placement="end" show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Cart</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {cart.length === 0 ? (
            <p className="cart-container__para">Your cart is empty..</p>
          ) : (
            cart.map((item, index) => (
              <div className="cart-container__cart" key={index}>
                <div className="left">
                  <img src={item.imgUrl} alt={item.name} />
                  <h5>{item.name}</h5>
                </div>
                <div className="right">
                  <p>{`$${item.price}`}</p>
                  <Button
                    variant="danger"
                    size="sm"
                    onClick={() => removeFromCart(item._id)}
                  >
                    remove
                  </Button>
                </div>
              </div>
            ))
          )}
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
};

export default Cart;
