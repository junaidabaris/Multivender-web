import React from "react";
import Breadcrumb from "../../shared/breadcrumb/Breadcrumb";
import ProducItem from "../home/products/product/ProductItem";
import ProductFilter from "../products-filter/ProductsFilter";
import { HiChevronRight, HiChevronLeft } from "react-icons/hi";
import "./Products.css";
import CollectionFilter from "../collecttion-filter/CollectionFilter";
function Products() {
  return (
    <>
      <Breadcrumb title="Products" />
      <section className="prodcutsSec">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-4 col-sm-12">
              <ProductFilter />
            </div>
            <div className="col-lg-9 col-md-8 col-sm-12">
              <div className="row">
                <div className="col-lg-12">
                  <CollectionFilter />
                  <div className="row changeGrid">
                    <ProducItem />
                  </div>
                  <nav aria-label="Page navigation example ">
                    <ul className="pagination paginationSec">
                      <li className="page-item">
                        <a className="page-link" href="#">
                          <HiChevronLeft />
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link active" href="#">
                          1
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="#">
                          2
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="#">
                          3
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="#">
                          4
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="#">
                          ...
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="#">
                          10
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="#">
                          <HiChevronRight />
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Products;
