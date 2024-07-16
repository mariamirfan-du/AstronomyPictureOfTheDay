import { StyleSheet, Text, View, Image, ActivityIndicator, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { StatusBar } from 'expo-status-bar';

const APOD = () => {
  const [apodData, setApodData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [todaysDate, setTodaysDate] = useState(new Date().toDateString());

  useEffect(() => {
    const fetchApod = async () => {
      try{
        const response = await axios.get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY");
        setApodData(response.data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchApod();
  }, []);

  if (loading){
    return <ActivityIndicator style={styles.container} size="large" color="#88cbc4"/>
  }

  return (<>
    <View style={styles.container}>
        <ScrollView style={styles.innerDiv}>
          {apodData ? (
            <>
              <Text style={styles.dateStyle}>{todaysDate}</Text>
              <Text style={styles.copyrightStyle}>{apodData.copyright}</Text>
              <Image style={styles.image} source={{ uri: apodData.url }}/>
              <Text style={styles.headingStyle}>{apodData.title}</Text>
              <Text style={styles.textStyle}>{apodData.explanation}</Text>
            </>
          ) : (
            <Text style={styles.textStyle}>Failed to Fetch Data</Text>
          )}
        </ScrollView>
    </View>
  </>
  );
};

export default APOD

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#2b2436',
    flex: 1,
    justifyContent: "center" 
  },
  textStyle: {
    color: "#88cbc4",
    marginBottom: 40,
  },
  dateStyle : {
    color: "#88cbc4",
    fontSize: 11,
    textAlign: "right",
  },
  headingStyle: {
    color: "#88cbc4",
    fontSize: 20,
    fontWeight: "bold",
  },
  copyrightStyle: {
    color: "#88cbc4",
    fontSize: 10,
  },
  image: {
    width: '100%',
    height: 300,
    marginBottom: 20,
    borderRadius: 15,
  },
  innerDiv: {
    marginBottom: 50,
    marginTop: 50,
    marginLeft:10,
    marginRight:10,
    backgroundColor: "#180036",
    borderRadius: 15,
    padding: 20,
    paddingBottom: 20,
  },
})