import { TShop } from '../../types/shop';

type AddressItemProps = {
  address: TShop;
  onAddressChange: (name: string) => void;
  currentAddress: TShop;
  id: number;
}

function AddressItem({address, onAddressChange, currentAddress, id}: AddressItemProps): JSX.Element {
  return(
    <li className="map__address">
      <div className="custom-toggle custom-toggle--radio custom-toggle--address">
        <input
          type="radio"
          value={`user-agreement-${id}`}
          id={`user-agreement-id-${id}`}
          name="user-agreement"
          checked={currentAddress.name === address.name}
          onChange={() => onAddressChange(address.name)}
        />
        <label className="custom-toggle__label" htmlFor={`user-agreement-id-${id}`}>{address.name}</label>
        <address className="custom-toggle__address">{address.place}
          <svg className="custom-toggle__icon" width="26" height="24" aria-hidden="true">
            <use xlinkHref="#icon-keks-footprint"></use>
          </svg>
        </address>
      </div>
    </li>
  );
}

export default AddressItem;
