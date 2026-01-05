import React, { useState, useRef, useEffect } from 'react'
import { User, ChevronDown, LogOut, Settings } from 'lucide-react'

export default function Topcontainer({ userName = 'Abhishek' }) {
  const [open, setOpen] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    function onDoc(e) {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false)
    }
    document.addEventListener('click', onDoc)
    return () => document.removeEventListener('click', onDoc)
  }, [])

  return (
    <div className="relative z-10 flex justify-end items-center px-6 py-4">
      <div ref={ref} className="relative">
        <button onClick={() => setOpen(s => !s)} className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-[#1f1f1f] transition-colors">
          <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center">
            <User className="w-5 h-5" />
          </div>
          <span className="text-sm text-gray-300">{userName}</span>
          <ChevronDown className="w-4 h-4 text-gray-400" />
        </button>

        {open && (
          <div className="absolute right-0 mt-2 w-40 bg-[#111111] border border-[#1f1f1f] rounded-md shadow-lg py-2 text-sm">
            <button className="w-full text-left px-3 py-2 hover:bg-[#1f1f1f] flex items-center gap-2"><User size={14} /> Profile</button>
            <button className="w-full text-left px-3 py-2 hover:bg-[#1f1f1f] flex items-center gap-2"><Settings size={14} /> Settings</button>
            <div className="border-t border-[#1f1f1f] my-1" />
            <button className="w-full text-left px-3 py-2 hover:bg-[#1f1f1f] flex items-center gap-2"><LogOut size={14} /> Logout</button>
          </div>
        )}
      </div>
    </div>
  )
} 
