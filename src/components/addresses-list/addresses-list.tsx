import AddressItem from '../address-item/address-item';
import { SHOPS } from '../../consts';
import { TShop } from '../../types/shop';

type AddressesListProps = {
  currentAddress: TShop;
  onAddressChange: (name: string) => void;
}

function AddressesList({currentAddress, onAddressChange}: AddressesListProps): JSX.Element {
  return (
    <ul className="map__addresses">
      {
        SHOPS.map((address, index) => <AddressItem key={address.name} address={address} onAddressChange={onAddressChange} currentAddress={currentAddress} id={index + 10}/>)
      }
    </ul>
  );
}

export default AddressesList;
