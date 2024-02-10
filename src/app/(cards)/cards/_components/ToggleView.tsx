"use client"

import { useSearchParams, useRouter } from "next/navigation";
import { MdGridView, MdOutlineViewHeadline } from "react-icons/md";

export default function ToggleView() {
  const searchParams = useSearchParams()

  const setCurrentView = (view: string) => {
    const params = new URLSearchParams(searchParams.toString())
    params.set("view", view)
    window.history.pushState(null, "", `?${params.toString()}`)
  }

  return (
    <div className="py-2 pr-20">
      {
        searchParams.get("view") == "grid"
          ?
          <div className="flex gap-1">
            <MdOutlineViewHeadline
              className="cursor-pointer transition ease-in-out duration-300 hover:bg-gray-400"
              size={32}
              onClick={() => setCurrentView('list')}
            />
            <MdGridView className="bg-gray-200 cursor-pointer transition ease-in-out duration-300 hover:bg-gray-400" size={32} />
          </div>
          :
          <div className="flex gap-1">
            <MdOutlineViewHeadline
              className="bg-gray-200 cursor-pointer transition ease-in-out duration-300 hover:bg-gray-400" size={32}
            />
            <MdGridView
              className="cursor-pointer transition ease-in-out duration-300 hover:bg-gray-400"
              size={32}
              onClick={() => setCurrentView("grid")}
            />
          </div>
      }
    </div>
  )
}