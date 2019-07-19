import { Globals } from "./Globals";

const url_string = window.location.href;
const url = new URL(url_string);
const code = url.searchParams.get("code");

async function apiRequest(path, options = {}) {
  const request = await fetch(path, options).then(r => r.json());
  return request;
}

export const getXurInventory = async () =>
  apiRequest(
    Globals.url.bungie + "/Platform/Destiny2/Vendors/?components=400,402",
    {
      headers: { "X-API-Key": Globals.key.bungie }
    }
  );

export const requestAuthorization = async () =>
  apiRequest("https://www.bungie.net/Platform/App/OAuth/Token/", {
    method: "POST",
    headers: {
      "X-API-Key": Globals.key.bungie,
      "Content-Type": "application/x-www-form-urlencoded"
    },
    body: createFormParams({
      client_id: Globals.client_id,
      grant_type: "authorization_code",
      code
    })
  });

function createFormParams(params) {
  return Object.keys(params)
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`)
    .join("&");
}

export const getMembershipsForCurrentUser = async access_token =>
  apiRequest(
    "https://www.bungie.net/Platform/User/GetMembershipsForCurrentUser/",
    {
      headers: {
        "X-API-Key": Globals.key.bungie,
        Authorization: "Bearer " + access_token
      }
    }
  );
