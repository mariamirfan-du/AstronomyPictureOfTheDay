import { StyleSheet, Text, View, Image, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios'

const APOD = () => {
  const [apodData, setApodData] = useState(null);
  const [loading, setLoading] = useState(null);

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
    return <ActivityIndicator size="large" color="#0000ff"/>
  }

  return (
    <View>
      {apodData ? (
        <>
          <Text>{apodData.title}</Text>
          <Image source={{ uri: apodData.url }}/>
          <Text>{apodData.explanation}</Text>
        </>
      ) : (
        <Text>Failed to Fetch Data</Text>
      )}
    </View>
  );
};

export default APOD

const styles = StyleSheet.create({})