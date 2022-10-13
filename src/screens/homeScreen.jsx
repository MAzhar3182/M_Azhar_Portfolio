

import { View,StyleSheet,TouchableOpacity,Text,
    ImageBackground,StatusBar,


} from 'react-native';
import { Entypo } from '@expo/vector-icons';
import bgImage from "../../assets/azii.jpg";
import { AntDesign } from '@expo/vector-icons';




function HomeScreen({navigation}) {
    return (
     
      <ImageBackground source={bgImage} style={styles.background}>
      <StatusBar style="auto"/>
      <View style={styles.container}>
        <Text style={styles.text}>Hello I <Text style={{color:'#FFA500'}}>am</Text></Text>
        <Text style={{
          color:"white",
        fontSize:35,
        fontWeight:'600'
        }}>Muhammad Azhar</Text>
        <Text style={{
          color:"white",
        fontSize:14,
        textAlign:'center'
        }}>I'm focused to develop mobile app for both android and ios using <Text style={{color:'#FFA500',fontWeight:'600',
        fontSize:20
        }}> React-Native </Text> and I try to deliver client satisfaction work. I'm always passionate about good programming and I'm confident to implement new ideas.</Text>
        <TouchableOpacity style={{backgroundColor:"#FFBF00",
        padding:15,
        marginTop:10,
        borderRadius:50,
  
        }}
        onPress={() => navigation.navigate('Portfolio')}
        >
          <Text style={{color:"black",fontSize:25,fontWeight:'600'}}>Hire Me</Text>
        </TouchableOpacity>
        <View style={{ flexDirection: 'row',marginTop:20,
         }}>
        <Entypo name="facebook" size={44} color="#FFBF00" />
                  <Text style={{ textAlign: 'center',
                  color:"white",marginTop:13,
                   }}>Facebook</Text>
                </View>
                <View style={{ flexDirection: 'row',marginTop:10,
         }}>
        <Entypo name="instagram" size={44} color="#FFBF00" />
                  <Text style={{ textAlign: 'center',
                  color:"white",marginTop:13,
                   }}> Instagram</Text>
                </View>
                <View style={{ flexDirection: 'row',marginTop:10,
         }}>
       <AntDesign name="linkedin-square" size={44} color="#FFBF00" />
                  <Text style={{ textAlign: 'center',marginTop:13,
                  color:"white",
                   }}> Linkedin</Text>
                </View>
                <View style={{ flexDirection: 'row',marginTop:10,
         }}>
                <AntDesign name="github" size={44} color="#FFBF00" />
                  <Text style={{ textAlign: 'center',marginTop:13,
                  color:"white",
                   }}> Linkedin</Text>
                </View>
                <View style={{ flexDirection: 'row',marginTop:10,
         }}>
                <AntDesign name="twitter" size={44} color="#FFBF00" />
                  <Text style={{ textAlign: 'center',marginTop:13,
                  color:"white",
                   }}> Twitter</Text>
                </View>
                
      </View>
      
    </ImageBackground>
     
    );
  }
  export default HomeScreen;
  // styling
  const styles = StyleSheet.create({
    background: {
      flex: 1,
     
    },
    container: {
      flex: 1,
      
      backgroundColor: 'rgba(0,0,0, 0.7)',
      justifyContent: "center",
      alignItems: "center",
    },
    text: {
      marginTop:197,
      fontSize: 40,
      color:'white',
    },
  });