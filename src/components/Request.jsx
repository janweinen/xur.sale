async function apiRequest(path) {
  const options = {
    headers: { "X-API-Key": "eab9e06fbeb94a13a658b52b505ac2b1" }
  };

  const request = await fetch(`https://www.bungie.net${path}`, options).then(
    r => r.json()
  );

  return request.Response;
}

export const getXurInventory = async () =>
  apiRequest("/Platform/Destiny2/Vendors/?components=402");
