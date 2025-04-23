function initMap() {
  let loc = { lat: 6.57558, lng: 3.39026 };
  let map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: loc,
  });
  let marker = new google.maps.Marker({
    position: loc,
    map: map
  });
}
  
