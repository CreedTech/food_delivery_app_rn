import AsyncStorage from "@react-native-async-storage/async-storage";

export const BASE_URL = "https://fudap-staging.herokuapp.com/api/v1/";

export const fetchUserId = async (userId) => {
  try {
    const token = await AsyncStorage.getItem("token");
    const response = await fetch(`${BASE_URL}user/${userId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    console.log(response);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const fetchUser = async () => {
  try {
    const token = await AsyncStorage.getItem("token");
    const response = await fetch(`${BASE_URL}user`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await response.json();
    return data.userId;
  } catch (error) {
    console.error(error);
  }
};
