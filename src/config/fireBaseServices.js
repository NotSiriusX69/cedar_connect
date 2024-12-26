import {
  collection,
  doc,
  getDoc,
  updateDoc,
  deleteDoc,
  getDocs,
  query,
  where,
  addDoc,
} from "firebase/firestore";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { db } from "./fireBaseConfig";

// returns the users collection
export const fetchUserDoc = async (userId) => {
  const usersRef = doc(db, "users", userId);

  try {
    const userDoc = await getDoc(usersRef);
    if (userDoc.exists()) {
      return userDoc.data();
    } else {
      console.error("User document not found");
      return null;
    }
  } catch (error) {
    console.error("Error fetching user document:", error);
    return null;
  }
};

// returns the the rentals collection
export const fetchRentalsDoc = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, "rentals"));

    const rentalsData = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    return rentalsData;
  } catch (err) {
    console.log("Error");
    return null;
  }
};

// returns the rental document based on ID
export const fetchRentalDoc = async (rentalId) => {
  const rentalRef = doc(db, "rentals", rentalId);

  try {
    const rentalDoc = await getDoc(rentalRef);
    if (rentalDoc.exists()) {
      return rentalDoc.data();
    } else {
      console.error("Rental document not found");
      return null;
    }
  } catch (err) {
    console.error("error - fetching rental", err);
    return null;
  }
};

// returns the rented document based on ID
export const fetchRentedDoc = async (rentedId) => {
  const rentedRef = doc(db, "rented", rentedId);

  try {
    const rentedDoc = await getDoc(rentedRef);
    if (rentedDoc.exists()) {
      return rentedDoc.data();
    } else {
      console.error("Rented document not found");
      return null;
    }
  } catch (err) {
    console.error("error - fetching rented", err);
    return null;
  }
};

// returns the user of the specified rental document
export const fetchUserOfRentalDoc = async (rentalId) => {
  const rentalRef = doc(db, "rentals", rentalId);

  try {
    const rentalDoc = await getDoc(rentalRef);
    if (rentalDoc.exists()) {
      const rentalData = rentalDoc.data();
      const userDoc = await getDoc(rentalData.user);
      if (userDoc.exists()) {
        return userDoc.data();
      } else {
        console.error("User document not found");
        return null;
      }
    } else {
      console.error("Rental document not found");
      return null;
    }
  } catch (err) {
    console.error("error - fetching rental", err);
    return null;
  }
};

// returns the rentals of a specified user
export const fetchRentalsOfUser = async (userId) => {
  try {
    const q = query(collection(db, "rentals"), where("user_id", "==", userId));
    const querySnapshot = await getDocs(q);

    if (querySnapshot.empty) {
      console.log("No rentals found for this user.");
      return [];
    }

    const rentalData = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    return rentalData;
  } catch (error) {
    console.error("Error fetchings user's Rentals", error);
    return null;
  }
};

// returns the rented place of a specified user
export const fetchRentedOfUser = async (userId) => {
  try {
    const q = query(collection(db, "rented"), where("user_id", "==", userId));
    const querySnapshot = await getDocs(q);

    if (querySnapshot.empty) {
      return [];
    }

    const rentedData = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    return rentedData;
  } catch (error) {
    console.error("Error in Rented Function", error);
    return null;
  }
};

// change username of a specified user
export const changeUsername = async (userId, newUserName) => {
  if (await checkUsernameExists(newUserName)) {
    console.log("noy here");
    return false;
  }

  const userRef = doc(db, "users", userId);
  try {
    const userDoc = await getDoc(userRef);
    if (userDoc.exists()) {
      await updateDoc(userRef, {
        username: newUserName,
      });
      console.log("username changed");
      return true;
    } else {
      console.log("user couldn't update");
      return false;
    }
  } catch (error) {
    console.error("Error changing username");
  }
};

// check if username exists in users
export const checkUsernameExists = async (username) => {
  try {
    const q = query(collection(db, "users"), where("username", "==", username));
    const querySnapshot = await getDocs(q);
    if (!querySnapshot.empty) {
      console.log("not empty");
      return true;
    } else {
      console.log("empty");
      return false;
    }
  } catch (error) {
    console.error("error fetching users for username", error);
    return false;
  }
};

// change about me of a specified user
export const changeAboutMe = async (userId, newAboutMe) => {
  const userRef = doc(db, "users", userId);
  try {
    const userDoc = await getDoc(userRef);
    if (userDoc.exists()) {
      await updateDoc(userRef, {
        aboutme: newAboutMe,
      });
      console.log("about me changed");
      return true;
    } else {
      console.log("user couldn't update");
      return false;
    }
  } catch (error) {
    console.error("Error changing aboutMe");
  }
};

// fetch the filtered rentals
export const fetchFilteredRentals = async (rooms, type, location) => {
  try {
    const q = query(
      collection(db, "rentals"),
      where("rooms", "==", rooms),
      where("type", "==", type),
      where("location", "==", location)
    );
    const querySnapshot = await getDocs(q);

    if (querySnapshot.empty) {
      return [];
    }

    const rentalsData = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    return rentalsData;
  } catch (error) {
    console.error("Error in rentals filtered Function", error);
    return null;
  }
};

// update is_rented of a specfied rental
export const updateIsRentedOfRental = async (rentalId, isRented) => {
  const rentalRef = doc(db, "rentals", rentalId);

  try {
    const rentalDoc = await getDoc(rentalRef);
    if (rentalDoc.exists()) {
      await updateDoc(rentalRef, {
        is_rented: isRented,
      });
      return true;
    } else {
      console.error("Rental document not found");
      return false;
    }
  } catch (err) {
    console.error("error - fetching rental", err);
    return false;
  }
};

// delete a specific rented rental
export const deleteRentedDoc = async (rentedId) => {
  const rentedRef = doc(db, "rented", rentedId);

  try {
    await deleteDoc(rentedRef);
    return true;
  } catch (error) {
    console.error("Error deleting rented document:", error);
    return false;
  }
};

// add a rental
export const addRentalDoc = async (formData) => {
  const rentalsCollectionRef = collection(db, "rentals");

  try {
    const rentalData = formData;
    console.log("data in firebase", rentalData);
    const docRef = await addDoc(rentalsCollectionRef, rentalData);
    return docRef.id;
  } catch (error) {
    console.error("Error adding rental document:", error);
    return null;
  }
};

// update ImageSrc
export const updateImageSourceOfRental = async (rentalId, ImageSrc) => {
  const rentalRef = doc(db, "rentals", rentalId);

  try {
    const rentalDoc = await getDoc(rentalRef);
    if (rentalDoc.exists()) {
      await updateDoc(rentalRef, {
        img_src: ImageSrc,
      });
      return true;
    } else {
      console.error("Rental document not found");
      return false;
    }
  } catch (err) {
    console.error("error - fetching rental", err);
    return false;
  }
};
