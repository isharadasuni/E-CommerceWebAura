import React  from 'react';
import "../Dashboard/dashboard.scss";
import Navbar from '../../Components/Navbar/Navbar';
import ImageSlider from '../../Components/ImageSilder/ImageSilder';



const Dashboard = () => {


    return(

       <div className="dashborad"> 
       <Navbar/>
       <ImageSlider/>
       hi dashboard
       
       </div> 
    )
}
export default Dashboard;