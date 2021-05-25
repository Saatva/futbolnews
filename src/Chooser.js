import React from 'react'
import './Chooser.css';
import Image from './Image.js'
import Price from './Price.js'

export default class Chooser extends React.Component {
  constructor(props) {
    super(props)
    // default the selection to the first option
    this.state = {selected: Object.keys(props.mattresses)[0]}
  }

  setSelected(key) {
    this.setState({selected: key})
  }

  selected() {
    return this.props.mattresses[this.state.selected]
  }

  render() {
    let selectedMattress = this.selected()

    return (
      <div className="Chooser">
        <Image src={`img/${selectedMattress.imageFileName}`} />
        <div className="Chooser-RightPane">
          <div className="Chooser-RightPane-Header">
            Choose Your Mattress
          </div>
          <div className="Chooser-Button-Header">
            Select Mattress Type
          </div>
          <div className="Chooser-ButtonGroup">
            {Object.entries(this.props.mattresses).map(entry => {
              const key = entry[0]
              const mattress = entry[1]

              return (
                <input
                  type="button"
                  className="Chooser-Button"
                  disabled={`${key === this.state.selected ? 'disabled' : ''}`}
                  value={mattress.name}
                  onClick={_=> this.setSelected(key)}
                  key={key}
                />
              )
            })}
          </div>
          <Price {...selectedMattress} name={`${selectedMattress.name} Mattress`} />

          <div>
            <input
              type="button"
              className="Chooser-AddToCartButton"
              value="Add to Cart"
              onClick={_=> this.props.addToCart(selectedMattress)}
            />
          </div>
        </div>
      </div>
    )
  }
}
