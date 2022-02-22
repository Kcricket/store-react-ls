import React from 'react';

class Product extends React.Component {

  constructor(props) {
    super(props);
    
  };  

  render() {
    return (
      <div className="tm-gallery-item category-1 category-3" onClick={()=> this.addToChart(this.props.idx)}>
        <figure className="effect-bubba">
            <img src={this.props.imgx} alt="Gallery item" className="img-fluid" />
            <figcaption>
                <h2>$<span>{this.props.pricex}</span></h2>
                <p>{this.props.descr}</p>
            </figcaption>
        </figure>
      </div> 
    );
      
  }
  addToChart(id){
    this.props.addToChartXX(id);
  }
}

  export default Product