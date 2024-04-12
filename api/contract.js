import "dotenv/config";
import { Contract, JsonRpcProvider, Wallet } from "ethers";
import artifacts from "./artifacts.json" assert { type: "json" };

const provider = new JsonRpcProvider(process.env.API_URL);
const wallet = new Wallet(process.env.PRIVATE_KEY, provider);
const contract = new Contract(artifacts.contractAddress, artifacts.abi, wallet);

export default contract;
