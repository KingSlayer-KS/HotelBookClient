import React from "react"

const Branding = () => {
  const data = [
    {
      id: "01",
      heading: "Reliability",
      desc: "Being a dependable and trustworthy business partner, committed to offering industry-leading products and services",
    },
    {
      id: "02",
      heading: "Integrity",
      desc: "Building productive, longstanding relationships by being truthful and promoting open-communication.",
    },
    {
      id: "03",
      heading: "Committed to excellence",
      desc: "Continuously seeking for higher levels of performance.",
    },
    {
      id: "04",
      heading: "Customer Centricity",
      desc: "Putting the needs of clients first and striving to continuously provide an outstanding level of service... herefore the best way to ensure high standard, safety, value for money and service level is to choose HOLIDAYS as business partner.",
    },
  ]
  return (
    <>
      <section className='Branding'>
        <div className='container grid'>
          {data.map((value) => {
            return (
              <div className='box flex'>
                <div className='text'>
                  <h1>{value.id}</h1>
                </div>
                <div className='para'>
                  <h2>{value.heading}</h2>
                  <p>{value.desc}</p>
                </div>
              </div>
            )
          })}
        </div>
      </section>
    </>
  )
}

export default Branding
