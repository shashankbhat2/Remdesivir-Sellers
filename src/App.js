import DataComponent from "./Components/DataComponent";
import logo from './Assets/logo.svg';
import './Assets/styles.css'
import { Container } from "@chakra-ui/react"
import Info from "./Components/Info";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
     <Container maxW="container.xl">
        <img src={logo} className="logo" alt="Remdesivir Sellers in your State"></img>
        <p className="info-text">List of Distributors of Remdesivir Antiviral Drug in Each State</p>
        <DataComponent></DataComponent>
        <Info></Info>
        <Footer></Footer>
     </Container>
    </div>
  );
}

export default App;
