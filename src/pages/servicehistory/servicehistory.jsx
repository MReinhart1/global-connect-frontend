import { useSelector } from "react-redux"

export default function ServiceHistory() {
    const username = useSelector(state => state.user.username)
  return (
    <div className="flex h-screen bg-slate-100 justify-center items-center">
            <h2>{username}</h2>
            <h1>This is the ServiceHistory page</h1>

    </div>
  )
}