/// <reference types="@types/google.maps" />
/** Create an interface that  defines what kind of
 *  objects can be passed into the addMarker method
 *  only if they satisfy the condition of having a
 *  a location method
 */
export interface Mappable {
  location: {
    lat: number;
    lng: number;
  };
  markerContent(): string;
}

export class CustomMap {
  constructor(private map: google.maps.Map) {}

  /** Function to set coordinates for the map */
  public setMapCoordinates(lat: number, lng: number): void {
    if (this.map) {
      const newCenter = new google.maps.LatLng(lat, lng);
      this.map.setCenter(newCenter);
    } else {
      console.error("Map is not initialized.");
    }
  }

  /** Function to implement the markers for the
   * fake company and user
   */
  public addMarker(mappableObject: Mappable): void {
    const marker = new google.maps.Marker({
      map: this.map,
      position: {
        lat: mappableObject.location.lat,
        lng: mappableObject.location.lng,
      },
    });
    // add listener to marker
    // like event listener but the google maps version
    marker.addListener("click", () => {
      const infoWindow = new google.maps.InfoWindow({
        content: mappableObject.markerContent(),
      });
      infoWindow.open(this.map, marker);
    });
  }

  public static hello(): void {
    console.log("hello I have loaded");
  }
}
