import { StyleSheet, Text, ScrollView,View, TouchableOpacity } from 'react-native'
import React from 'react'

const Portfolio = ({navigation}) => {
  return (
    <ScrollView>
    <View style={{backgroundColor:"#B0BF1A",borderRadius:50}}>
      <Text style={{textAlign:'center',
      fontSize:45,fontWeight:"600",
      marginTop:10,
textDecorationLine:'underline'
      }}>Portfolio</Text>
      
      <Text style={{textAlign:'center',
      fontSize:35,fontWeight:"600",
      color:'green'
      }}>Skills</Text>
      <View style={{flexDirection:"row"}}>
        <Text style={{marginRight:10,marginLeft:10,
        fontSize:25,
        fontWeight:'600'
        }}>JavaScript</Text>
        <View style={{width:250,borderWidth:2,height:20,
        borderRadius:30,marginTop:10,
        marginBottom:20,
        fontWeight:'600',
        }}>
<Text style={{backgroundColor:'white', borderRadius:30,
paddingLeft:10,textAlign:'center',fontWeight:'600'
}}>60%</Text>
        </View>

      </View>


      <View style={{flexDirection:"row"}}>
        <Text style={{marginRight:10,marginLeft:10,
        fontSize:20,
        marginTop:5,
        fontWeight:'600'
        }}>React Native</Text>
        <View style={{width:250,borderWidth:2,height:20,
        borderRadius:30,marginTop:10,
        marginBottom:20,
        fontWeight:'600',
        }}>
<Text style={{backgroundColor:'white', borderRadius:30,
paddingLeft:10,textAlign:'center',fontWeight:'600'
}}>50%</Text>
        </View>
        
      </View>
      <View style={{flexDirection:"row"}}>
        <Text style={{marginRight:10,marginLeft:10,
        fontSize:25,
        fontWeight:'600'
        }}>FireBase</Text>
        <View style={{width:250,borderWidth:2,height:20,
        borderRadius:30,marginTop:10,
        marginBottom:20,
        fontWeight:'600',
        }}>
<Text style={{backgroundColor:'white', borderRadius:30,
paddingLeft:10,textAlign:'center',fontWeight:'600'
}}>40%</Text>
        </View>
        </View>
      <View style={{flexDirection:"row"}}>
        <Text style={{marginRight:10,marginLeft:10,
        fontSize:25,
        fontWeight:'600'
        }}>Reactjs</Text>
        <View style={{width:250,borderWidth:2,height:20,
        borderRadius:30,marginTop:10,
        marginBottom:20,
        fontWeight:'600',
        }}>
<Text style={{backgroundColor:'white', borderRadius:30,
paddingLeft:10,textAlign:'center',fontWeight:'600'
}}>40%</Text>
        </View>
        </View>

      <View style={{flexDirection:"row"}}>
        <Text style={{marginRight:10,marginLeft:10,
        fontSize:25,
        fontWeight:'500'
        }}>Html</Text>
        <View style={{width:250,borderWidth:2,height:20,
        borderRadius:30,marginTop:10,
        marginBottom:20,
        fontWeight:'600',
        }}>
<Text style={{backgroundColor:'white', borderRadius:30,
paddingLeft:10,textAlign:'center',fontWeight:'600'
}}>80%</Text>
        </View>
        

      </View>


      <View style={{flexDirection:"row"}}>
        <Text style={{marginRight:10,marginLeft:10,
        fontSize:25,
        fontWeight:'600'
        }}>CSS</Text>
        <View style={{width:250,borderWidth:2,height:20,
        borderRadius:30,marginTop:10,
        marginBottom:20,
        fontWeight:'600',
        }}>
<Text style={{backgroundColor:'white', borderRadius:30,
paddingLeft:10,textAlign:'center',fontWeight:'600'
}}>70%</Text>
        </View>
        
      </View>

      <View style={{flexDirection:"row"}}>
        <Text style={{marginRight:10,marginLeft:10,
        fontSize:25,
        fontWeight:'600'
        }}>NodeJs</Text>
        <View style={{width:250,borderWidth:2,height:20,
        borderRadius:30,marginTop:10,
        marginBottom:20,
        fontWeight:'600',
        }}>
<Text style={{backgroundColor:'white', borderRadius:30,
paddingLeft:10,textAlign:'center',fontWeight:'600'
}}>50%</Text>
        </View>
        
      </View>

      <View style={{flexDirection:"row"}}>
        <Text style={{marginRight:10,marginLeft:10,
        fontSize:25,
        fontWeight:'600'
        }}>C++</Text>
        <View style={{width:250,borderWidth:2,height:20,
        borderRadius:30,marginTop:10,
        marginBottom:20,
        fontWeight:'600',
        }}>
<Text style={{backgroundColor:'white', borderRadius:30,
paddingLeft:10,textAlign:'center',fontWeight:'600'
}}>40%</Text>
        </View>
        </View>
        <View style={{flexDirection:"row"}}>
        <Text style={{marginRight:10,marginLeft:10,
        fontSize:25,
        fontWeight:'600'
        }}>Git</Text>
        <View style={{width:250,borderWidth:2,height:20,
        borderRadius:30,marginTop:10,
        marginBottom:20,
        fontWeight:'600',
        }}>
<Text style={{backgroundColor:'white', borderRadius:30,
paddingLeft:10,textAlign:'center',fontWeight:'600'
}}>40%</Text>
        </View>
        </View>
        <View style={{flexDirection:"row"}}>
        <Text style={{marginRight:10,marginLeft:10,
        fontSize:25,
        fontWeight:'600'
        }}>GitHub</Text>
        <View style={{width:250,borderWidth:2,height:20,
        borderRadius:30,marginTop:10,
        marginBottom:20,
        fontWeight:'600',
        }}>
<Text style={{backgroundColor:'white', borderRadius:30,
paddingLeft:10,textAlign:'center',fontWeight:'600'
}}>40%</Text>
        </View>
        </View>
        <View style={{flexDirection:"row"}}>
        <Text style={{marginRight:10,marginLeft:10,
        fontSize:25,
        fontWeight:'600'
        }}>Bootstrap</Text>
        <View style={{width:250,borderWidth:2,height:20,
        borderRadius:30,marginTop:10,
        marginBottom:20,
        fontWeight:'600',
        }}>
<Text style={{backgroundColor:'white', borderRadius:30,
paddingLeft:10,textAlign:'center',fontWeight:'600'
}}>40%</Text>
        </View>
        </View>
        <View style={{flexDirection:"row"}}>
        <Text style={{marginRight:10,marginLeft:10,
        fontSize:25,
        fontWeight:'600'
        }}>Word</Text>
        <View style={{width:250,borderWidth:2,height:20,
        borderRadius:30,marginTop:10,
        marginBottom:20,
        fontWeight:'600',
        }}>
<Text style={{backgroundColor:'white', borderRadius:30,
paddingLeft:10,textAlign:'center',fontWeight:'600'
}}>40%</Text>
        </View>
        </View>
        <View style={{flexDirection:"row"}}>
        <Text style={{marginRight:10,marginLeft:10,
        fontSize:25,
        fontWeight:'600'
        }}>Excel</Text>
        <View style={{width:250,borderWidth:2,height:20,
        borderRadius:30,marginTop:10,
        marginBottom:20,
        fontWeight:'600',
        }}>
<Text style={{backgroundColor:'white', borderRadius:30,
paddingLeft:10,textAlign:'center',fontWeight:'600'
}}>40%</Text>
        </View>

        </View>
        <View style={{flexDirection:"row"}}>
        <Text style={{marginRight:10,marginLeft:10,
        fontSize:25,
        fontWeight:'600'
        }}>PowerPoint</Text>
        <View style={{width:220,borderWidth:2,height:20,
        borderRadius:30,marginTop:10,
        marginBottom:20,
        fontWeight:'600',
        }}>
<Text style={{backgroundColor:'white', borderRadius:30,
paddingLeft:10,textAlign:'center',fontWeight:'600'
}}>40%</Text>
        </View>
        </View>
        <View style={{flexDirection:"row"}}>
        <Text style={{marginRight:10,marginLeft:10,
        fontSize:25,
        fontWeight:'600'
        }}>Communication</Text>
        <View style={{width:170,borderWidth:2,height:20,
        borderRadius:30,marginTop:10,
        marginBottom:20,
        fontWeight:'600',
        }}>
<Text style={{backgroundColor:'white', borderRadius:30,
paddingLeft:10,textAlign:'center',fontWeight:'600'
}}>50%</Text>
        </View>
        </View>
        <View style={{flexDirection:"row"}}>
        <Text style={{marginRight:10,marginLeft:10,
        fontSize:25,
        fontWeight:'600'
        }}>OPP</Text>
        <View style={{width:250,borderWidth:2,height:20,
        borderRadius:30,marginTop:10,
        marginBottom:20,
        fontWeight:'600',
        }}>
<Text style={{backgroundColor:'white', borderRadius:30,
paddingLeft:10,textAlign:'center',fontWeight:'600'
}}>40%</Text>
        </View>
        </View>
      </View>
      <Text style={{backgroundColor:'white', borderRadius:30,
paddingLeft:10,textAlign:'center',fontWeight:'600',fontSize:25}}>Click To Check My<Text style={{color:"orange",fontSize:35,}}> Education</Text></Text>
    <TouchableOpacity style={{backgroundColor:"#FFBF00",
        padding:15,
        alignItems:'center',
        marginLeft:100,
        width:200,
        marginTop:10,
        borderRadius:50,
  
        }}
        onPress={() => navigation.navigate('CV')}
        >
          <Text style={{color:"black",fontSize:25,fontWeight:'600'}}>Education</Text>
        </TouchableOpacity>
        <Text style={{textAlign:'center',fontSize:30,color:"green",
        marginTop:20,
        marginBottom:20,
        fontWeight:'600'
        }}>Certification</Text>
         <Text style={{textAlign:'center',fontSize:20,color:"green",
        marginTop:10,
        marginBottom:20,
        fontWeight:'600'
        }}>JavaScript Basics(<Text  style={{fontSize:20,color:"darkblue"}}>Coursera</Text>)</Text>
   
    </ScrollView>
  )
}

export default Portfolio;

const styles = StyleSheet.create({})