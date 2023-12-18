import { useSelector } from "react-redux"
import { useState } from "react"

export default function WorkQueueCountrySelection() {
    const username = useSelector(state => state.user.username)

    const [policyData, setPolicyData] = useState([    
    { name: 'Canada', current: true },
    { name: 'Germany', current: false },
    { name: 'Spain', current: false }])

    function classNames(...classes) {
      return classes.filter(Boolean).join(' ')
    }

    function handleClick(item){

        let policy = [    
            { name: 'Canada', current: false },
            { name: 'Germany', current: false },
            { name: 'Spain', current: false }]
        for(let i = 0; i < policy.length; i++){
            if (policy[i].name == item.name){
                policy[i].current = true
            }
        }
        console.log(item, policy)
        setPolicyData(policy)
    }

    // border-yellow-600 border-4
  return (
    <nav className="text-center" aria-label="Sidebar">
      <ul role="list" className="">
        {policyData.map((item) => (
          <li key={item.name} className="hover:text-indigo-600 hover:bg-gray-50">
            <button
              onClick={() => handleClick(item)}
              className={classNames(
                item.current ? 'text-indigo-600' : 
                'text-gray-700',
                'pb-4 pt-2 font-semibold'
              )}
            >
              {item.name}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  )
}
