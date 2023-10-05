# Conceptual Model

## Profile
* profileId - PK
* profileActivationToken
* profileEmail
* profileHash
* profileName
* profileIsTruckOwner - true or false; boolean 

## Truck
* truckId - PK
* truckProfileId - FK owner
* truckDescription
* truckFoodCategory
* truckName
* truckLocationSunrise
* truckLocationSunset

## Location 
* locationId - PK 
* locationTruckId - FK
* locationAddress
* locationIsActive
* locationLat
* locationLng
* locationSunrise
* locationSunset

## Picture 
* pictureId - PK
* pictureTruckId - FK
* pictureUrl
* pictureType; truck, menu, featured

## Favorite
* favoriteTruckId - FK 
* favoriteProfileId - FK

## Relationships
* One food truck owner to many food trucks
* One consumer profile can favorite many food trucks
* A food truck can be favorited once by a profile 
* One food truck can have many pictures
* One truck can be favorited by many profiles 