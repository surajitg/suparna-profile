import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'


const Home: NextPage = () => {
  return (
    <>
      <div id="colorlib-about">
        <div className="container">
          <div className="row text-center">
            <h2 className="bold">About</h2>
          </div>
          <div className="row">
            <div className="col-md-5 animate-box">
              <div className="owl-carousel3">
                <div className="item">
                  <img className="img-responsive about-img" src="images/about-1.jpg" alt="html5 bootstrap template by colorlib.com" />
                </div>
                <div className="item">
                  <img className="img-responsive about-img" src="images/about-2.jpg" alt="html5 bootstrap template by colorlib.com" />
                </div>
              </div>
            </div>
            <div className="col-md-6 col-md-push-1 animate-box">
              <div className="about-desc">
                <div className="owl-carousel3">
                  <div className="item">
                    <h2><span>Hi, I&apos;m</span><span> Suparna</span></h2>
                  </div>
                  <div className="item">
                    <h2><span>I&apos;m a </span><span>Registered Dietitian</span></h2>
                  </div>
                </div>
                <div className="desc">
                  <div className="rotate">
                    <h2 className="heading">About</h2>
                  </div>
                  <p>Learn -  Understand - Win a healthy life</p>
                  <p>I&apos;m a Registered Dietitian and a proud gluten free mother. And I believe that feeding a child or a patient in a healthy way is always nutritionally challanged work. Here you will find easy to follow guidelines , healthy tips , science backed answers to your un answered questions about food and nutrition.
                    I am so happy 😊 to see you here.</p>

                  <p><a href="#colorlib-contact" className="btn btn-primary btn-outline">Contact Me!</a></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="colorlib-contact">
        <div className="container">
          <div className="row text-center">
            <h2 className="bold">Contact</h2>
          </div>
          <div className="row">
            <div className="col-md-12 col-md-offset-0 text-center animate-box intro-heading">
              <span>Contact</span>
              <h2>Contact Me</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="rotate">
                <h2 className="heading">Contact</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 col-md-offset-0">
              <div className="row">
                <div className="col-md-4 animate-box">
                  <h3>My Address</h3>
                  <ul className="contact-info">

                    <li><span><i className="icon-phone4"></i></span>+91 889 223 7740</li>
                    <li><span><i className="icon-envelope2"></i></span><a href="mailto:contact@dietitiansuparna.com">contact@dietitiansuparna.com</a></li>
                    <li><span><i className="icon-globe3"></i></span><a href="#">www.dietitiansuparna.com</a></li>
                  </ul>
                </div>
                <div className="col-md-7 col-md-push-1 animate-box">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="form-group">
                        <textarea name="mailContent" className="form-control" id="mailContent" placeholder="Message"></textarea>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <input type="text" name="fromName" id="fromName" className="form-control" placeholder="Name" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <input type="email" name="fromEmail" id="fromEmail" className="form-control" placeholder="Email" />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <input type="button" value="Send Message" className="btn btn-primary" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Home
