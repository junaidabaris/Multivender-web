import React from "react";
import fertilizer1 from "../../../../assets/img/products/1.jpg";
import fertilizer2 from "../../../../assets/img/products/2.jpg";
import fertilizer3 from "../../../../assets/img/products/3.jpg";
import fertilizer4 from "../../../../assets/img/products/4.jpg";
import fertilizer5 from "../../../../assets/img/products/5.jpg";
import fertilizer6 from "../../../../assets/img/products/6.jpg";
import Rating from "../../../../shared/rating/Rating";
import "./ProductItem.css";
function ProductItem() {
  return (
    <>
      <div className=" col-lg-3 col-md-6 col-sm-12">
        <div className="featuredInfo">
          <div className="featuredFigure">
            <div className="featuredImg">
              <img src={fertilizer4} alt="" />
            </div>
            <ul className="hotList">
              <li>
                <a href="#">hot</a>
              </li>
              <li>
                <a href="#">-20%</a>
              </li>
            </ul>
          </div>
          <div className="featuredContent">
            <h6>category</h6>
            <h5>VANPROZ V-BIND (BIO VIRICIDE)</h5>
            <Rating />
            <div className="rateDigit">
              <span className="cross">ZK59.00</span>
              <span className="currentPrice">ZK49.00</span>
            </div>
            <div className="featuredOption">
              <select name="" id="">
                <option value="Select Option">Select Option</option>
                <option value="one">One</option>
                <option value="two">Two</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div className=" col-lg-3 col-md-6 col-sm-12">
        <div className="featuredInfo">
          <div className="featuredFigure">
            <div className="featuredImg">
              <img src={fertilizer1} alt="" />
            </div>
            <ul className="hotList">
              <li>
                <a href="#">hot</a>
              </li>
              <li>
                <a href="#">-29%</a>
              </li>
            </ul>
          </div>
          <div className="featuredContent">
            <h6>category</h6>
            <h5>MOVENTO 15.31%OD INSECTICIDE</h5>
            <Rating />
            <div className="rateDigit">
              <span className="cross">ZK59.00</span>
              <span className="currentPrice">ZK50.00</span>
            </div>
            <div className="featuredOption">
              <select name="" id="">
                <option value="Select Option">Select Option</option>
                <option value="one">One</option>
                <option value="two">Two</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div className=" col-lg-3 col-md-6 col-sm-12">
        <div className="featuredInfo">
          <div className="featuredFigure">
            <div className="featuredImg">
              <img src={fertilizer2} alt="" />
            </div>
            <ul className="hotList">
              <li>
                <a href="#">hot</a>
              </li>
              <li>
                <a href="#">-24%</a>
              </li>
            </ul>
          </div>
          <div className="featuredContent">
            <h6>category</h6>
            <h5>VANPROZ V-BIND (BIO VIRICIDE)</h5>
            <Rating />
            <div className="rateDigit">
              <span className="cross">ZK59.00</span>
              <span className="currentPrice">ZK35.00</span>
            </div>
            <div className="featuredOption">
              <select name="" id="">
                <option value="Select Option">Select Option</option>
                <option value="one">One</option>
                <option value="two">Two</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div className=" col-lg-3 col-md-6 col-sm-12">
        <div className="featuredInfo">
          <div className="featuredFigure">
            <div className="featuredImg">
              <img src={fertilizer3} alt="" />
            </div>
            <ul className="hotList">
              <li>
                <a href="#">hot</a>
              </li>
              <li>
                <a href="#">-17%</a>
              </li>
            </ul>
          </div>
          <div className="featuredContent">
            <h6>category</h6>
            <h5>MOVENTO 15.31%OD INSECTICIDE</h5>
            <Rating />
            <div className="rateDigit">
              <span className="cross">ZK59.00</span>
              <span className="currentPrice">ZK56.00</span>
            </div>
            <div className="featuredOption">
              <select name="" id="">
                <option value="Select Option">Select Option</option>
                <option value="one">One</option>
                <option value="two">Two</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <div className=" col-lg-3 col-md-6 col-sm-12">
        <div className="featuredInfo">
          <div className="featuredFigure">
            <div className="featuredImg">
              <img src={fertilizer5} alt="" />
            </div>
            <ul className="hotList">
              <li>
                <a href="#">hot</a>
              </li>
              <li>
                <a href="#">-20%</a>
              </li>
            </ul>
          </div>
          <div className="featuredContent">
            <h6>category</h6>
            <h5>VANPROZ V-BIND (BIO VIRICIDE)</h5>
            <Rating />
            <div className="rateDigit">
              <span className="cross">ZK59.00</span>
              <span className="currentPrice">ZK49.00</span>
            </div>
            <div className="featuredOption">
              <select name="" id="">
                <option value="Select Option">Select Option</option>
                <option value="one">One</option>
                <option value="two">Two</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div className=" col-lg-3 col-md-6 col-sm-12">
        <div className="featuredInfo">
          <div className="featuredFigure">
            <div className="featuredImg">
              <img src={fertilizer6} alt="" />
            </div>
            <ul className="hotList">
              <li>
                <a href="#">hot</a>
              </li>
              <li>
                <a href="#">-29%</a>
              </li>
            </ul>
          </div>
          <div className="featuredContent">
            <h6>category</h6>
            <h5>MOVENTO 15.31%OD INSECTICIDE</h5>
            <Rating />
            <div className="rateDigit">
              <span className="cross">ZK59.00</span>
              <span className="currentPrice">ZK50.00</span>
            </div>
            <div className="featuredOption">
              <select name="" id="">
                <option value="Select Option">Select Option</option>
                <option value="one">One</option>
                <option value="two">Two</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductItem;
