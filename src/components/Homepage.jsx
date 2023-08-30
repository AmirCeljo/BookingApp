import React from 'react'
import {useState} from 'react'
// import axios from 'axios'
import {Link} from 'react-router-dom'
// import{toast} from 'react-toastify'
// import { FaCircle, FaDotCircle, FaLocationArrow, FaRegDotCircle, FaStar,FaStarHalf, FaStarHalfAlt } from 'react-icons/fa'
// import { use } from 'bcrypt/promises'
import SelectOption from './selectInput/SelectOption'
import GalleryItem from './galleryItems/GalleryItem';
import Slider from './propertySlider/Slider';
function Homepage() {
  // const [products , setProducts] = useState([])
  // const navigate= useNavigate()

  // const user = JSON.parse(localStorage.getItem('user'))

  // useEffect(() => {
  //   const fetchData = async() => {
  //     const result = await axios.get('http://localhost:3001/getProduct')
  //     setProducts(result.data)
  //     console.log(result.data)
  //   }

  //   fetchData()
  // }, [])
 
  // const addToCart = async(trenutniId) => {
  //   const korisnik = JSON.parse(localStorage.getItem('user'))
    
  //   const result = await axios.post('https://agencija-za-nekretnine-react.herokuapp.com/addtocart', {korisnik,trenutniId})
    
  //   if(result){
  //     toast('Uspješno dodan artikl u košaricu')
  //     navigate('/cart')
  //   }
  // }
  const [activeItem, setActiveItem] = useState(0);
  const nav_tabs = [
    {name:'Offers', id:0},
    {name:'Types', id:1},
    {name:'About', id:2},
    {name:'Contact', id:3}

  ]
  function toggleActive(itemId) {
    setActiveItem(itemId);  
  }

  const select_one = [
    {category:'none', text:'Choose a category'},
    {category:'kuća', text:'House'},
    {category:'stan', text:'Flat'},
    {category:'stan', text:'Cottage'},
    {category:'stan', text:'Apartments'}
  ]
  const select_two = [
    {category:'none', text:'Choose a category'},
    {category:'iznajmljivanje', text:'Rent'},
    {category:'prodaja', text:'Buy'},
    
  ]

  const galleryitems1 = [
    {text:'item1',city:'Sarajevo'},
    {text:'item2',city:'Mostar'}

  ]
  const galleryitems2 = [
    {text:'item3',city:'Neum'},
    {text:'item4',city:'Jajce'},
    {text:'item5',city:'Trebinje'},
    
  ]
  

  return (
    <div className='container'>
      <div className="landing-container">
        <div className="landing-container-content">
          <ul>
            {nav_tabs.map((item) => (
                <li><Link to='/' type="button" className={activeItem === item.id ? 'active':''}
                onClick={() => toggleActive(item.id)}>{item.name}</Link></li>
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
                  <SelectOption options={select_one}/>
                </div>

                <div className="form-group two">
                  <SelectOption options={select_two}/>
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
            
            <GalleryItem items={galleryitems1}/>
            <GalleryItem items={galleryitems2}/>

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
          <Slider/>
      </div>

    </div>
  )
}

export default Homepage
