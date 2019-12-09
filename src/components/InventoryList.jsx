import React, { useState, useEffect } from "react";
import {
  getXurInventory,
  getManifest,
  getJSONWorldContentPaths
} from "./BungieRequest";
import { Globals } from "./Globals";
import loader from "../images/loader.gif";

const Inventory = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const result = await getXurInventory();
      const manifest = await getManifest();
      const jsonWorldContentPaths = await getJSONWorldContentPaths(
        manifest.Response.jsonWorldContentPaths.en
      );
      const data = Object.values(
        result.Response.sales.data[2190858386].saleItems
      ).map(
        item =>
          jsonWorldContentPaths.DestinyInventoryItemDefinition[item.itemHash]
      );
      setData(data);
      setLoading(false);
    }
    fetchData();
  }, []);

  return (
    <div className="inventory">
      {loading ? (
        <img className="loadingInfo" src={loader} alt="" />
      ) : (
        <ul>
          {data.map(item => (
            <li key={item.hash} className="item">
              <img
                src={Globals.url.bungie + item.displayProperties.icon}
                alt=""
              />
              <span>
                <h3>{item.displayProperties.name}</h3>
                <p>{item.itemTypeDisplayName}</p>
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Inventory;
