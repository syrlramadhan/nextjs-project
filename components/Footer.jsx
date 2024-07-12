
const Footer = () => {
  return (

    <footer className="bg-gray-200 py-4 mt-auto text-center">
      <div
        className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4"
      >

        <div
          className="flex flex-wrap justify-center md:justify-start mb-4 md:mb-0"
        >
          <ul className="flex space-x-4 text-black">
            <li><a href="/properties.html">Properties</a></li>
            <li><a href="/terms.html">Terms of Service</a></li>
          </ul>
        </div>

      </div>
      <div>
          <p className="text-sm text-gray-500 mt-2 md:mt-0">
            &copy; 2024 MyProperty. All rights reserved.
          </p>
        </div>
    </footer>    

  )
}

export default Footer