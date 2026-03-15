import { Link , Outlet} from "react-router-dom"


const Products = () => {
  return (
    <>
      <h2>Product Page</h2>
      <nav>
        <Link to='phone'>Phone</Link> | 
        <Link to='laptop'>Laptop</Link>
      </nav>

      <Outlet />
    </>
  )
}

export default Products
