import Link from 'next/link'
const Home = (prop) => {
  return (
  <div>
  
    <h1>Shopping Mall</h1>
    <h2>{prop.message}</h2>
    <Link href="/product">
      <a>Product Page</a></Link>
  </div>
  )
}
export default Home