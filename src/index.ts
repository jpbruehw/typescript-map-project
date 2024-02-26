/// <reference types="@types/google.maps" />
import { User } from "./User";
import { Company } from "./Company";
import { CustomMap } from "./CustomMap";

declare global {
  interface Window {
    map: google.maps.Map;
  }
}

// create new user and company
const newCompany = new Company();
const newUser = new User();

window.addEventListener("load", () => {
  // set global var for custom map
  let globalMap: CustomMap | undefined;

  // once the map loads, assign the window object
  if (window.map) {
    // if it's defined, create a new CustomMap instance
    globalMap = new CustomMap(window.map);
    console.log("CustomMap instance created");
  } else {
    console.error("Google Maps 'map' object is not defined.");
  }
  // once the global map has been properly assigned we can
  // set markers for the company and user
  if (globalMap) {
    globalMap.addMarker(newCompany);
    globalMap.addMarker(newUser);
  } else {
    console.error("CustomMap instance is not defined.");
  }
});
