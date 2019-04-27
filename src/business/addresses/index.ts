import {BaseBusiness} from 'te-one';
import {
  GetAddressesRequest,
  GetAddressesResponse,
  AddAddressRequest,
  AddAddressResponse,
  DeleteAddressRequest,
  DeleteAddressResponse
} from './index.interface'

export default class extends BaseBusiness {
  GetAddressesRequest = GetAddressesRequest;
  GetAddressesResponse = GetAddressesResponse;
  AddAddressRequest = AddAddressRequest;
  AddAddressResponse = AddAddressResponse;
  DeleteAddressRequest = DeleteAddressRequest;
  DeleteAddressResponse = DeleteAddressResponse;

  getAddresses(req : GetAddressesRequest) : Promise < GetAddressesResponse > {
    let resObj = this
      .agent
      .addresses
      .getAddresses(req);
    return resObj;
  }
  addAddress(req : AddAddressRequest) : Promise < AddAddressResponse > {
    let resObj = this
      .agent
      .addresses
      .addAddress(req);
    return resObj;
  }
  deleteAddress(req : DeleteAddressRequest) : Promise < DeleteAddressResponse > {
    let resObj = this
      .agent
      .addresses
      .deleteAddress(req);
    return resObj;
  }
}
