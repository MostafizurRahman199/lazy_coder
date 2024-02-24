
"use client"
import { useRouter } from 'next/navigation';
import React from 'react'

export default function page({params}) {
 
  const {slug}= params
  
  return (
    <div>
      page : {slug}
      Query: {query}
      
    
    </div>
  )
}
