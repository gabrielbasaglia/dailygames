"use client"

import { useRouter } from "next/navigation"
import { FormEvent, useState } from "react"
import {BsSearch} from "react-icons/bs"


export function Input() {
  const [search, setSearch] = useState("")
  const router = useRouter()

  function handleSearch(e: FormEvent) {
    e.preventDefault();
    
    if (search === "") 
      return

    router.push(`game/search/${search}`)
    
    
  }
  return (
    <form onSubmit={handleSearch} className="w-full bg-slate-200 my-5 flex gap-2 items-center justify-between rounded-lg p-2">
    
      <input
      type="text"
      className="bg-slate-200 outline-none w-11/12"
      placeholder="Digite o nome do jogo"
      onChange={(e) => setSearch(e.target.value)}
      />
      <button type="submit">
        <BsSearch size={24} />
      </button>

    </form>
  )
}