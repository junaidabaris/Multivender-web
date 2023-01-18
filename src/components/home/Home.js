import React from 'react'
import Banner from './banner/Banner'
import Brands from './brands/Brands'
import CostInfo from './cost-info/CostInfo'
import Network from './network/Network'
import ProductsCategory from './products-category/ProductsCategory'
import Products from './products/Products'
import ServiceList from './service-list/ServiceList'

function Home() {
  return (
    <>
        <Banner />
        <ServiceList />
        <ProductsCategory />
        <Products />
        <Brands />
        <Network />
        <CostInfo />
    </>
  )
}

export default Home