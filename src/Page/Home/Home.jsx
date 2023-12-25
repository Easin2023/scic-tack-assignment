import Banner from "../../Component/Banner/Banner";
import Footer from "../../Component/Footer/Footer";
import Navbar from "../../Component/NavBar/Navbar";
import Sphoncer from "../../Component/spncer/Sphoncer";
import Extra from '../../Component/Extra/Extra';

const Home = () => {
     return (
          <div>
               <Navbar/>
               <Banner/>
               <Sphoncer/>
               <Extra/>
               <Footer/>
          </div>
     );
};

export default Home;