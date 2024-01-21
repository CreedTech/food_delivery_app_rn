import { fetchUserId, fetchUser } from "./userAPi";
import { setUserData, setUserId } from "./userSlice";

export const fetchUserData = (userId) => async (dispatch) => {
  const data = await fetchUser(userId);
  dispatch(setUserData(data));
};

export const fetchUserAndId = () => async (dispatch) => {
  const userId = await fetchUserId();
  dispatch(setUserId(userId));
  const userData = await fetchUser(userId);
  dispatch(setUserData(userData));
};
