import Stylesheet from "reactjs-stylesheet";
import { FaBitcoin } from "react-icons/fa";
import { useState } from "react";

const HomePage = () => {
  
  const [tokesList, setTokenList] = useState([
    {id: 0, name: "Bitcoin", priceInUsd: "80"},
    {id: 1, name: "ETH", priceInUsd: "30"},
    {id: 2, name: "Doge", priceInUsd: "3"}
  ])


  return (
    <div style={styles.container}>
      <section>
        <div style={styles.tokenContainer} >
          <h3 style={{display: 'flex',alignItems: 'center'}}>
            <FaBitcoin />&nbsp; Owned tokes
          </h3>
          <div style={styles.tokenList}>
            {}
          </div>
        </div>
        <main style={styles.content}>
        </main>
      </section>
      <section>
        <div style={styles.graphContainer}>
        </div>
      </section>
    </div>
  )
}

export default HomePage;


const styles = Stylesheet.create({

  container: {
    flex: 1,
  },
  tokenContainer:{
    borderRightWidth: 1,
  },
  tokenList: {
    overflowY: 'scroll',
    scrollbarWidth: 'thin',
  }

})
