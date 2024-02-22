import React from 'react'

export default function page({params}) {
    const {sno}= params
  return (
    <div>page : {sno}</div>
  )
}
