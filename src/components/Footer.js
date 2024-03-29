import '../styles/Footer.css';

const Footer = () => {
    return (
        <footer className="site-footer">
            <div className="container">
                <div className="info">
                    <div className="col-sm-12 col-md-6 about">
                        <h6>About</h6>
                        <p className="text-justify">POS.com <i>IT WANTS TO BE SIMPLE AND EFFICIENT </i> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>

                    <div className="col-xs-6 col-md-3 category">
                        <h6>Categories</h6>
                        <ul className="footer-links">
                            <li><a href="#">link1</a></li>
                            <li><a href="#">link2</a></li>
                            <li><a href="#">link3</a></li>
                            <li><a href="#">link4</a></li>
                            <li><a href="#">link5</a></li>
                        </ul>
                    </div>

                    <div className="col-xs-6 col-md-3 quick-links">
                        <h6>Quick Links</h6>
                        <ul className="footer-links">
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Contact Us</a></li>
                            <li><a href="#">Contribute</a></li>
                            <li><a href="#">Privacy Policy</a></li>
                            <li><a href="#">Sitemap</a></li>
                        </ul>
                    </div>
                </div>
                <hr />
            </div>
            <div className="container">
                <div className="social-media">
                    <div className="col-md-8 col-sm-6 col-xs-12">
                        <p className="copyright-text">Copyright &copy; 2017 All Rights Reserved by <a href="#">POS</a>.
                        </p>
                    </div>

                    <div className="col-md-4 col-sm-6 col-xs-12">
                        <ul className="social-icons">
                            <li><a className="facebook" href="#"><i className="fa fa-facebook"></i></a></li>
                            <li><a className="twitter" href="#"><i className="fa fa-twitter"></i></a></li>
                            <li><a className="dribbble" href="#"><i className="fa fa-dribbble"></i></a></li>
                            <li><a className="linkedin" href="#"><i className="fa fa-linkedin"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;