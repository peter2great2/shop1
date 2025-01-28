import React from 'react'
import pepsi from "../assets/svgs/pepsi-logo-svgrepo-com.svg";
import dell from "../assets/svgs/dell-2-logo-svgrepo-com.svg";
import fila from "../assets/svgs/fila-9-logo-svgrepo-com.svg";
import nike from "../assets/svgs/nike-4-logo-svgrepo-com.svg";
import samsung from "../assets/svgs/samsung-8.svg";
import apple from "../assets/svgs/apple-14.svg";
import nokia from '../assets/svgs/nokia-3-logo-svgrepo-com.svg';
import gucci from '../assets/svgs/gucci-4.svg';
import lenovo from '../assets/svgs/lenovo-1-logo-svgrepo-com.svg';
import hp from '../assets/svgs/hp-svgrepo-com.svg'


const Sponsors = () => {
    const sponsors = [
        { id: 1, logo: samsung, alt: 'Brand 1' },
        { id: 2, logo: apple, alt: 'Brand 2' },
        { id: 3, logo: gucci, alt: 'Brand 3' },
        { id: 4, logo: hp, alt: 'Brand 4' },
        { id: 5, logo: lenovo, alt: 'Brand 5' },
        { id: 6, logo: fila, alt: 'Brand 6' },
      ];

  return (
    <div>
        <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Our Sponsors</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {sponsors.map((sponsor) => (
            <div key={sponsor.id} className="flex items-center justify-center">
              <img src={sponsor.logo} alt={sponsor.alt} className="h-12 w-auto" />
            </div>
          ))}
        </div>
      </div>
    </section>
    </div>
  )
}

export default Sponsors