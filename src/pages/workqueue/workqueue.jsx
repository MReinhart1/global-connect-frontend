import { useSelector } from "react-redux"
import WorkQueueTable from "./components/table"
import SearchBar from "./components/searchbar"

export default function WorkQueue() {
    const username = useSelector(state => state.user.username)
  return (
    <>
    <div className="grid grid-cols-6">
      <div className="col-start-2 col-span-4">
      <SearchBar/>
      </div>
    </div>
<div className="grid grid-cols-6">
    <div className="col-span-1">
    </div>
    <div className="col-span-4">
      <WorkQueueTable/>
    </div>
    <div className="col-span-1">11</div>
    <div className="col-start-2 row-start-2">12</div>
</div>
</>
  )
}

// border-green-600 border-4"