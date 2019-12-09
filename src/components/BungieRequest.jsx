import { Globals } from "./Globals";

const url_string = window.location.href;
const url = new URL(url_string);
const code = url.searchParams.get("code");

const apiRequest = async (path, options = {}) => {
  const request = await fetch(path, options).then(r => r.json());
  return request;
};

export const getXurInventory = async () =>
  apiRequest(
    "https://www.bungie.net/Platform/Destiny2/Vendors/?components=400,402",
    {
      headers: { "X-API-Key": Globals.key.bungie }
    }
  );

export const getManifest = async () =>
  apiRequest(Globals.url.bungie + "/platform/Destiny2/Manifest/", {
    headers: {
      "X-API-Key": Globals.key.bungie
    }
  });

export const getJSONWorldContentPaths = async path =>
  apiRequest(Globals.url.bungie + path);

export const getAccessToken = async () =>
  apiRequest(Globals.url.bungie + "/Platform/App/OAuth/Token/", {
    method: "POST",
    headers: {
      "X-API-Key": Globals.key.bungie,
      "Content-Type": "application/x-www-form-urlencoded"
    },
    body: createFormParameters({
      client_id: Globals.client_id,
      grant_type: "authorization_code",
      code
    })
  });

const createFormParameters = parameters => {
  return Object.keys(parameters)
    .map(
      key => `${encodeURIComponent(key)}=${encodeURIComponent(parameters[key])}`
    )
    .join("&");
};

export const getMembershipsForCurrentUser = async access_token =>
  apiRequest(
    Globals.url.bungie + "/Platform/User/GetMembershipsForCurrentUser/",
    {
      headers: {
        "X-API-Key": Globals.key.bungie,
        Authorization: "Bearer " + access_token
      }
    }
  );

export const getProfile = async (membershipType, destinyMembershipId) =>
  apiRequest(
    Globals.url.bungie +
      "/Platform/Destiny2/" +
      membershipType +
      "/Profile/" +
      destinyMembershipId +
      "/?components=200",
    {
      headers: {
        "X-API-Key": Globals.key.bungie
      }
    }
  );
