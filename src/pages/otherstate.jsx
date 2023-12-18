// import { useState } from "react"
// import { useDispatch, useSelector } from "react-redux"
// import { updateName } from "../state/userSlice"
// import { updatePolicy } from "../state/policySlice"
// import { updateFetch } from "../state/fetchSlice"
// import { useNavigate } from "react-router-dom"
// import client from "../axios/axios"

// export default function OtherState() {
//     const policyInfo = useSelector(state => state.policy.policy)
//     const fetchInfo = useSelector(state => state.fetch.fetchInfo)
//     const [userName, setUsername] = useState("")
//     const [policy, setPolicy] = useState(policyInfo)
//     const [fetch, setFetch] = useState(fetchInfo)
//     const dispatch = useDispatch()
//     const navigate = useNavigate()

//     function handleSubmit(e){
//         e.preventDefault()
//         if (!userName) return;
//         dispatch(updateName(userName))
//         // navigate('/')
//     }

//     function handleSubmitPolicy(e){
//         e.preventDefault()
//         console.log("Policy Submitted")
//         dispatch(updatePolicy(policy))
//     }

//     async function getData(e){
//         e.preventDefault()
//         console.log("Getting Data")
//         let info = await client.get("/random")
//         setFetch({name: info.data.entries[0].Category})
//         console.log(client)
//         console.log(info)

//     }
//     const username = useSelector(state => state.user.username)

//     return (
//       <>
//       <div className="grid grid-cols-4 gap-4">
//         <div className="pl-5">
//         <p>{username}</p>
//         <form onSubmit={handleSubmit}>
//             <input type="text" value={userName} onChange={(e) => setUsername(e.target.value)}></input>
//             <button type="primary"> Submit</button>
//         </form>
//         </div>
//         <div>
//         <h1>{policyInfo.name}</h1>
//         <h2>{policyInfo.number}</h2>
//         <form onSubmit={handleSubmitPolicy}>
//             <input type="text" value={policy.name} onChange={(e) => setPolicy({...policy, name: e.target.value})}></input>
//             <button type="primary"> Submit</button>
//         </form>
//         </div>
//         <div>
//         <form onSubmit={getData}>
//             <button type="primary"> Submit</button>
//         </form>
//         {fetch.name}

//         </div>
//         </div>
//         </>


//     )
//   }
  