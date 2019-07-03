import { Globals } from "./Globals";

async function apiRequest(path) {
  const options = {
    headers: { "X-API-Key": Globals.key.bungie }
  };

  const request = await fetch(`https://www.bungie.net${path}`, options).then(
    r => r.json()
  );

  return request.Response;
}
console.log(Globals);
export const getXurInventory = async () =>
  apiRequest("/Platform/Destiny2/Vendors/?components=402");
