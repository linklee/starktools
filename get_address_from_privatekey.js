import { ec } from "starknet";

const publicKey = ec.starkCurve.getStarkKey("0xPRIVATE_KEY");
console.log("0x" + BigInt(publicKey).toString(16).padStart(64, "0"));
