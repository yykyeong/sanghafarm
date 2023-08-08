import Header from "../componentes/Header";
import Intro from "../componentes/Intro";
import Rule from "../componentes/Rule";
import Campaign from "../componentes/Campaign";
import Product from "../componentes/Product";
import Footer from "../componentes/Footer";
import Main from "../componentes/Main";


function HomeView () {

  return (
    <>
    <Header/>
    <Main>
      <Intro/>
      <Rule/>
      <Campaign/>
      <Product/>
    </Main>
    <Footer/>
    </>
  )
}

export default HomeView;