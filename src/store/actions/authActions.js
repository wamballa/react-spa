// export default function signIn(credentials) {
export const signIn = (credentials) => {

  return (dispatch, getState, { getFirebase }) => {

    const firebase = getFirebase();

    // const actionCodeSettings = {
    //   // URL you want to redirect back to. The domain (www.example.com) for this
    //   // URL must be whitelisted in the Firebase Console.
    //   // url: 'https://www.example.com/finishSignUp?cartId=1234',
    //   url: 'http:wwww.google.com',
    //   // This must be true.
    //   handleCodeInApp: true,
    //   iOS: {
    //     bundleId: 'com.example.ios'
    //   },
    //   android: {
    //     packageName: 'com.example.android',
    //     installApp: true,
    //     minimumVersion: '12'
    //   },
    //   dynamicLinkDomain: 'example.page.link'
    // };

    firebase.auth().signInWithEmailAndPassword(
      credentials.email,
      credentials.password
    ).then(() => {
      dispatch({ type: 'LOGIN_SUCCESS' });
    }).catch((err) => {
      dispatch({ type: 'LOGIN_ERROR', err });
    });


    // firebase.auth().sendSignInLinkToEmail(credentials.email, actionCodeSettings)
    // .then(function() {
    //   console.log("LINK SENT OK");
    //   // The link was successfully sent. Inform the user.
    //   // Save the email locally so you don't need to ask the user for it again
    //   // if they open the link on the same device.
    //   window.localStorage.setItem('emailForSignIn', credentials.email);
    // })
    // .catch(function(error) {
    //   // Some error occurred, you can inspect the code: error.code
    // });


  }
}
export const signOut = () => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();
    firebase.auth().signOut().then(() => {
      dispatch({ type: 'SIGNOUT_SUCCESS' });
    });
  }
}

export const signUp = (newUser) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firebase = getFirebase();
    const firestore = getFirestore();
    firebase.auth().createUserWithEmailAndPassword(
      newUser.email,
      newUser.password
    ).then(resp => {
      // create new user record in firestore
      return firestore.collection('users').doc(resp.user.uid).set({
        //storing following in document
        firstName: newUser.firstName,
        lastName: newUser.lastName,
        initials: newUser.firstName[0] + newUser.lastName[0]
      });
    }).then(() => {
      dispatch({ type: 'SIGNUP_SUCCESS' });
    }).catch((err) => {
      dispatch({ type: 'SIGNUP_ERROR', err });
    });
  }
}
