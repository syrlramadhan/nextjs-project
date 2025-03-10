import { faBath, faBed, faLocationDot, faRulerCombined } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const properties = [
  {
    type: "Rumah",
    title: "Jual Rumah Mewah Lokasi Strategis Pusat Kota",
    price: "Rp 2.750.000.000",
    imgSrc: "images/properties/8.png",
    beds: 5,
    baths: 6,
    location: "Tamalate, Makassar Kota, Sulawesi Selatan",
    link: "https://www.olx.co.id/item/jual-rumah-mewah-lokasi-strategis-pusat-kota-iid-922022342"
  },
  {
    type: "Rumah",
    title: "Rumah Baru 2 Lantai di Pusat Kota",
    price: "Rp 889.000.000",
    imgSrc: "images/properties/9.png",
    beds: 5,
    baths: 6,
    location: "Tamalate, Makassar Kota, Sulawesi Selatan",
    link: "https://www.olx.co.id/item/rumah-baru-2-lantai-di-pusat-kota-iid-921012393"
  },
  {
    type: "Rumah",
    title: "Butuh dana cepat, dijual rumah tengah kota",
    price: "Rp 18.500.000.000",
    imgSrc: "images/properties/10.png",
    beds: 5,
    baths: 6,
    location: "Panakkukang, Makassar Kota, Sulawesi Selatan",
    link: "https://www.olx.co.id/item/butuh-dana-cepatdijual-rumah-tengah-kota-iid-921469260"
  }
];

const RecentsHome = () => {
  return (
    <>
      <section className="px-4 py-12 bg-gray-50">
        <div className="container-xl lg:container mx-auto">
          <h2 className="text-3xl font-bold text-blue-700 mb-8 text-center">
            Recent Properties
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {properties.map((property, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 overflow-hidden" // Efek scale dan overflow-hidden
              >
                <div className="flex flex-col h-full">
                  <div className="flex-grow">
                    <img
                      src={property.imgSrc}
                      alt={property.title}
                      className="w-full h-48 object-cover rounded-t-xl"
                    />
                    <div className="p-6">
                      <div className="mb-4">
                        <span className="text-sm text-blue-600 font-semibold">
                          {property.type}
                        </span>
                        <h3 className="text-xl font-bold text-gray-800 mt-2">
                          {property.title}
                        </h3>
                      </div>
                      <div className="text-blue-700 font-bold text-lg mb-4">
                        {property.price}
                      </div>

                      {/* Ikon Informasi */}
                      <div className="flex justify-between text-sm text-gray-600 mb-4">
                        <div className="flex items-center space-x-2">
                          <FontAwesomeIcon icon={faBed} className="h-4 text-blue-600" />
                          <span>{property.beds} Beds</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <FontAwesomeIcon icon={faBath} className="h-4 text-blue-600" />
                          <span>{property.baths} Baths</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <FontAwesomeIcon icon={faRulerCombined} className="h-4 text-blue-600" />
                          <span>2000 sqft</span> {/* Contoh ukuran */}
                        </div>
                      </div>

                      {/* Lokasi */}
                      <div className="flex items-center text-sm text-gray-600 mb-1"> {/* Mengurangi margin-bottom */}
                        <FontAwesomeIcon icon={faLocationDot} className="h-4 text-blue-600 mr-2" />
                        <span>{property.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Tombol Details */}
                  <div className="p-6 pt-4"> {/* Mengurangi padding-top */}
                    <a
                      href={property.link}
                      className="block w-full bg-blue-600 text-white text-center py-2 rounded-lg hover:bg-blue-700 transition duration-300"
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

      {/* Tombol View All Properties */}
      <section className="m-auto max-w-lg my-10 px-6">
        <a
          href="/properties"
          className="block bg-blue-700 text-white text-center py-3 px-6 rounded-lg hover:bg-blue-800 transition duration-300"
        >
          View All Properties
        </a>
      </section>
    </>
  );
};

export default RecentsHome;