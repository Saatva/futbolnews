import SaatvaLogo from './SaatvaLogo.js'
import Cart from './Cart.js'

export default function PageHeader(props) {
  return (
    <header className="PageHeader">
    <div className="PageHeader-Content">
      <SaatvaLogo />
      <div className="Cart">
        <Cart cart={props.cart} />
      </div>
    </div>
    </header>
  )
}
