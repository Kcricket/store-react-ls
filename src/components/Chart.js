import React from 'react';
import ChartProduct from './ChartProduct';
class Chart extends React.Component {
    constructor(props) {
      super(props);

    };  
    render() {
        const chart = this.props.chartx.map((element) => 
        <ChartProduct key= {element.id} 
            imgx = {element.image} 
            descr = {element.title} 
            numberx={element.number} 
            pricex={element.price}
            idx= {element.id} 
            removeItemXX = {(id)=>this.removeItemX(id)}
            handleChangeXX = {(id, number)=>this.handleChangeX(id, number)}>
        </ChartProduct>)
        return (
            <div className="tm-container">
                <h1>Shopping Cart</h1>
                <div className="shopping-cart">
                    <div className="column-labels">
                        <label className="product-image">Image</label>
                        <label className="product-details">Product</label>
                        <label className="product-price">Price</label>
                        <label className="product-quantity">Quantity</label>
                        <label className="product-removal">Remove</label>
                        <label className="product-line-price">Total</label>
                    </div>

                    {/* HERE IS THE LIST WITH ALL THE ChartProduct COMPONENTS */}
                    {chart}
                    
                    <div className="totals">
                        <div className="totals-item totals-item-total">
                            <label>Grand Total</label>
                            <div className="totals-value" id="cart-total">{this.sumAllPrices()}</div>
                        </div>
                    </div>
                    <button className="checkout">Checkout</button>
                </div>
            </div>
        );
    }
    /////// LOCAL METHODS ///////
    sumAllPrices(){
        let finalPrice = 0;
        this.props.chartx.forEach(element => {
            finalPrice += parseInt(element.price)*parseInt(element.number)
        });
        return finalPrice
    }

    ////// METHODS TO PASS TO CHILD ///////
    removeItemX(id){
        this.props.removeItemX(id);
    }

    handleChangeX(id, number){
        this.props.handleChangeX(id, number);
    }
}
  export default Chart