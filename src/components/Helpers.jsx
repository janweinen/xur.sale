export const Location = planet => {
  switch (planet) {
    case "nessus":
      return "Watchers's Grave, Nessus";
    case "earth":
      return "Winding Cove, EDZ, Earth";
    case "tower":
      return "Tower Hangar, Earth";
    case "titan":
      return "The Rig, Titan";
    case "io":
      return "Giant's Scar, Io";
    default:
      return "The Unknown Space";
  }
};
