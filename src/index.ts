/// <reference types="@types/google.maps" />
import { User } from "./User";
// // import { Company } from "./Company";
import { CustomMap } from "./CustomMap";

declare global {
  interface Window {
    map: google.maps.Map;
  }
}

// create new user
const newUser = new User();

window.addEventListener("load", () => {
  // set global var for custom map
  let globalMap: CustomMap | undefined;

  // once the map loads, assign the window object
  if (window.map) {
    // If it's defined, create a new CustomMap instance
    globalMap = new CustomMap(window.map);
    console.log("CustomMap instance created");
  } else {
    console.error("Google Maps 'map' object is not defined.");
  }

  if (globalMap) {
    globalMap.setMapCoordinates(newUser.location.lat, newUser.location.lng);
    console.log("user location", newUser.location);
  } else {
    console.error("CustomMap instance is not defined.");
  }
});
