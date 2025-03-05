//component
import Footer from "./components/Footer";
import ProductCard from "./components/ProductCard";
import Header from "./components/Header";

//style
import styles from "./App.module.css";
function App() {

  return (
      <div>
        <Header />
         <div className={styles.container}>
            <ProductCard 
              title="Camera"
              img="/images/camera1.webp"
              price="500"
              isDiscount={true}
              quantity={15}
              rate={4.3}
              sp={true}/>
            <ProductCard 
                  title="camera"
                  img="/images/camera2.webp"
                  price="400"
                  isDiscount={true}
                  quantity={15}
                  rate={4}
                  sp={false}/>
            <ProductCard 
                  title="camera"
                  img="/images/camera3.webp"
                  price="350"
                  isDiscount={true}
                  quantity={4}
                  rate={5}
                  sp={false}/>
            <ProductCard 
                  title="camera"
                  img="/images/camera4.webp"
                  price="700"
                  isDiscount={true}
                  quantity={5}
                  rate={4}
                  sp={true}/>
            <ProductCard 
              title="Camera"
              img="/images/camera5.webp"
              price="500"
              isDiscount={false}
              quantity={15}
              rate={4}
              sp={true}/>
            <ProductCard 
              title="Camera"
              img="/images/camera6.webp"
              price="500"
              isDiscount={false}
              quantity={15}
              rate={4}
              sp={false}/>
            <ProductCard 
              title="Camera"
              img="/images/camera7.webp"
              price="500"
              isDiscount={false}
              quantity={5}
              rate={4}
              sp={true}/>
            <ProductCard 
              title="Camera"
              img="/images/camera8.webp"
              price="500"
              isDiscount={false}
              quantity={5}
              rate={4}
              sp={false}/>
         </div>
        <Footer />
      </div>
  )
}

export default App;
