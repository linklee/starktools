
from starknet_py.net.signer.stark_curve_signer import KeyPair

key_pair = KeyPair.from_private_key("0xPRIVATE_KEY")
print(hex(key_pair.public_key))
