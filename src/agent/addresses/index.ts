import {TeService, BaseAgent} from 'te-one';
import {ADDRESSES_URL} from '../../common/consts'
export default class extends BaseAgent {
  getAddresses = TeService({
    url: ADDRESSES_URL.getAddresses,
    json: true,
    dataTransform(data) {
      return data;
    }
  })
  addAddress = TeService({url: ADDRESSES_URL.addAddress, method: 'post', dataType: 'form'})
  deleteAddress = TeService({url: ADDRESSES_URL.deleteAddress, method: 'post', dataType: 'form'})
}