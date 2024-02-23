/// <reference types="@types/google.maps" />

export class CustomMap {
  private map: google.maps.Map;

  constructor(map: google.maps.Map) {
    this.map = map;
  }

  /** Function to set coordinates for the map */
  public setMapCoordinates(lat: number, lng: number): void {
    if (this.map) {
      const newCenter = new google.maps.LatLng(lat, lng);
      this.map.setCenter(newCenter);
    } else {
      console.error("Map is not initialized.");
    }
  }

  public static hello(): void {
    console.log("hello I have loaded");
  }
}
