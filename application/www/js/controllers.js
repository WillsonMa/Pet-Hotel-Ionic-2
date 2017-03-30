<<<<<<< HEAD
var starter = angular.module('starter.controllers', [])

starter.controller('DashCtrl', function($scope, $state)
{
=======
var starter = angular.module('starter.controllers', []);
/*
 starter.controller('LoginCtrl', function($scope, $state)
 {
 $scope.toHomeState = function ()
 {
 $state.go("tab.dash");
 };
 $scope.toLoginState = function ()
 {
 $state.go("tab.login");
 };
 })
 */

starter.controller('LoginCtrl', function($scope, $ionicLoading, $state) {
  // $scope.user = {};
  console.log("here")
  $scope.email = "kitten@petbnb.com";
  $scope.password = "123456";

  // TODO: signin function - done
  $scope.createUser = function(email, password) {
    return firebase.auth().createUserWithEmailAndPassword(email,password).then(function(){
      $ionicLoading.show({template:'Created New User!',noBackdrop:true,duration:1000});
    }).catch(function(error){
      var errorCode=error.code;
      var errorMessage=error.message;
      $ionicLoading.show({template:'Fail to Create New User! Try again!',noBackdrop:true,duration:1000});
    });
  };

  // TODO: login function - not yet
  $scope.login = function(email, password) {
    return firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;
      });
  };

  $scope.attemptCreateUser = function(){
    $scope.createUser($scope.email,$scope.password);
  };
  // TODO: attempt login - not yet
  $scope.attemptLogin = function(){
    console.log("Attempting Login with Email:"+$scope.email+"|password:"+$scope.password);

    $scope.login($scope.email,$scope.password).then(function(){
      //CheckifcurrentUserisset(weweresuccesfullyabletologin)
      if(!firebase.auth().currentUser){
        //Showmodalwithdescriptionofevents
        $ionicLoading.show({template:'Fail to Login! Check credentials,check connection or Create user',noBackdrop:true, duration:1000});
        // TODO: unsuccessful login
      } else{
        //If successful login,thencurrentUserissetanddisplayeventmodal
        //Showmodalwithdescriptionofevents
        $ionicLoading.show({template:'Successfully Login with Existing User!',noBackdrop:true,duration:1000});
        // TODO: successful login
        // $scope.logoutButton.username=firebase.auth().currentUser.email;
        // $scope.logoutButton.visibility='visible';
      }
    });
  };
});

starter.controller('DashCtrl', function($scope, $state)
{
  console.log("in dash ctrl\n");

>>>>>>> 115fe4612f3015184b923ffbc7963eb0c651e245
  $scope.toAccountState = function () {

    $state.go("tab.account");
  };
  $scope.toSearchState = function () {

    $state.go("tab.search");
  };
  $scope.toBlogState = function () {

    $state.go("tab.blog");
  };
  $scope.toChatRoomState = function () {

    $state.go("tab.chats");
  };
<<<<<<< HEAD
})
=======
});
>>>>>>> 115fe4612f3015184b923ffbc7963eb0c651e245

starter.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

<<<<<<< HEAD
=======
  console.log("chats controler");

>>>>>>> 115fe4612f3015184b923ffbc7963eb0c651e245
  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
<<<<<<< HEAD
})

starter.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})
=======
});

starter.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
});
>>>>>>> 115fe4612f3015184b923ffbc7963eb0c651e245

starter.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
<<<<<<< HEAD
})

starter.controller('SearchCtrl', function($scope) {
    $scope.settings = {
      enableFriends: true
    };
})


starter.controller('BlogCtrl', function($scope) {
    $scope.settings = {
      enableFriends: true
    };
})

starter.controller('LoginCtrl', function($scope, $state)
{
  $scope.toHomeState = function () {

    $state.go("tab.dash");
  };
})
// The start of the single controller that we will be using for this lab
// It is called "mainCtrl" and is connected to the Angular module "starter"
starter.controller('SignupCtrl', function($scope, $ionicModal, $ionicLoading,$window) {
  $scope.firstName = ""; // Create first name string variable on controller $scope
  $scope.lastName = ""; // Create last name string variable on controller $scope
  $scope.phoneNumber = ""; // Create phone number string variable on controller $scope
  $scope.email = ""; // Create email string variable on controller $scope
  $scope.country = ""  // Create country string variable on controller $scope
  $scope.city = ""  // Create city string variable on controller $scope
  $scope.userid = ""  // Create userid string variable on controller $scope
  $scope.password = ""  // Create password string variable on controller $scope
  $scope.pets = ""  // Create pets string variable on controller $scope
  $scope.listOfPeople = {}; // Create list of people dictionary variable on controller $scope


  $scope.onSubmit = function () { // Create onSubmit function
    // This function will be run every time the submit button is pressed


    // Create a variable that is an empty dictionary called "person"
    // It will hold the persons attributes such as first name, last name, etc
    var person = {};

    // Create an ID variable by appending all the variables that define a person (listed above) as a string
    // What this does is create a unique identifier for each person by using all the persons attributes to generate a
    // unique string
    person.id = $scope.firstName+$scope.lastName+$scope.phoneNumber+$scope.email + $scope.country + $scope.city +$scope.userid
      +$scope.password;

    /* Insert your code for the following variables below */
    person.firstName = $scope.firstName;
    person.lastName = $scope.lastName;
    person.phoneNumber = $scope.phoneNumber;
    person.email = $scope.email ;
    person.country = $scope.country ;
    person.city = $scope.city ;
    person.userid = $scope.userid ;
    person.password = $scope.password ;
    person.pets = $scope.pets ;


    // Now, add the person variable you added attributes to above to the "listOfPeople" dictionary
    /* HINT: Use the person variables ID as the "key" value to the dictionary */
    /* YOUR CODE HERE; 1 line */

    // This function call displays a popover that says "Person Added!"
    // It is run every time someone presses the submit button and the onSubmit function runs, as it is nested within the
    // onSubmit function
    $ionicLoading.show({ template: 'Person Added!', noBackdrop: true, duration: 1000 });
  };

});




=======
});

starter.controller('SearchCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});


starter.controller('BlogCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
>>>>>>> 115fe4612f3015184b923ffbc7963eb0c651e245
