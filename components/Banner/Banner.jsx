import React from "react";
import CountDownOne from "../CountDown/CountDownOne";
import Link from "next/link";

const Banner = () => {
  return (
    <section className="banner-area banner-bg">
       

      {/* <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="banner-content text-center">
              <img src={"/img/icon/fire.png"} alt="" />
              <h2 className="title">
                Join Future of Algorithmic <span>Crypto</span> Trading
                Strategies
              </h2>
            </div>
            <div className="banner-progress-wrap">
              <ul>
                <li>Pre Sell</li>
                <li>Soft Cap</li>
                <li>Bonus</li>
              </ul>
              <div className="progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{ width: "75%" }}
                  aria-valuenow="75"
                  aria-valuemin="0"
                  aria-valuemax="100"
                />
              </div>
              <h4 className="title">
                65% target raised <span>1 ETH = $1000 = 3177.38 CIC</span>
              </h4>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-xl-10">
            <div className="banner-countdown-wrap text-center">
              <h2 className="title">ICO Will Start In..</h2>

              <CountDownOne />
            </div>
          </div>
        </div>
      </div> */}
      <div className="container">
        <div className="row align-items-center">
          
          <div className="col-lg-6">
            <div>
              <div className="section-title mb-30 wow fadeInUp" data-wow-delay="1s">
                <h2 className="title">
               <span>SyncDex </span> 
               <span>is an smart trade</span>
               <span>DEX</span>  
                </h2>
              </div>
              
              <p className="wow fadeInUp" data-wow-delay="1s">We have built to support the zksync ecosystem  with the most advanced decentralized exchange.
              </p>
              <Link href="/" className="btn wow fadeInUp"  data-wow-delay=".8s">
                Trade Now
              </Link>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="about-img wow fadeInRight" data-wow-delay=".5s">
             <div className="banner-shape-wrap">
                <img
                  src={"/img/banner/banner_shape01.png"}
                  alt=""
                  className="img-one"
                />
                <img
                  src={"/img/banner/banner_shape02.png"}
                  alt=""
                  className="img-two"
                />
                <img
                  src={"/img/banner/banner_shape03.png"}
                  alt=""
                  className="img-three"
                />
            </div> 
              <img
                src={"/img/banner/img-top-right.png"}
                alt=""

              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
