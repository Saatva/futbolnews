import cart from './cart.svg'

export default function Cart(props) {
  return (
    <div>
      <img src={cart} className="Cart-Image" alt="Cart" />
      <span className="Badge" aria-label="items in cart">{props.cart.length}</span>
    </div>
  )
}
