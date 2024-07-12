"use client";

import { useState, useEffect } from 'react';
import { faBath, faBed, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const RecentsHome = () => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/properties');
        if (!response.ok) {
          throw new Error('Failed to fetch properties');
        }
        const data = await response.json();
        setProperties(data);
      } catch (error) {
        console.error('Error fetching properties:', error);
      }
    };

    fetchProperties();
  }, []);

  return (
    <>
      <section className="px-4 py-6">
        <div className="container-xl lg:container m-auto">
          <h2 className="text-3xl font-bold text-blue-500 mb-6 text-center">
            Properties
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {Array.isArray(properties) && properties.map((property, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md relative">
                <img
                  src={`http://localhost:5000${property.photo}`}
                  alt={property.name}
                  className="object-cover rounded-t-xl"
                />
                <div className="p-4">
                  <div className="text-left md:text-center lg:text-left mb-6">
                    <div className="text-gray-600">{property.type}</div>
                    <h3 className="text-xl font-bold text-black">{property.name}</h3>
                  </div>
                  <h3 className="absolute top-[10px] right-[10px] bg-white px-4 py-2 rounded-lg text-blue-500 font-bold text-right md:text-center lg:text-right">
                    {property.price}
                  </h3>

                  <div className="flex justify-center gap-4 text-gray-500 mb-4">
                    <p>
                      <FontAwesomeIcon icon={faBed} size="sm" className="h-4" /> {property.bedrooms}
                      <span className="md:hidden lg:inline"> Beds</span>
                    </p>
                    <p>
                      <FontAwesomeIcon icon={faBath} size="sm" className="h-4" /> {property.bathrooms}
                      <span className="md:hidden lg:inline"> Baths</span>
                    </p>
                  </div>

                  <div className="border border-gray-100 mb-5"></div>

                  <div className="flex flex-col lg:flex-row justify-between mb-4">
                    <div className="flex align-middle gap-2 mb-4 lg:mb-0">
                      <FontAwesomeIcon icon={faLocationDot} className="h-4 text-orange-700" />
                      <span className="text-orange-700">{property.address}</span>
                    </div>
                    <a
                      href={property.link}
                      className="h-[36px] bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-center text-sm"
                    >
                      Details
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

RecentsHome.useClient = true;

export default RecentsHome;
