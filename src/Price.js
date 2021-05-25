export default function Price(props) {
  const style = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: '6vh 0 12vh 0',
    fontSize: '1.1em',
  }

  function formatedPrice() {
    return Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
    }).format(props.price)
  }

  return (
    <div style={style}>
      <div style={{fontWeight: 'bold',}}>{props.name}</div>
      <div>{formatedPrice()}</div>
    </div>
  )
}
