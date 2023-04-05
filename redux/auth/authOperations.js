import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { authSlice } from "./authReducer";
import { auth } from "../../firebase/config";

export const authSignUpUser =
  ({ email, password, login, avatar }) =>
  async (dispatch, getState) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      const user = await auth.currentUser;
      const updateUser = await updateProfile(user, {
        displayName: login,
        photoURL: avatar,
      });

      const { uid, displayName, photoURL } = await auth.currentUser;
      const userUpdateProfile = {
        login: displayName,
        userId: uid,
        userAvatar: photoURL,
        userEmail: email,
      };

      console.log("userUpdateProfile", userUpdateProfile);

      dispatch(authSlice.actions.updateUserProfile(userUpdateProfile));
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
    }
  };

export const authSignInUser =
  ({ email, password }) =>
  async (dispatch, getState) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
    }
  };

export const authStateChanfeUser = async (dispatch, getState) => {
  await onAuthStateChanged(auth, async (user) => {
    if (user) {
      console.log(user);
      const userUpdateProfile = {
        login: user.displayName,
        userId: user.uid,
      };
      dispatch(authSlice.actions.updateUserProfile(userUpdateProfile));
      dispatch(authSlice.actions.authStateChange({ stateChange: true }));
    }
  });
};

export const authSignOutUser = () => async (dispatch) => {
  try {
    await signOut(auth);
    dispatch(authSlice.actions.authSignOut());
    // Alert.alert(`Sign-out successful`);
  } catch (error) {
    // Alert.alert(error.message);
    console.log("error", error.message);
  }
};

// export const authStateChangeUser = () => async (dispatch, getState) => {
//   await auth.onAuthStateChanged(async (user) => {
//     if (user) {
//       const userUpdateProfile = {
//         userId: user.uid,
//         login: user.displayName,
//       };
//       dispatch(authSlice.actions.authStateChange({ stateChange: true }));
//       dispatch(authSlice.actions.updateUserProfile(userUpdateProfile));
//     }
