
const FastLink = () => {
  return (
    <>
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-black">For Renters</h2>
            <p className="mt-2 mb-4 text-black">
              Find your dream rental property. Bookmark properties and contact
              owners.
            </p>
            <a
              href="https://wa.me/+6285245460805"
              className="inline-block bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-700"
            >
              Browse Properties
            </a>
            </div>

        <div className="bg-blue-100 p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-black">For Property Owners</h2>
            <p className="mt-2 mb-4 text-black">
              FList your properties and reach potential tenants. Rent as an airbnb or long term.
            </p>
            <a
              href="/properties.html"
              className="inline-block bg-blue-500 text-white rounded-lg px-4 py-2 hover:bg-blue-700"
            >
              Add Property
            </a>
            </div>
    </>
  )
}

export default FastLink