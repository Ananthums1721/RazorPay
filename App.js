import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import {RAZORPAY_KEY_ID,RAZORPAY_KEY_SECRET} from '@env'
import RazorpayCheckout from 'react-native-razorpay';

const App = () => {

  let razorpayKeyId = RAZORPAY_KEY_ID;
  let razorpayKeySecret = RAZORPAY_KEY_SECRET;

  const amount = 100;
  const currency = "INR"

  console.log(razorpayKeyId,'------',razorpayKeySecret)

  const handlePayment = () => {
    var options = {
      description: 'Test Payment',
      image: 'https://i.imgur.com/3g7nmJC.png',
      currency: currency,
      key: razorpayKeyId, // Your api key
      amount: amount*100,
      name: 'Tester 1',
      prefill: {
        email: 'void@razorpay.com',
        contact: '9191919191',
        name: 'Razorpay Software'
      },
      theme: {color: '#F37254'}
    }
    RazorpayCheckout.open(options).then((data) => {
      // handle success
      alert(`Success: ${data.razorpay_payment_id}`);
    }).catch((error) => {
      // handle failure
      alert(`Error: ${error.code} | ${error.description}`);
    });
  }
  return (
    <View style={{flex : 1 , alignItems:'center' , justifyContent:'center'}}>
      <TouchableOpacity style={{
        height:40 ,
        width:170,
        backgroundColor:'blue', 
        alignItems:'center',
        justifyContent:'center',
        borderRadius: 15}}
        onPress={() => handlePayment()}>
      <Text>Pay Now</Text>


      </TouchableOpacity>

    </View>
  )
}

export default App