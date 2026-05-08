import React from 'react'
import Navbar from './components/Navbar'
import RecordList from './components/RecordList'

export default function App(){
  return (
    <div className="container p-6">
      <Navbar />
      <h1 className="text-2xl font-semibold mt-4">Records</h1>
      <RecordList />
    </div>
  )
}
