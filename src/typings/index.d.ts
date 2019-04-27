/* 该文件请勿手动修改 */
import 'te-one';
export * from 'te-one';
export as namespace One;
import business_addresses from '../business/addresses';
import agent_addresses from '../agent/addresses';
declare module 'te-one' {
    interface IBaseBusiness {addresses:business_addresses}
    interface IBaseAgent {addresses:agent_addresses}
}