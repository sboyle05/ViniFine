import React from 'react';
import './services.css';

const equipmentData = [
  {
    type: 'Sweetspotter',
    model: 'S4-4-20: 4 Membrane System',
    capacity: 'approx 20 gal/hr of Permeate - VA / EA Unit',
    rental_rates: {
      '1 Day': "$375",
      '2 Days': "$675",
      '3 Days': "$865",
      '4 Days': "$1162",
      '1 Week': "$1313",
      'Weekend': "$650"
    }
  },
  {
    type: 'Sweetspotter',
    model: 'S4-4-40: 4 Membrane System',
    capacity: 'approx 40 gal/hr of Permeate - Smoke Taint',
    rental_rates: {
      'Special Note': 'Call for pricing'
    }
  },
  {
    type: 'CrossFlow',
    model: 'CF8-2-200: 2 Membrane Manual',
    capacity: '150 - 220 gph',
    rental_rates: {
      '1 Day': '$500',
      '2 Days': '$830',
      '3 Days': '$970',
      '4 Days': '$1,435',
      '1 Week': '$1,540',
      'Weekend': '$750'
    }
  },
  {
    type: 'CrossFlow',
    model: 'CF8-4-400: 4 Membrane Semi-auto',
    capacity: '300-600 gph',
    rental_rates: {
      '1 Day': '$750',
      '2 Days': '$1,350',
      '3 Days': '$1,550',
      '4 Days': '$1,800',
      '1 Week': '$2,100',
      'Weekend': '$1,100'
    }
  },
  {
    type: 'Cross Flow',
    model: 'CF8-6-600SA: 6 Membrane Semi-auto',
    capacity: '500-850 gph',
    rental_rates: {
      'Special Note': 'Call for pricing'
    }
  }

];


const EquipmentTable = ({ equipmentData }) => {
  // Define the headers for the rental rates
  const rateKeys = ['1 Day', '2 Days', '3 Days', '4 Days', '1 Week', 'Weekend'];

  return (
    <section className='dataContainer'>
      <table>
        <thead>
          <tr>
            <th className='category'>Type</th>
            <th className='category'>Model</th>
            <th className='category'>Capacity</th>
            {/* Add headers for rental rates */}
            {rateKeys.map((key) => (
              <th className='category' key={key}>{key}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {equipmentData.map((item, index) => (
            <tr key={index}>
              <td className='dataPoint'>{item.type}</td>
              <td className='dataPoint'>{item.model}</td>
              <td className='dataPoint'>{item.capacity}</td>
              {/* Check if 'Special Note' exists in rental_rates */}
              {item.rental_rates['Special Note'] ? (
                // Render "Call for pricing" in a single cell spanning all rate columns
                <td className='dataPoint' colSpan={rateKeys.length}>{item.rental_rates['Special Note']}</td>
              ) : (
                // Render the rental rates for each day
                rateKeys.map((rateKey) => (
                  <td className='dataPoint' key={rateKey}>{item.rental_rates[rateKey] || 'N/A'}</td>
                ))
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};


const ViniFinePricingComponent = () => {

  return (
    <div>
      <EquipmentTable equipmentData={equipmentData} />
    </div>
  );
};
const ColumnRentalPricingTable = () => {
  return (
    <section className='dataContainer'>
    <table>
      <thead>
        <tr>
          <th className='category'>Service</th>
          <th className='category'>Size</th>
          <th className='category'>Rate</th>

        </tr>
      </thead>
      <tbody>
        <tr>
          <td className='dataPoint'>VA Removal</td>
          <td className='dataPoint'>8 inch</td>
          <td className='dataPoint'>$220/week</td>

        </tr>
        <tr>
          <td className='dataPoint'></td>
          <td className='dataPoint'>14 inch</td>
          <td className='dataPoint'>$350/week</td>

        </tr>
      </tbody>
    </table>
    </section>
  );
};

const PHControlTable = () => {
  return (
    <section className='dataContainer'>
    <table>
      <thead>
        <tr>
          <th className='category'>Service</th>
          <th className='category'>Size</th>
          <th className='category'>Rate</th>

        </tr>
      </thead>
      <tbody>
        <tr>
          <td className='dataPoint'>pH Control</td>
          <td className='dataPoint'>8 inch</td>
          <td className='dataPoint'>$220/week</td>

        </tr>
        <tr>
          <td className='dataPoint'></td>
          <td className='dataPoint'>14 inch</td>
          <td className='dataPoint'>$350/week</td>

        </tr>
      </tbody>
    </table>
    </section>
  );
};


const Services = () => {
  return (
    <>
    <section className='servicesContainer'>
      <section className='titleContainer'>
      <h1 className='servicesTitle'>Services</h1>
      </section>
      <section className='indService'>
      <ViniFinePricingComponent />
      </section>
      <section className='indService'>
      <ColumnRentalPricingTable/>
      </section>
      <section className='indService'>
      <PHControlTable/>
      </section>
      <section className='otherDetails'>
        <h2 className='otherTitle'>Delivery/Collection</h2>
        <p>$85 - Each way - Local area (25 miles radius of Walla Walla)</p>
        <p>$2/mile for additional mileage beyond 25 miles</p>
        </section>
    </section>
    </>
  );
}

export default Services;
