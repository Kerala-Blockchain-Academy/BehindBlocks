import {Contract,JsonRpcProvider,Wallet} from "ethers";
import details from "./detail.json" assert {type:"json"};
import dotenv from 'dotenv';
dotenv.config();
const provider= new JsonRpcProvider("https://sepolia.infura.io/v3/6ce51aa51bd2499fbe9814f917b68e22")
const wallet=new Wallet(process.env.Private_Key,provider);
const instance=new Contract(details.contract_address,details.abi,wallet);
export default instance;



