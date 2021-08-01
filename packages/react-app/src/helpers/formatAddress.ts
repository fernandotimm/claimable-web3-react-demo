export const shortenAddress = (address:string) => (
  address && `${address.substr(0, 4)}...${address.substr(address.length - 5, address.length - 1)}`
);