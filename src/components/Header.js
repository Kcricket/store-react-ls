import { Link } from "react-router-dom";

function Header(props){
    return(
    <div>
        <div className="tm-site-header"></div> 
            <div className="tm-site-header-overlay">
            <div className="tm-header-stripe ml-auto"></div>
                <div className="tm-header-stripe tm-header-stripe-short ml-auto"></div>
                <div className="container-fluid">
                    <div className="row">
                    <div className="col-lg-4 tm-site-header-left">
                        <h1 className="text-uppercase tm-site-name">Real Dynamic</h1>
                        <p className="text-white mb-0 tm-site-desc">New Fluid HTML Template</p>
                    </div>
                    <div className="col-lg-8 tm-site-header-right">
                    <nav className="navbar navbar-expand-lg">
                    {/* <button className="navbar-toggler toggler-example" type="button" data-toggle="collapse"
                        data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                        aria-label="Toggle navigation"><span className="dark-blue-text"><i className="fas fa-bars text-white"></i></span></button> */}

                        <div className="collapse navbar-collapse tm-nav" id="navbarNav">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <Link to="/" className="a">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="chart" className="a">Cart</Link>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div> 
            </div> 
        </div> 
    </div> 
    <div className="tm-header-stripe w-100">
    </div>
    </div>
    );
}
export default Header;