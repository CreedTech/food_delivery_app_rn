import axios from "axios";
import Alert from "react-native";

import { baseUrl } from "../../utils/api/GOOGLE_API";

export async function requestRide(inputs) {
  try {
    const response = await axios.post(`${baseUrl}request-ride`, inputs);
    // console.log(response.data);

    const data = await response.data;

    console.log(data, "_DATA");

    const feeList = await data?.map(async (fee) => {
      // const imageUrl = await fetchImageUri(fee.deliveryFee);

      const feeFormat = {
        // imageUrl: imageUrl || "",
        deliveryFee: fee.deliveryFee,
        // desc: nft.description,
      };
      return feeFormat;
    });

    if (response.status === 201) {
      console.log("OK");
      console.log(response.data);
      Alert.alert("Order has is Successfull");
    }
    return Promise.all(feeList);
    // handle the response data as needed
  } catch (error) {
    if (error.response) {
      console.log(error);
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
      console.log(error.status);
    } else if (error.request) {
      console.log(error.request);
    } else {
      console.log("Error", error.message);
    }
  }
}
