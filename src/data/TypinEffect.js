import React from 'react'
import Typed from "react-typed"

const TypinEffect = () => {
  return (
    <>
        <Typed
      strings={[
        "Sotware Developer", "Instructor", "Health/Safety Engineer", "Planning Advisor"
          ]}
          typeSpeed={150}
          backSpeed={100}
          loop
        />
    </>
  )
}

export default TypinEffect