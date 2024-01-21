import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  Alert,
  Platform,
} from 'react-native';

import axios from 'axios';
import 'intl';
import 'intl/locale-data/jsonp/en';
import * as Linking from 'expo-linking';
import * as WebBrowser from 'expo-web-browser';
import React, { useState, useEffect, useReducer } from 'react';
import { COLORS } from '../utils';
import { LoacationHeader, FinalizeHeader } from '../components/Header';
import {
  MaterialIcons,
  FontAwesome,
  Ionicons,
  MaterialCommunityIcons,
  AntDesign,
} from '@expo/vector-icons';
import { MapSearchInput } from '../components/TextInput';
import { FinaliseButton } from '../components/Buttons';
import MainModal from '../components/Modals/MainModal';

import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { useSelector, useDispatch } from 'react-redux';
import { createPayment, setCreatePayment } from '../Redux/Slice/paymentSlice';
import {
  requestRide,
  amount,
  selectTravelTimeInformation,
} from '../Redux/Slice/LocationSlice';
// import { requestRide } from "../utils/api/models";

import { baseUrl } from '../utils/api/GOOGLE_API';
import { Header } from '../components/Header';

const SURGE_CHARGE_RATE = 20;

const modalData = [
  {
    id: 1,
    title: 'Select payment method',
    close: 'close',
  },

  {
    id: 2,
    icon: 'cash',
    name: 'Pay with wallet',
  },

  {
    id: 3,
    icon: 'credit-card',
    name: 'Pay with card',
    onPress: () => {
      console.log('Pay with card');
    },
  },

  {
    id: 4,
    icon: 'bicycle',
    name: 'Pay on pickup',
    onPress: () => {
      console.log('Pay on pickup');
    },
  },
];

const _modalItem = ({ item }) => {
  const navigation = useNavigation();

  const [visible, setVisible] = useState(false);

  const dispatch = useDispatch();

  const onPress = () => {
    if (item.id === 2) {
      navigation.navigate('TRACK');
    }
  };

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.8}
      style={{ marginHorizontal: 30 }}
    >
      <View
        style={{
          marginBottom: 20,
          justifyContent: 'space-between',
          flexDirection: 'row',
        }}
      >
        <Text style={{ color: '#94A3B8', fontSize: 15 }}>{item.title}</Text>
        <AntDesign name={item.close} size={20} />
      </View>
      <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
        <Text style={{ fontSize: 13, fontWeight: 'bold' }}>{item.name}</Text>
        <MaterialCommunityIcons size={20} name={item.icon} />
      </View>
      <View style={styles.view} />
    </TouchableOpacity>
  );
};
const _renderItem = ({ item }) => (
  <View style={styles.content}>
    <MaterialIcons
      name="location-pin"
      size={20}
      color={COLORS.red}
      style={{ position: 'absolute', marginLeft: 5, marginTop: 35 }}
    />
    <View style={{ marginTop: 30, position: 'absolute', marginLeft: 30 }}>
      <Text style={styles.text}>{inputs?.type}</Text>
      <Text style={styles.name}>{inputs?.name}</Text>
      <Text style={styles.address}>{inputs?.address}</Text>
      <Text style={styles.phone}>{inputs?.phone}</Text>
    </View>
    <View style={styles.line} />
  </View>
);

