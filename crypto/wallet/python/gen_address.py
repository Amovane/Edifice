import os
from eth_account import Account
from dotenv import load_dotenv
load_dotenv()

private_key = os.environ.get("PRIVATE_KEY")
account = Account.from_key(private_key)

print(account.address)
