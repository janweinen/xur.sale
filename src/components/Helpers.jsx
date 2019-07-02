export const Location = planet => {
  switch (planet) {
    case "nessus":
      return "WATCHER'S GRAVE, NESSUS";
    case "earth":
      return "WINDING COVE, EDZ, EARTH";
    case "tower":
      return "TOWER HANGAR, EARTH";
    case "titan":
      return "THE RIG, TITAN";
    case "io":
      return "GIANT'S SCAR, IO";
    default:
      return "XÛR RETURNS ON FRIDAY";
  }
};
