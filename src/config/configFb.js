  import firebase from 'firebase/app'
  import 'firebase/firestore'
  import 'firebase/auth'
  
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBLI3eaz20fgUBMVTBCPVpVtePhHonMwtk",
    authDomain: "wamballaproject.firebaseapp.com",
    databaseURL: "https://wamballaproject.firebaseio.com",
    projectId: "wamballaproject",
    storageBucket: "wamballaproject.appspot.com",
    messagingSenderId: "928435052012"
  };

  firebase.initializeApp(config);
  // firebase.firestore().settings({timestampsInSnapshots: true});
  firebase.firestore().settings({});

  export default firebase;