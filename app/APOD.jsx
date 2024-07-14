import { StyleSheet, Text, View, Image, ActivityIndicator, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios'

const APOD = () => {
  const [apodData, setApodData] = useState(null);
  const [loading, setLoading] = useState(true);
  const todaysDate = useState(new Date().toDateString());

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
    return <ActivityIndicator style={styles.container} size="large" color="#0000ff"/>
  }

  return (<>
    <View style={styles.container}>
      <ScrollView style={styles.innerDiv}>
        {apodData ? (
          <>
            <Text style={styles.textStyle}>{todaysDate}</Text>
            <Text style={styles.textStyle}>{apodData.copyright}</Text>
            <Image style={styles.image} source={{ uri: apodData.url }}/>
            <Text style={styles.textStyle}>{apodData.title}</Text>
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
  }
})