const RequestRideScreen = ({ navigation, route }) => {
  const { email } = useSelector((state) => state.auth.user);
  // console.log(user, "USER");

  const [_modalData, _setModalData] = useState(modalData);
  const [visible, setVisible] = useState(false);
  const [deliveryFee, setDeliveryFee] = useState('');
  const [redirect_url, setRedirect_url] = useState('mylink://TRACK');
  const [requestId, setRequestId] = useState('');

  const [platform, setPlatform] = useState('MOBILE');

  const [generatedLink, setgeneratedLink] = useState('');
  console.log('LINK');
  console.log(generatedLink, 'LINK');

  var paymentLink = '';

  const amount = deliveryFee;
  const { inputs } = route.params;
  const userId = inputs.userId;

  async function requestRide(inputs) {
    try {
      const response = await axios.post(`${baseUrl}request-ride`, inputs);
      console.log(response.data);
      // const data = await response.data;

      setDeliveryFee(response.data.deliveryFee);
      setRequestId(response.data.requestId);

      if (response.status === 201) {
        console.log('OK');
        console.log(response.data);
        // Alert.alert("Order is Successfull");
      }

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
        console.log('Error', error.message);
      }
    }
  }

  async function getPayment(inputs) {
    try {
      const response = await axios.post(
        `${baseUrl}payment/create-payment-link`,
        {
          requestId,
          email,
          userId,
          amount,
          platform,
          redirect_url: 'mylink://TRACK',
        }
      );
      console.log("response.data.data.link");
      console.log(response.data.data.link);
      paymentLink = response.data.data.link;
      console.log('paymentLink');
      console.log(paymentLink);
      // const data = await response.data;
      setgeneratedLink(response.data.data.link);
      if (response.status === 201) {
        console.log('OK');
        console.log(response.data.status);
        // Alert.alert("Order Will be Delivered in 45mins");
      }

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
        console.log('Error', error.message);
      }
    }
  }

  React.useEffect(() => {
    requestRide(inputs);
  }, []);

  // const onFonalise = () => {
  //   getPayment(requestId, email, userId, amount, platform, 'mylink://TRACK');
  // };

  const toggleModal = () => {
    setVisible(true);
  };

  const onPress = async ({ item }) => {
    await getPayment(requestId, email, userId, amount, platform, 'mylink://TRACK');
    const link = generatedLink;
    console.log("Link here from generated link");
    console.log(paymentLink);
    // openInAppBrowser(link);
    // Linking.openURL(link);

    try {
      console.log("Link here");
      console.log(paymentLink);

      await WebBrowser.openBrowserAsync(paymentLink);
    } catch (error) {
      console.log(error);
      // Display an error message to the user
      // Alert.alert('Error', 'Could not open deep link. Please try again later.');
      Linking.openURL(paymentLink);
    }
    // if (Platform.OS === 'ios' || Platform.OS === 'android') {
    //   // Open the URL in the in-app browser
    //   await WebBrowser.openBrowserAsync(link);
    // } else {
    //   // Open the URL in the system browser
    //   Linking.openURL(link);
    // }
    // console.log('Data here');
    // console.log(data);

    navigation.navigate('TRACK');
  };

  // const openInAppBrowser = async (url) => {
  //   // Check if the URL should be opened in a WebView
  //   if (Platform.OS === 'ios' || Platform.OS === 'android') {
  //     // Open the URL in the in-app browser
  //     await WebBrowser.openBrowserAsync(url);
  //   } else {
  //     // Open the URL in the system browser
  //     Linking.openURL(url);
  //   }
  // };

  const onNavigationStateChange = (webViewState) => {
    getPayment(
      requestId,
      email,
      userId,
      amount,
      platform,
      'exp://127.0.0.1:19000/--/TRACK'
    );
    const currentUrl = webViewState.url;
    ('');

    if (currentUrl.startsWith('exp://127.0.0.1:19000/--/TRACK')) {
      // Redirect URL was reached, close the in-app browser
      WebBrowser.dismissBrowser();

      // Handle payment completion here
      // ...

      // Navigate back to the app screen
      navigation.goBack();
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <FinalizeHeader />
      <View>
        <View style={styles.content}>
          <MaterialIcons
            name="location-pin"
            size={20}
            color={COLORS.red}
            style={{ position: 'absolute', marginLeft: 5, marginTop: 35 }}
          />
          <View style={{ marginTop: 30, position: 'absolute', marginLeft: 30 }}>
            <Text style={styles.text}>Pickup From</Text>
            <Text style={styles.name}>{inputs?.senderName}</Text>
            <Text style={styles.address}>{inputs?.senderAddress}</Text>
            <Text style={styles.phone}>{inputs?.senderPhone}</Text>
          </View>
          <View style={styles.line} />
        </View>
        <View style={styles.content}>
          <MaterialIcons
            name="location-pin"
            size={20}
            color={COLORS.green}
            style={{ position: 'absolute', marginLeft: 5, marginTop: 35 }}
          />
          <View style={{ marginTop: 30, position: 'absolute', marginLeft: 30 }}>
            <Text style={styles.text}>Deiver To</Text>
            <Text style={styles.name}>{inputs?.recipientName}</Text>
            <Text style={styles.address}>{inputs?.recipientAddress}</Text>
            <Text style={styles.phone}>{inputs?.recipientPhone}</Text>
          </View>
          <View style={styles.line} />
        </View>
      </View>
      <View style={{ marginHorizontal: 30, marginTop: 10 }}>
        <View>
          <Text style={styles.package}>Package Description</Text>
          <Text style={styles.packageDes}>{inputs.packageDetails}</Text>
          {/* <View style={styles.line1} /> */}
        </View>
      </View>
      <View style={styles.notesection}>
        <Text style={styles.notes}>Notes</Text>
        <Text style={styles.notedetail}>No Notes</Text>
      </View>
      <View style={styles.notesection}>
        <Text style={styles.notes}>
          Received Cash:{' '}
          {new Intl.NumberFormat('en-ng', {
            style: 'currency',
            currency: 'NGN',
          }).format(deliveryFee)}
        </Text>
        {/* <Text style={styles.notedetail}>No Notes</Text> */}
      </View>
      <View style={styles.finalise}>
        <View style={{ marginHorizontal: 20, marginTop: 10 }}>
          <Text style={styles.express}>Express</Text>
          <Text style={styles.amount}>
            {' '}
            {new Intl.NumberFormat('en-ng', {
              style: 'currency',
              currency: 'NGN',
            }).format(deliveryFee)}
          </Text>
        </View>
        <View style={styles.modalContainer}>
          <MainModal
            visible={visible}
            // onRequestClose={() => setVisible(!visible)}
          >
            {/* <FlatList
              scrollEnabled={false}
              data={_modalData}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => <_modalItem item={item} onPress />}
            /> */}
            {modalData.map((item, index) => (
              <TouchableOpacity
                onPress={onPress}
                activeOpacity={0.8}
                style={{ marginHorizontal: 30 }}
                key={index}
              >
                <View
                  style={{
                    marginBottom: 20,
                    justifyContent: 'space-between',
                    flexDirection: 'row',
                  }}
                >
                  <Text style={{ color: '#94A3B8', fontSize: 15 }}>
                    {item.title}
                  </Text>
                  <AntDesign
                    onPress={() => setVisible(!visible)}
                    name={item.close}
                    size={20}
                    activeOpacity={0.9}
                  />
                </View>
                <View
                  style={{
                    justifyContent: 'space-between',
                    flexDirection: 'row',
                  }}
                >
                  <Text style={{ fontSize: 13, fontWeight: 'bold' }}>
                    {item.name}
                  </Text>
                  <MaterialCommunityIcons size={20} name={item.icon} />
                </View>
                <View style={styles.view} />
              </TouchableOpacity>
            ))}
          </MainModal>
        </View>
        <View style={{ marginHorizontal: 20, top: 20 }}>
          <FinaliseButton
            color={COLORS.white}
            onPress={toggleModal}
            title="Finalize"
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  divider: {
    borderBottomColor: 'grey',
    borderBottomWidth: StyleSheet.hairlineWidth,
    width: '100%',
  },
  content: {
    marginHorizontal: 20,
    marginBottom: -30,
  },
  text: {
    fontSize: 13,
    color: COLORS.red,
    marginBottom: 3,
  },
  name: {
    fontSize: 12,
    color: COLORS.black,
    marginBottom: 3,
  },
  address: {
    color: '#ABABB4',
    fontSize: 13,
    marginBottom: 3,
  },
  phone: {
    fontSize: 12,
    color: COLORS.black,
    marginBottom: 3,
  },
  line: {
    height: 1,
    backgroundColor: COLORS.black,
    alignSelf: 'stretch',
    marginTop: 115,
    margin: 30,
  },
  line2: {
    height: 1,
    backgroundColor: COLORS.black,
    alignSelf: 'stretch',
    marginTop: 50,
    margin: 20,
  },
  package: {
    marginLeft: 20,
    fontSize: 13,
  },
  packageDes: {
    marginTop: 10,
    marginLeft: 20,
    color: COLORS.grey,
  },
  notesection: {
    height: 50,
    backgroundColor: '#F1F5F9',
    marginHorizontal: 40,
    marginTop: 10,
    padding: 10,
    // alignContent: "center",
    borderRadius: 10,
  },
  notes: {
    color: '#881337',
    fontSize: 12,
  },
  notedetail: {
    fontSize: 12,
    marginTop: 5,
  },
  finalise: {
    backgroundColor: COLORS.FuddBackgroundColor,
    height: 300,
    top: 60,
  },
  express: {
    borderRadius: 5,
    color: COLORS.white,
    fontSize: 15,
    fontWeight: 'bold',
  },
  amount: {
    top: 25,
    color: COLORS.white,
    fontSize: 20,
    fontWeight: 'bold',
  },
  modalContainer: {
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  view: {
    height: 1,
    backgroundColor: '#E2E8F0',
    alignSelf: 'stretch',
    marginVertical: 10,
  },
});

export default RequestRideScreen;
