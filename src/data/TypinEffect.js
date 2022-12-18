import React from 'react'
import Typed from "react-typed"

const TypinEffect = () => {
  return (
    <h1>
        <Typed
      strings={[
        "Sotware Developer", "Instructor", "Health/Safety Engineer", "Planning Advisor"
          ]}
          typeSpeed={150}
          backSpeed={100}
          loop
        />
    </h1>
  )
}

export default TypinEffect