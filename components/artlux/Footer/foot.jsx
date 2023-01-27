import React from "react";
import { AiOutlineTwitter } from 'react-icons/ai';
import { FaTelegramPlane } from 'react-icons/fa';
import { BsInstagram, BsYoutube, BsMedium } from 'react-icons/bs';

const foot = () => {
  return (
    <footer id="footer">
      <div className="cta-section">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="cta-content text-center">
                <h2>Stay in the loop</h2>
                <form action="">
                  <input
                    className="form-control"
                    type="email"
                    placeholder="Your Email"
                  />
                  <button className="btn btn-primary" type="submit">
                    Sign Up
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-section text-white">
        <div className="container">
          <div className="row">
            <div className="col-xl-4">
              <div className="footer-about">
                <img src="/images/footer-logo.png" alt="" />
                <p>
                Create, sell and collect rare digital arts on Artlux NFT marketplace. Play and earn with your NFTs on the Artlux NFT lottery platform.
                </p>
              </div>
            </div>
            <div className="col-xl-2 col-lg-3 col-sm-6">
              <div className="footer-widget">
                <h3>About Us</h3>
                <ul>
                  <li>
                    <a href="/category/art">Whitepaper</a>
                  </li>
                  <li>
                    <a href="/category/collectibles">Tokenomics</a>
                  </li>
                  <li>
                    <a href="/category/domain-names">DOXX KYC</a>
                  </li>
                  <li>
                    <a href="/category/art">Audit</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-2 col-lg-3 col-sm-6">
              <div className="footer-widget">
                <h3>Products</h3>
                <ul>
                  <li>
                    <a href="#">Lottery</a>
                  </li>
                  <li>
                    <a href="#">NFT aggregator</a>
                  </li>
                  <li>
                    <a href="#">NFT Marketplace (beta)</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-2 col-lg-3 col-sm-6">
              <div className="footer-widget">
                <h3>Social</h3>
                <div className="social_link">
                  <a target="_blank" rel="noreferrer" href="https://twitter.com/Artlux_io"><AiOutlineTwitter /></a>
                  <a target="_blank" rel="noreferrer" href="https://t.me/artluxio"><FaTelegramPlane /></a>
                  <a target="_blank" rel="noreferrer" href="https://www.instagram.com/artlux_io"><BsInstagram /></a>
                  <a target="_blank" rel="noreferrer" href="https://www.youtube.com/channel/UCQ7JP0DXzRA4u1PJmN3SjiQ"><BsYoutube /></a>
                  <a target="_blank" rel="noreferrer" href="https://medium.com/@nftartlux"><BsMedium /></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="copyright-section text-white">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="copyright-text">
                <p>&copy; 2023 Artlux Inc.</p>
              </div>
            </div>
            <div className="col-md-6 text-end">
              <div className="terms">
                <ul>
                  <li>
                    <a href="#">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="#">Terms of Service</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default foot;
