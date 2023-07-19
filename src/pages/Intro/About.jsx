import React from "react"


const About = (props) => {

  console.log(props.data[0].id)

  return (
    <>
      <section className='about topMarign'>
        {props.data[0].id === 2 && <div  className='container flex reversed' >
          {props.data.map((value) => {
            return (
              <>
                <div className='left mtop'>
                  <div className='heading'>
                    <h3>Introduction</h3>
                    <h1>{value.title}</h1>
                  </div>

                  <p>{value.desc1}</p>
                  <p>{value.desc2}</p>
                  <p>{value.desc3}</p>

                </div>
                <div className='right'>
                  <div className='img about-image-container'>
                      {/* ///////////////////// PLACE ANY IMAGE HERE ////////////////////// */}
                  </div>
                </div>
              </>
            )
          })}
        </div>}

        {props.data[0].id !== 2 && <div className='container flex'>
          {props.data.map((value) => {
            return (
              <>
                <div className='left mtop'>
                  <div className='heading'>
                    <h3>Introduction</h3>
                    <h1>{value.title}</h1>
                  </div>

                  <p>{value.desc1}</p>
                  <p>{value.desc2}</p>
                  <p>{value.desc3}</p>

                </div>
                <div className='right'>
                  <div className='img about-image-container'>
                    
                  </div>
                </div>
              </>
            )
          })}
        </div>}
      </section>
    </>
  )
}

export default About
