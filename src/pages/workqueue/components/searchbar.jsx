import { Popover } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
export default function SearchBar() {
    return (
        <>

      <div className="pb-8">
      <label htmlFor="text" className="block pt-4 text-sm font-medium leading-6 text-gray-900">
          Search
        </label>
        <div className="mt-2">
          <input
            type="text"
            name="text"
            id="text"
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            placeholder="policy"
          />
        </div>
      </div>
      </>
    )
  }