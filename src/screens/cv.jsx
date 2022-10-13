import { View,Image, Text, ScrollView,TouchableOpacity, TextInput } from 'react-native';
import React from 'react';
import { useState } from 'react';
import {firebase} from '../services/firebaseHelper';
const CV = () => {
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [number,setNumber]=useState("");
    const [message,setMessage]=useState("");

    OnSubmitPressed= () => {
      if (
        name === "" ||
        email === "" ||
        number === "" ||
        message === ""
      ) {
        alert("you cant leave any field empty");
      } else{
          firebase
          .firestore()
          .collection("users")
          .add({
            name: name,
            email:email,
            message:message,
          number:number,
        })
        .then(() => {
        
          alert("Your message has been submitted👍");
        })
        .catch((error) => {
          alert(error.message);
          
        });
  
      setName("");
     setEmail("");
     setMessage("");
     setNumber("");
    };
  }  
      
    
  return (
    <ScrollView>
    <Text style={{fontSize:35,textAlign:'center',fontWeight:'600',
    marginTop:20

    
    }}>Education</Text>
    <Text style={{textAlign:'center',fontWeight:'600',
    fontSize:30,color:'green'
    }}>Study Program</Text>
    <Text style={{margin:5,textAlign:'center'}}>Bachelor in Computer science(BsCs)National College Of business Administration semester 4th Recently Completed.</Text>
    <Text style={{textAlign:'center',fontSize:25}}>ICS</Text>
    <Text style={{textAlign:'center'}}>Punjab College(PGC)</Text>
    <Text style={{textAlign:'center',fontSize:25}}>Matric</Text>
    <Text style={{textAlign:'center'}}>Sun Shine High School</Text>

    <Text style={{textAlign:'center',margin:30,
    color:'green',fontSize:45,fontWeight:'600'}}>Contact Us</Text>
     <View style={{alignItems:'center'}}>
     <TextInput
style={{width:300,borderWidth:2,borderRadius:50,
borderColor:'green',
padding:10,
fontSize:20
}}
placeholder='Name'
onChangeText={setName}
value={name}
     />
      <TextInput
style={{width:300,borderWidth:2,borderRadius:50,
borderColor:'green',
padding:10,
marginTop:15,
fontSize:20
}}
placeholder='Email'
onChangeText={setEmail}
value={email}

     />
      <TextInput
style={{width:300,borderWidth:2,borderRadius:50,
borderColor:'green',
padding:10,
marginTop:15,
fontSize:20
}}
placeholder='Number'
onChangeText={setNumber}
value={number}
     />
      <TextInput
style={{width:300,borderWidth:2,borderRadius:50,
borderColor:'green',
marginTop:15,
padding:10,
fontSize:20,
}}
placeholder='Message'
onChangeText={setMessage}
value={message}
     />
     <TouchableOpacity style={{backgroundColor:"#FFBF00",
        padding:15,
        alignItems:'center',
        marginLeft:100,
        width:200,
        marginTop:10,
        borderRadius:50,
  
        }}
        onPress={OnSubmitPressed}
        >
          <Text style={{color:"black",fontSize:25,fontWeight:'600'}}>Submit</Text>
        </TouchableOpacity>
     </View>
      </ScrollView>
  )
}

export default CV;