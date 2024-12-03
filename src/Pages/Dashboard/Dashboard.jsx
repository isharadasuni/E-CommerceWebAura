import React from 'react';
import "../Dashboard/dashboard.scss";
import Navbar from '../../Components/Navbar/Navbar';
import ImageSlider from '../../Components/ImageSilder/ImageSilder';
import Her from "../../Components/NewArivals/Her";
import Him from "../../Components/NewArivals/Him";
import  Products from "../../Components/Products/Product";
import Brand from "../../Components/Brand/Brand";
import Contact from '../../Components/Contact/Contact';
import About from '../../Components/About/About';
import Footer from '../../Pages/Footer/Footer';


const Dashboard = () => {


    return (

        <div className="dashboard">
            <div><Navbar /></div>

            <div> <ImageSlider /></div>


            <div id="newArivals" className="newArivals">
                <div className="mainTopic">NEW ARRIVALS</div>
                <div className="subTopic">FOR HER</div>
                <Her/>
        

                <div className="mainTopic">NEW ARRIVALS</div>
                <div className="subTopic">FOR HIM</div>

                <Him/>
            </div>
          
          
            <div id="product" className='product'>
            <div className="mainTopic">  Recommended</div>
            <div className="subTopic">  PRODUCT OF THE WEEK</div>
            <Products/>
            </div>


            <div id="brand" className='brand'>
            <div className="mainTopic">  Choose your </div>
            <div className="subTopic"> BRAND</div>
            <Brand/>
            </div>

            <div id="contact" className='contact'>
            <div className="subTopic">CONTACT</div>
            <Contact/>
            </div>

            <div id="about" className='about'>
            <div className="subTopic"> ABOUT</div>
            <About/>
            </div>

              <div><Footer /></div>

        </div>
    )
}
export default Dashboard;