import React, { useEffect, useState } from 'react';
import SelectSize from '../SelectSize/SelectSize';
import './CartItem.scss';
import { IoMdClose } from 'react-icons/io';

function CartItem({ item, deleteItem, cartIndex, changeTotal }) {
  const [size, setSize] = useState(item.size);
  const [quantity, setQuantity] = useState(item.quantity);

  const [productObject, setProductObject] = useState({ name: item.name, quantity: item.price * quantity });

  const calculateItem = (item) => item.quantity * item.price;

  const changeSubTotal = changeTotal({ name: item.name, quantity: item.price * quantity })

  // useEffect(() => {
  //   onChange(productObject);
  // }, [productObject]);
  
  return (
    <tr onChange={changeSubTotal}>
      <td scope="row">
        <img className="cart-image" src={item.image} alt={item.name} />
      </td>
      <td>{item.name}</td>
      <td>
        <input
          type="number"
          className="product-quantity"
          min="1"
          defaultValue={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />
      </td>
      <td>
        <SelectSize option={size} onChange={setSize} />
      </td>
      <td>{item.price.toFixed(2)}</td>
      <td>{item.price * quantity}</td>
      <td className="delete-section">
        <IoMdClose
          className="delete-btn"
          onClick={() => {
            deleteItem(cartIndex);
          }}
        />
      </td>
    </tr>
  );
}

export default CartItem;
