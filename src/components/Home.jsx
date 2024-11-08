import Company from "./Company.jsx"
import ImageBox from "./ImageBox.jsx"
import Text from "./Text.jsx"
import Footer from "./Footer.jsx";

// import "./App.css";
const Home = () => {
  return (
    <>
    <div className="main">
      <div className="box-1">
        <h2>We create the best digital Products</h2>
        <p>We design and develop the best apps, customer needs is our priority</p>
        <button className='btn-1'>Start your project </button>
      </div>
      <div className="box-2">
        <img src="https://picsum.photos/300/300?random=1" alt="" />
      </div>
    </div>
      <Company/>
      <Text/>
      <ImageBox/>
      <Footer />
    </>
  )
}

export default Home