import React from 'react';
class ChartProduct extends React.Component {
    constructor(props) {
      super(props);
      this.linePrice = parseInt(this.props.pricex)*parseInt(this.props.numberx)
      this.handleChange = this.handleChange.bind(this);
    };  
    render() {
      return (
          <div className="product">
              <div className="product-image">
              <img src={this.props.imgx}/>
              </div>
              <div className="product-details">
              <div className="product-title">Nutro™ Adult Lamb and Rice Dog Food</div>
              <p className="product-description">{this.props.descr}</p>
              </div>
              <div className="product-price">{this.props.pricex}</div>
              <div className="product-quantity">
              <button onClick={()=>this.handleChange(this.props.idx, 1)}>Add^⁻1</button>
              <label>{this.props.numberx}</label>
              <button onClick={()=>this.handleChange(this.props.idx, 2)}>Add</button>
              </div>
              <div className="product-removal">
              <button className="remove-product" onClick={()=>this.removeItem(this.props.idx)}>
                  Remove
              </button>
              </div>
              <div className="product-line-price">{this.linePrice}</div>
          </div>
      );
  }
  removeItem(id){
    this.props.removeItemXX(id);
    //console.log(this.props)
  }
  handleChange(id, number){
    this.props.handleChangeXX(id, number)
  }
}
  export default ChartProduct