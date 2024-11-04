const apiKey = 'AIzaSyBJx3BhuXQPo97BXMmGj_hwnOLOlV-O2EQ';

document.addEventListener('DOMContentLoaded', () => {
    const pickup = document.getElementById('pickup-location').value;
    const drop = document.getElementById('drop-location').value;
    const quantity = document.getElementById('quantity-product').value;

    Promise.all([getLocationDetails(pickup), getLocationDetails(drop)])
        .then(results => {
            const [pickupLocation, dropLocation] = results;

            if (isInDelhiNCR(pickupLocation) && isInDelhiNCR(dropLocation)) {
                if(quantity=="0-100Kg"){
                    displayResults('Rs.20 per KG');
                }
                else if(quantity=="100-250kg"){
                    displayResults('Rs. 15 per Kg');
                }
            } else {
                calculateDistance(pickupLocation.geometry.location, dropLocation.geometry.location);
            }
        })
        .catch(error => {
            console.error('Error fetching location details:', error);
        });
});

function getLocationDetails(location) {
    return new Promise((resolve, reject) => {
        const service = new google.maps.places.PlacesService(document.createElement('div'));
        service.textSearch({ query: location }, (results, status) => {
            if (status === google.maps.places.PlacesServiceStatus.OK) {
                resolve(results[0]);
            } else {
                reject(status);
            }
        });
    });
}

function isInDelhiNCR(location) {
    const delhiNCRBounds = {
        north: 28.8835, // Northern boundary
        south: 28.4042, // Southern boundary
        east: 77.3540,  // Eastern boundary
        west: 76.8355    // Western boundary
    };
    const { lat, lng } = location.geometry.location;
    return lat() <= delhiNCRBounds.north && lat() >= delhiNCRBounds.south &&
           lng() <= delhiNCRBounds.east && lng() >= delhiNCRBounds.west;
}

function calculateDistance(pickupLocation, dropLocation) {
    const origin = new google.maps.LatLng(pickupLocation.lat(), pickupLocation.lng());
    const destination = new google.maps.LatLng(dropLocation.lat(), dropLocation.lng());

    const service = new google.maps.DistanceMatrixService();
    service.getDistanceMatrix({
        origins: [origin],
        destinations: [destination],
        travelMode: 'DRIVING',
    }, (response, status) => {
        if (status === 'OK') {
            const distance = response.rows[0].elements[0].distance.text;
            displayResults(`Distance: ${distance}`);
        } else {
            console.error('Error calculating distance:', status);
        }
    });
}

function displayResults(message) {
    const results = document.querySelectorAll('.result');
    results.forEach(resultElement => {
        resultElement.innerText = message;
    });
}