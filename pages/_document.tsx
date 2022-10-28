import { Html, Head, Main, NextScript } from 'next/document';
import { useEffect } from 'react';

export default function Document() {
    return (
        <Html>
            <Head>

                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <title>Dietitian Suparna</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="description" content="" />
                <meta name="keywords" content="" />
                <meta name="author" content="" />

                <meta property="og:title" content="" />
                <meta property="og:image" content="" />
                <meta property="og:url" content="" />
                <meta property="og:site_name" content="" />
                <meta property="og:description" content="" />
                <meta name="twitter:title" content="" />
                <meta name="twitter:image" content="" />
                <meta name="twitter:url" content="" />
                <meta name="twitter:card" content="" />

                <link rel="shortcut icon" href="favicon.ico" />

                <link href="https://fonts.googleapis.com/css?family=Karla:400,700" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css?family=Playfair+Display:400,400i,700" rel="stylesheet" />

                <link rel="stylesheet" href="css/animate.css" />

                <link rel="stylesheet" href="css/icomoon.css" />

                <link rel="stylesheet" href="css/bootstrap.css" />

                <link rel="stylesheet" href="css/owl.carousel.min.css" />
                <link rel="stylesheet" href="css/owl.theme.default.min.css" />

                <link rel="stylesheet" href="css/magnific-popup.css" />

                <link rel="stylesheet" href="css/style.css" />



                <script src="js/modernizr-2.6.2.min.js" defer></script>
            </Head>
            <body>

                <nav id="colorlib-main-nav" role="navigation">
                    <a href="#" className="js-colorlib-nav-toggle colorlib-nav-toggle active"><i></i></a>
                    <div className="js-fullheight colorlib-table">
                        <div className="colorlib-table-cell js-fullheight">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="form-group">
                                        <input type="text" className="form-control" id="search" placeholder="Enter any key to search..." />
                                        <button type="submit" className="btn btn-primary"><i className="icon-search3"></i></button>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    {/* <ul>
							<li className="active"><a href="index.html">Home</a></li>
							<li><a href="services.html">Services</a></li>
							<li><a href="work.html">Work</a></li>
							<li><a href="blog.html">Blog</a></li>
							<li><a href="about.html">About</a></li>
							<li><a href="contact.html">Contact</a></li>
						</ul> */}
                                </div>
                            </div>
                            {/* <div className="row">
					<div className="col-md-12">
						<h2 className="head-title">Works</h2>
						<a href="images/work-1.jpg" className="gallery image-popup-link text-center" style="background-image: url(images/work-1.jpg);">
							<span><i className="icon-search3"></i></span>
						</a>
						<a href="images/work-2.jpg" className="gallery image-popup-link text-center" style="background-image: url(images/work-2.jpg);">
							<span><i className="icon-search3"></i></span>
						</a>
						<a href="images/work-3.jpg" className="gallery image-popup-link text-center" style="background-image: url(images/work-3.jpg);">
							<span><i className="icon-search3"></i></span>
						</a>
						<a href="images/work-4.jpg" className="gallery image-popup-link text-center" style="background-image: url(images/work-4.jpg);">
							<span><i className="icon-search3"></i></span>
						</a>
					</div>
				</div> */}
                        </div>
                    </div>
                </nav>

                <div id="colorlib-page">
                    <header>
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="colorlib-navbar-brand">
                                        <a className="colorlib-logo" href="index.html"><span>So</span><span>op</span></a>
                                    </div>
                                    <a href="#" className="js-colorlib-nav-toggle colorlib-nav-toggle"><i></i></a>
                                </div>
                            </div>
                        </div>
                    </header>
                    <Main/>



                    <footer>
                        <div id="footer">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-4 col-pb-sm">
                                        <div className="row">
                                            <div className="col-md-10">
                                                <h2>Let&pos;s Talk</h2>
                                                <p>A small river named Duden flows by their place and supplies.</p>
                                                <p><a href="#">noah@info.com</a></p>
                                                <p className="colorlib-social-icons">
                                                    <a href="#"><i className="icon-facebook4"></i></a>
                                                    <a href="#"><i className="icon-twitter3"></i></a>
                                                    <a href="#"><i className="icon-googleplus"></i></a>
                                                    <a href="#"><i className="icon-dribbble2"></i></a>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4 col-pb-sm">
                                    </div>
                                    <div className="col-md-4 col-pb-sm">
                                        <h2>Newsletter</h2>
                                        <p>A small river named Duden flows by their place and supplies it with the necessary regelialia</p>
                                        <div className="subscribe text-center">
                                            <div className="form-group">
                                                <input type="text" className="form-control text-center" placeholder="Enter Email address" />
                                                <input type="submit" value="Subscribe" className="btn btn-primary btn-custom" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12 text-center">
                                        <p>
                                            &copy;
                                            Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | This website is made with <i className="icon-heart4" aria-hidden="true"></i> by <a href="https://colorlib.com">Colorlib</a>

                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </footer>

                </div>


                <script src="js/jquery.min.js" defer></script>

                <script src="js/jquery.easing.1.3.js" defer></script>

                <script src="js/bootstrap.min.js" defer></script>

                <script src="js/jquery.waypoints.min.js" defer></script>

                <script src="js/owl.carousel.min.js" defer></script>

                <script src="js/jquery.magnific-popup.min.js" defer></script>
                <script src="js/magnific-popup-options.js" defer></script>

                <script src="js/main.js" defer></script>

            </body>
        </Html>
    );
}