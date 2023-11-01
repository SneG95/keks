import AddressesList from '../addresses-list/addresses-list';
import Map from '../map/map';
import { useState } from 'react';
import { TShop } from '../../types/shop';
import { SHOPS } from '../../consts';

function MapScreen(): JSX.Element {
  const [currentAddress, setCurrentAddress] = useState<TShop>(SHOPS[0]);

  const handleAddressClick = (name: string) => {
    const activeAddress = SHOPS.find((shop) => shop.name === name) as TShop;
    setCurrentAddress(activeAddress);
  };

  return (
    <section className="map">
      <div className="container">
        <h2 className="map__title">адреса</h2>

        <Map currentAddress={currentAddress}/>
        <AddressesList currentAddress={currentAddress} onAddressChange={handleAddressClick} />

      </div>
    </section>
  );
}

export default MapScreen;
