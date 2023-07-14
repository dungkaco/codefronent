import React from "react";
import Link from "next/link";



const WhoWeAre = () => {
  return (
    <section id="about" className="about-area pt-130 pb-130">
      <div className="container wp-content-1">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="about-img wow fadeInLeft" data-wow-delay=".5s">
              <div className="item  gradient-border">
                <div className="wp-text">
                  <p>$1.4T+</p>
                  <p>Trade Volume</p>
                  </div>
              </div>
              
              <div className="item  gradient-border">
              <div className="wp-text">
                  <p>147M+</p>
                  <p>All Time Trades</p>
                  </div>
              </div>
              <div className="item  gradient-border">
              <div className="wp-text">
                  <p>300</p>
                  <p>Integrations</p>
                  </div>
              </div>
              <div className="item  gradient-border">
              <div className="wp-text">
                  <p>4,400+</p>
                  <p>Community Delegates</p>
                  </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="about-content wow fadeInRight" data-wow-delay=".5s">
              <div className="section-title mb-30">
                <h2 className="title text-gradiant">
                  The Zksync <span>1st DEX</span> Platform That Offers Rewards
                </h2>
              </div>
              <p>
              SyncDex is a multichain decentralized digital assets exchange (DEX). 
              Through advanced tooling, deep liquidity, and smooth onboarding, SynSwap offers easy swaps and great tools for projects and traders.
              </p>
              <Link href="/" className="btn">
                Start Trading
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="container wp-content-2">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="about-content  wow fadeInRight" data-wow-delay=".5s">
              <div className="section-title mb-30">
                <span className="sub-title">Earn Crypto</span>
                <h2 className="title title_content text-gradiant">LP Farms or Yield Farming</h2>
                <p>We provides the opportunity for users to earn rewards by staking liquidity provider (LP) tokens in the Yield Farms. The rewards you receive depend on the APR of the Yield Farm you're staking in.</p>
                <img className="start-position" src={"/img/banner/star.png"} alt="" />
              </div>
              <div className="section-content-2">
                <div className="item">
                  <p>15%</p>
                  <p>On Crypto</p>
                </div>
                <div className="item">
                  <p>40%</p>
                  <p>On StableCoins</p>
                </div>
              </div>
             
            </div>
          </div>
          <div className="col-lg-6">
            <div className="about-img wow fadeInLeft" data-wow-delay=".5s">
              <img src={"/img/banner/banner-s1.png"} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
