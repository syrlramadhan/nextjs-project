import { faBath, faBed, faLocationDot, faMoneyBill, faRulerCombined } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Feature = () => {
  return (
    <div className="bg-white rounded-xl shadow-md relative flex flex-col md:flex-row">
      <img
        src="images/properties/3.png"
        alt=""
        className="object-cover rounded-t-xl md:rounded-tr-none md:rounded-l-xl w-full md:w-2/5"
      />
      <div className="p-6">
        <h3 className="text-xl font-bold text-black">Fauzan</h3>
        <div className="text-gray-600 mb-4">Condo</div>
        <h3 className="absolute top-[10px] left-[10px] bg-white px-4 py-2 rounded-lg text-blue-500 font-bold text-right md:text-center lg:text-right">
          $2,500/wk
        </h3>
        <div className="flex justify-center gap-4 text-gray-500 mb-4">
          <p>
            <FontAwesomeIcon icon={faBed} size={16} className='h-4'/>
            4
            <span className="md:hidden lg:inline">Beds</span>
          </p>
          <p>
            <FontAwesomeIcon icon={faBath} size={16} className='h-4' />
            3
            <span className="md:hidden lg:inline">Baths</span>
          </p>
          <p>
            <FontAwesomeIcon icon={faRulerCombined} className='h-4' />
            2,800
            <span className="md:hidden lg:inline">sqft</span>
          </p>
        </div>

        <div className="flex justify-center gap-4 text-green-900 text-sm mb-4">
          <p>
            <FontAwesomeIcon icon={faMoneyBill} size={16} className='h-4' />
            Nightly
          </p>
          <p>
            <FontAwesomeIcon icon={faMoneyBill} size={16} className='h-4' />
            Weekly
          </p>
        </div>

        <div className="border border-gray-200 mb-5"></div>

        <div className="flex flex-col lg:flex-row justify-between">
          <div className="flex align-middle gap-2 mb-4 lg:mb-0">
            <FontAwesomeIcon icon={faLocationDot} className="h-4 text-orange-700"   />
            <span className="text-orange-700"> Chicago IL </span>
          </div>
          <a
            href="property.html"
            className="h-[36px] bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-center text-sm"
          >
            Details
          </a>
        </div>
      </div>
    </div>

    
  );
};

export default Feature;
