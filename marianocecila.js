window.onload = () => {
    document.getElementById('loader').classList.add('bye');
    document.getElementById('main').classList.add('hello');
    document.getElementById('footer').classList.add('hello');
}

//  function initMap() {
//      // The location of Uluru
//      var uluru = {lat: -34.6414974, lng: -58.5395091};
//      // The map, centered at Uluru
//      var map = new google.maps.Map(
//          document.getElementById('map'), {zoom: 100, center: uluru});
//      // The marker, positioned at Uluru
//      var marker = new google.maps.Marker({position: uluru, map: map});
//    }