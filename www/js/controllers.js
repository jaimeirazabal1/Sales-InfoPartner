angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})
.controller('LoginCtrl',function($scope,$stateParams,$ionicPopup){
  $scope.login = function(){
    console.log(this.username,this.password)
    if (this.username == "jaime" && this.password == "1234") {
     // An alert dialog
   
       var alertPopup = $ionicPopup.alert({
         title: 'Correcto!',
         template: 'Bienvenid@ al sistema'
       });

       alertPopup.then(function(res) {
         console.log('Thank you for not eating my delicious ice cream cone');
       });
    }else{
   
       var alertPopup = $ionicPopup.alert({
         title: 'Error!',
         template: 'Nombre de Usuario o Contraseña incorrectos'
       });

       alertPopup.then(function(res) {
         console.log('Thank you for not eating my delicious ice cream cone');
       });
    }
  }
})
.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
