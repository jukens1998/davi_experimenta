import { Component, OnInit } from '@angular/core';
import { Geolocation } from "@ionic-native/geolocation/ngx";
import { LoadingController } from "@ionic/angular";
declare var google;
var iconoexperimenta = {
  url: "https://freepngimg.com/download/map/66970-map-google-icons-house-maps-computer-marker.png", // url
  scaledSize: new google.maps.Size(50, 50), // scaled size
  origin: new google.maps.Point(0,0), // origin
  anchor: new google.maps.Point(0, 0) // anchor
};
var iconousuario = {
  url: "https://cdn2.iconfinder.com/data/icons/user-needs-19/16/87_pin_locate_marker_location_navigation-512.png", // url
  scaledSize: new google.maps.Size(50, 50), // scaled size
  origin: new google.maps.Point(0,0), // origin
  anchor: new google.maps.Point(0, 0) // anchor
};
var defecto = {
// url
  scaledSize: new google.maps.Size(50, 50), // scaled size
  origin: new google.maps.Point(0,0), // origin
  anchor: new google.maps.Point(0, 0) // anchor
};

@Component({
  selector: 'app-market',
  templateUrl: './market.page.html',
  styleUrls: ['./market.page.scss'],
})
export class MarketPage implements OnInit {
  todos=[];
  nickname='';
  mapRef = null;
  constructor(private geolocation: Geolocation, private loadingCtrl: LoadingController) { }

  ngOnInit() {
    this.loadMap();
  }

  async loadMap() {
    const loading = await this.loadingCtrl.create();
    loading.present();
    const myLatLng = await this.getLocation();
    const mapEle: HTMLElement = document.getElementById('map');
    this.mapRef = new google.maps.Map(mapEle, {
      center: myLatLng,
      zoom: 12,
      
    });
    google.maps.event
      .addListenerOnce(this.mapRef, 'idle', () => {
        loading.dismiss();
        this.addMaker(myLatLng.lat, myLatLng.lng,defecto);
        this.addMaker(4.779108947190562,-434.0651557007343,iconoexperimenta); //ubicacion experimenta
      });

      
  }

  private addMaker(lat: number, lng: number,icon) {
    
    const marker = new google.maps.Marker({
      position: { lat, lng },
      map: this.mapRef,
      title: 'Hello World!',
      icon:icon      
    });
  }

  private async getLocation() {
    const rta = await this.geolocation.getCurrentPosition();
    return {
      lat: rta.coords.latitude,
      lng: rta.coords.longitude
    };
  }


}
