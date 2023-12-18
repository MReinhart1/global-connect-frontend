import { useSelector } from "react-redux"

export default function WorkQueueTable() {
    const policyData = [
    {
      "submission_txt" : "Hello1",
      "product_txt" :  "Hello1",
      "policy_id" :  "Hello1",
      "country_id" :  "Hello1",
      "carrier_id" :  "Hello1",
      "carrier_address" :  "Hello1",
      "broker_id" :  "Hello1",
      "broker_address" :  { Value: "Hello1"}
    },
    {
      "submission_txt" : "Hello2",
      "product_txt" :  "Hello2",
      "policy_id" :  "Hello2",
      "country_id" :  "Hello2",
      "carrier_id" :  "Hello2",
      "carrier_address" :  "Hello2",
      "broker_id" :  "Hello2",
      "broker_address" :  { Value: "Hello2"}
      },
    {
      "submission_txt" : "Hello3",
      "product_txt" :  "Hello3",
      "policy_id" :  "Hello3",
      "country_id" :  "Hello3",
      "carrier_id" :  "Hello3",
      "carrier_address" :  "Hello3",
      "broker_id" :  "Hello3",
      "broker_address" :  { Value: "Hello3"}
      }
    ]
  return  (
  <div className="px-4 sm:px-6 lg:px-8 pt-8">
  <div className="sm:flex sm:items-center">
    <div className="sm:flex-auto">
      <h1 className="text-base font-semibold leading-6 text-gray-900">Users</h1>
      <p className="mt-2 text-sm text-gray-700">
        A list of all the users in your account including their name, title, email and role.
      </p>
    </div>
    <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
      <button
        type="button"
        className="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        Add Policy
      </button>
    </div>
  </div>
  <div className="mt-8 flow-root">
    <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div className="inline-block min-w-full py-2 align-middle">
        <table className="min-w-full divide-y divide-gray-300">
          <thead>
            <tr>
              <th
                scope="col"
                className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6 lg:pl-8"
              >
                Effective Date
              </th>
              <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                Insured Name
              </th>
              <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                Policy Type
              </th>
              <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                Product
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 bg-white">
            {policyData.map((policy) => (
              <tr key={policy.submission_txt}>
                <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 lg:pl-8">
                  {policy.submission_txt}
                </td>
                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{policy.submission_txt}</td>
                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{policy.product_txt}</td>
                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{policy.country_id}</td>
                <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6 lg:pr-8">
                  <a href="#" className="text-indigo-600 hover:text-indigo-900">
                    Edit<span className="sr-only">, {policy.broker_id}</span>
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>
)
}
