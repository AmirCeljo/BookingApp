const nav_tabs = [
    {name:'Offers', id:0},
    {name:'Types', id:1},
    {name:'About', id:2},
    {name:'Contact', id:3}

]


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
  const totalSlides = [
    {type:'totalSlides',text: 'Houses', number:'21,147',class:'house'},
    {type:'totalSlides',text: 'Flats', number:'113,243',class:'flat'},
    {type:'totalSlides',text: 'Cottages', number:'5,178',class:'cottage'},
    {type:'totalSlides',text: 'Apartments', number:'67,934',class:'apartment'}
  ];  
 

  export default {
    nav_tabs,
    select_one,
    select_two,
    galleryitems1,
    galleryitems2,
    totalSlides
  }