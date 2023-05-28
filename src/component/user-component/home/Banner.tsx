import React, { useEffect } from 'react'
export default function Banner() {
    useEffect(() => {
        console.log("hello")
    })
  return (
    <div>
        <img src="/assets/images/banner.jpg" alt="" style={{
          height: "30rem"
        }}/>
    </div>
  )
}
