import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';
import { Link , useRouter } from 'expo-router'
import * as SplashScreen from 'expo-splash-screen'
import { useFonts } from 'expo-font';
import { useEffect } from 'react';

SplashScreen.preventAutoHideAsync();

const App = ({navigation}) => {
  const [loaded, error] = useFonts({
    'Trispace': require("../assets/fonts/Trispace-VariableFont_wdth,wght.ttf")
  })

  function handletap(){
    navigation.navigate('calendarInstance')
  }

  useEffect(() => {
    if(!loaded || !error){
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if(!loaded && !error){
    return null;
  }

  return (
    <TouchableWithoutFeedback onPress={handletap}>
      <View style={styles.container}>
        <Text style={styles.title}>Stargazer's</Text>
        <Text style={styles.title}>Daily</Text>
        <StatusBar style="auto" />
        <Text style= {styles.tapText}>Tap anywhere to continue</Text>
    </View>
      
    </TouchableWithoutFeedback>

    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2B2436',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title:{
    fontSize: 40,
    color: '#99EBDC',
    fontWeight: 'bold',
    mariginBottom:10,
    fontFamily: 'Trispace'
  },
  tapText: {
    marginTop:20,
    fontSize: 14,
    color: '#99EBDC',
    textAlign:'center',
    bottom: 100,
    position: 'absolute',
    fontFamily: 'Trispace'
  },

});

export default App