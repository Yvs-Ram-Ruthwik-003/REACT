import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Games from './Games.jsx'

function App() {
    return(
      <>
        <Header></Header> {/*<Header /> --> short way to write it.*/}
        <Games></Games>
        <Games></Games> {/*in reat we can use the same component multiple times in the same page.*/}
        <Footer></Footer>  {/*<Footer /> --> short way to write it.*/}
        
      </>
    )
}

export default App