import React, { useState } from 'react'
import { apiUrl } from '../api'

export default function ModifyRecord(){
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  async function handleSubmit(e){
    e.preventDefault()
    try{
      await fetch(apiUrl('/records'), {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, description })
      })
      setTitle('')
      setDescription('')
      // naive: reload page to show list
      window.location.reload()
    }catch(e){ console.error(e) }
  }

  return (
    <form onSubmit={handleSubmit} className="mt-4 bg-white p-4 rounded shadow-sm">
      <div className="mb-2">
        <label className="block text-sm">Title</label>
        <input value={title} onChange={e=>setTitle(e.target.value)} className="w-full border p-2 rounded" />
      </div>
      <div className="mb-2">
        <label className="block text-sm">Description</label>
        <textarea value={description} onChange={e=>setDescription(e.target.value)} className="w-full border p-2 rounded" />
      </div>
      <button className="px-3 py-1 bg-blue-600 text-white rounded">Save</button>
    </form>
  )
}
