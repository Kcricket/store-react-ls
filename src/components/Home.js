import React from 'react';
import Product from './Product';

class Home extends React.Component {
    constructor(props) {
      super(props);
      
    };  

    render() {
        const listItems = this.props.itemsx.map((element) => 
        <Product key= {element.id} 
            imgx = {element.image} 
            descr = {element.title} 
            idx= {element.id} 
            pricex = {element.price}
            categx = {element.category}
            addToChartXX = {(id)=>this.addToChartX(id)}>
        </Product>)
      return (
        <div className="tm-container">
        {/* Amigo productios baratos */}
        <div className="tm-container bg-white">
            <div className="tm-header-stripe w-100"></div>
            <div className="container-fluid">
                <div className="row tm-mb-1">
                    <div className="col-12">
                        <h2 className="tm-text-primary text-center tm-my-1 tm-mb-5 tm-intro-text">Multiple Image Gallery</h2>
                    </div>
                    <div className="col-12 tm-page-cols-container">
                        <div className="tm-page-col-left">
                            <ul className="tabs clearfix filters-button-group">
                                <li>
                                        <div className="tm-thumbnails">
                                            <img src="img/gallery/gallery-item-01.jpg" alt="Thumbnail" className="tm-thumbnail"/>
                                            <img src="img/gallery/gallery-item-02.jpg" alt="Thumbnail" className="tm-thumbnail"/>
                                            <img src="img/gallery/gallery-item-03.jpg" alt="Thumbnail" className="tm-thumbnail"/>
                                            <img src="img/gallery/gallery-item-04.jpg" alt="Thumbnail" className="tm-thumbnail"/>
                                        </div>
                                        <span className="tm-category-label">Category One</span>
                                </li>
                                <li>
                                        <div className="tm-thumbnails">
                                            <img src="img/gallery/gallery-item-05.jpg" alt="Thumbnail" className="tm-thumbnail"/>
                                            <img src="img/gallery/gallery-item-02.jpg" alt="Thumbnail" className="tm-thumbnail"/>
                                            <img src="img/gallery/gallery-item-09.jpg" alt="Thumbnail" className="tm-thumbnail"/>
                                            <img src="img/gallery/gallery-item-11.jpg" alt="Thumbnail" className="tm-thumbnail"/>
                                        </div>
                                        <span className="tm-category-label">Second Category</span>
                                </li>
                                <li>
                                        <div className="tm-thumbnails">
                                            <img src="img/gallery/gallery-item-10.jpg" alt="Thumbnail" className="tm-thumbnail"/>
                                            <img src="img/gallery/gallery-item-07.jpg" alt="Thumbnail" className="tm-thumbnail"/>
                                            <img src="img/gallery/gallery-item-06.jpg" alt="Thumbnail" className="tm-thumbnail"/>
                                            <img src="img/gallery/gallery-item-04.jpg" alt="Thumbnail" className="tm-thumbnail"/>
                                        </div>
                                        <span className="tm-category-label">Category Three</span>

                                </li>
                            </ul>
                        </div>
                        <div className="tm-page-col-right">
                            <div className="tm-gallery" id="tmGallery">
                                {listItems}
                            </div>
                        </div>
                    </div>
                </div>

            </div> 
        </div> 
        </div>
      );
    }
    addToChartX(id){
        this.props.addToChartX(id);
    }  
}

export default Home;