import React ,{useState}from 'react'
// import axios from 'axios'
import {Link} from 'react-router-dom'

import ArraysConstants from '../ArraysConstants'

import SelectOption from './selectInput/SelectOption'
import GalleryItem from './galleryItems/GalleryItem';
import Slider from './propertySlider/Slider';
import SaleSlider from './propertySlider/SaleSlider';
import RentSlider from './propertySlider/RentSlider'
function Homepage() {
  const [activeItem, setActiveItem] = useState(0);
 
  function toggleActive(itemId) {
    setActiveItem(itemId);  
  }

  // const addToCart = async(trenutniId) => {
  //   const korisnik = JSON.parse(localStorage.getItem('user'))
    
  //   const result = await axios.post('https://agencija-za-nekretnine-react.herokuapp.com/addtocart', {korisnik,trenutniId})
    
  //   if(result){
  //     toast('Uspješno dodan artikl u košaricu')
  //     navigate('/cart')
  //   }
  // }
  
  return (
    <div className='container'>
      <div className="landing-container">
        <div className="landing-container-content">
          <ul>
            {ArraysConstants.nav_tabs.map((item,index) => (
                <li key={index}><Link to='/' type="button" className={activeItem === item.id ? 'active':''}
                onClick={() => toggleActive(item.id)} >{item.name}</Link></li>
            ))}
          </ul>
          <h1>Bridging the gap between buying and renting</h1>
          <p>Find what suites you the best</p>

          <Link to='/' className='deals'>Find getaway deals</Link>
         

          <form action="">
              <div className="form">
                <div className="form-group one">
                  <input type="search" placeholder=
                  'Search for house, cottage, apartments etc ...'/>
                </div>

                <div className="form-group two">
                  <SelectOption options={ArraysConstants.select_one}/>
                </div>

                <div className="form-group two">
                  <SelectOption options={ArraysConstants.select_two}/>
                </div>
              
                <div className="form-group three">
                  <button type='button' className='btn-search'>Search</button>
                </div>
              </div>
          </form>
        
        </div>
      </div>

      

      <div className="destinations-container">
          <h1 className='secondary-color'>Trending offers</h1>
          
          <p>Most popular choices for travellers from Bosnia and Herzegovina</p>
          
          <div className='flex-gallery'>
            
            <GalleryItem items={ArraysConstants.galleryitems1}/>
            <GalleryItem items={ArraysConstants.galleryitems2}/>

          </div>
      </div>
      <div className='about-us'>
          <div className='about-inner'>
          <div className="about-brief">
            <h3 className='abouth3'>Find your property <br/> today</h3>
            <Link to=''>Discover properties</Link>
          </div>
          <div className="about-text">
          <h3 className='abouth3'>About us</h3>
              <p>  Thinking of renting or buying a home? You've come to the right place. EstateSelect agents are the right people to help you make the move. If you have any questions about the processes of buying/selling or renting a home or if you need assistance in any way, we can help.</p>
          </div>
          </div>
      </div>
      <div className='property-types'>
          <h1>Browse by property type</h1>
          <Slider totalSlides={ArraysConstants.totalSlides}/>
      </div>
      <div className='for-sale'>
          <h1>For sale</h1>
          <SaleSlider/>
      </div>
    
      <div className='for-rent'>
          <h1>For rent</h1>
          <RentSlider/>
      </div>
    </div>
  )
}

export default Homepage
