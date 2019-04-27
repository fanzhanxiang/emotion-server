import {TeService} from "te-one";
import apis from "../../constants/constants.api";

export default TeService({url: apis.userInfo, method: "GET"});