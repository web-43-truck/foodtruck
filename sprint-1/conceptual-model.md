# Conceptual Model

## Homepage
* home_id — id’s go first
* home_
* home_search

## Admin
* adminId - Primary Key
* foodTruckOwnersId - Foreign Key  
* adminActivationToken
* adminEmail
* adminFirstName
* adminHash
* adminLastName
* adminUsername
* adminPermissionLevel

## Food Truck Owner
* ownerId - PK
* foodTruckId - FK
* ownerActivationToken
* ownerBirthDate
* ownerFirstName
* ownerEmail
* ownerHash
* ownerLastName
* ownerPermissions
* ownerUserName

## Food Truck
* truckId - PK
* consumerId - FK
* truckPictureId - FK
* guestUserId - ?
* truckActivationToken
* truckDescription
* truckFoodCategory
* truckName

## Truck Pictures
* truckPictureId - PK
* truckPicture
* truckMenuPicture
* truckFeaturedPhotos

## Sign-in
* sign-in ID - PK
* sign-inHistory

## Consumer Profile
* consumerId-PK
* truckId - FK
* adminId - FK -?
* consumerActivationToken
* consumerAvatar
* consumerFavorites

## Favorite Truck
* favoriteTruckId - FK 
* consumerId - FK 
* 


## Relationships 
...