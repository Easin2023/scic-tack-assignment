import Banner from "../../Component/Banner/Banner";
import Footer from "../../Component/Footer/Footer";
import Navbar from "../../Component/NavBar/Navbar";
import AdditionalSection from "../../Component/additional section/AdditionalSection";
import Sphoncer from "../../Component/spncer/Sphoncer";

const Home = () => {
     return (
          <div>
               <Navbar/>
               <Banner/>
               <Sphoncer/>
               <AdditionalSection/>
               <Footer/>
          </div>
     );
};

export default Home;