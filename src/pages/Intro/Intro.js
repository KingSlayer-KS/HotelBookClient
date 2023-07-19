import React from 'react'
import About from './About'
import Branding from './Branding'

import './styles.css'

const WhyUs = () => {


  const dataOne = [
    { id: 1,
      title: "Who I Am And What I Do",
      desc1: "HOLIDAYS & Resort India Pvt Ltd (HRIPL), launched in 2012. We provide Decade of vacation ownership. HRIPL is part of the hospitality sector of the Holiday group, a Indian multinational spanning sectors of hotels & resorts.",
      desc2: "We stand for reliability, Integrity, commitement & customer centricity, a philosophy that's helped us become one of India's largest resort brand within short span.",
      // cover: "./assets/image1.jpg",
    },
  ]

  const dataTwo = [
    { id: 2,
      title: 'WHAT WE OFFER',
      desc1: 'We offer our clients Holiday ownership. Yes you heard it right, not membership or package we offer ownership. What do you mean by ownership?',
      desc2: 'Holiday ownership is a very simple concept, which lets you buy a week' + 's' + 'holiday home for a fixed number of years or forever, Effectively you own a share of the development and therefore you only pay for the upkeep of what you actually And because the overall cost of the developments split across all the owners, a higher quality of amenities and  tumhingbecome affortable.',
      desc3: ' Your costs are the once only payment for the weeks which you purchase and an annual  Swimmingpool  The concept of holiday now been operating  successfully for almost 30 years     maintenance fee which covers your share of the upkeep of your accommodation plus any common areas such as the This charge will usually be paid tow management company who will be responsible for the day to day running and maintenance of the development Holiday one ship complexes are built by developers. While the development is still being sold the powers will usually be protected by a recognized legal structure' 
    }   
  ]

  const dataThree = [
    
      { id: 3,
        title: 'WHAT WE DO',
        desc1: 'Life is joumey and some of its best moments are those we experience with our loved ones. At HOLIDAYS we take you on a wonder journey infused with incredible experience and unforgettable memories. Where you can roam, lough fasting dance and the greatest moment of your life.',
        desc2: 'In our company we know better than anyone else the boundaries, the stands the needs and was of our clients and we transform this knowledge into holidays being meticulously crafted for them.',
        desc3: 'Our dedication to our clients is absolute and is reflected by the repetitive members we have all these years from these markets and their comments about our services. With our staff' + 's' + ' ' + 'first hand knowledge and expertise we will creste for your clients a perfect holiday experience.' 
      } 
    
  ]


  return (
    <>
    <About data={dataOne}/>
    <Branding />
    <About data={dataTwo} />
    <About data={dataThree} />

    </>
  )
}

export default WhyUs