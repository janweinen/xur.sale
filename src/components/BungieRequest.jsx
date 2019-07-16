import { Globals } from "./Globals";

async function apiRequest(path, options) {
  const request = await fetch(path, options).then(r => r.json());
  return request.Response;
}

export const getXurInventory = async () =>
  apiRequest(
    Globals.url.bungie + "/Platform/Destiny2/Vendors/?components=400,402",
    {
      headers: { "X-API-Key": Globals.key.bungie }
    }
  );
