import { Fragment, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import ProductListPage from './pages/productList'
import SingleProductPage from './pages/singleProduct'
import CartListPage from './pages/cartList'

function App() {

  return (
    <Fragment>
      <Routes>
        <Route path='/products' element={<ProductListPage />} />
        <Route path='/products-details/:id' element={ <SingleProductPage /> }/>
        <Route path='/cart' element={ <CartListPage /> }/>
      </Routes>
    </Fragment>
  )
}

export default App
