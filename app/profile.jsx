import { StyleSheet, Text, View } from 'react-native'
import React , {useState} from 'react'
import { Link } from 'expo-router'
import { getFormatedDate } from 'react-native-modern-datepicker';
import { Calendar } from 'react-native-calendars';
import { SafeAreaView } from 'react-native-safe-area-context';


const profile = () => {

  const today = new Date();

  const startDate = getFormatedDate(today.setDate(today.getDate() + 1) , 'YYYY/MM/DD')

  const [open , setOpen] = useState(false) // open and closes the modal
  const [date , setDate] = useState() // date variable

  function handleOnPress(){
    setOpen(!open);
  }

  function handleChange(propDate){
    setDate(propDate)
  }


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calendar</Text>
          <SafeAreaView>

          <Calendar
          //minimumDate={startDate}
          style={styles.calendar}
          theme={{
             monthTextColor: '#2B2436',
             textMonthFontSize: 30,
             textMonthFontWeight: 'bold',
             arrowColor: '#2B2436',
             calendarBackground:'white',
             todayTextColor: '#00adf5',
             textSectionTitleColor:'purple',
             textInactiveColor:'purple',
             textDayFontWeight:'bold',
             textDisabledColor:'grey',
             selectedDayBackgroundColor:'#65558F',
             selectedDayTextColor:'white',






          }}
          onMonthChange={() => {}}
          selected={startDate}
          onDayPress={day => {
            setDate(day.dateString);
          }}
          markedDates={{
            [date]: {selected: true, disableTouchEvent: true, selectedDotColor: 'purple'}
          }}
          />
          </SafeAreaView>

          
    </View>

  )
}

export default profile

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#2B2436',
    },
    title:{
      fontSize: 40,
      color: '#99EBDC',
      fontWeight: 'bold',
      alignSelf:'center',
      marginBottom:10,
      marginTop:10,
      padding:15,
    },
    text: {
      marginTop:30,
      fontSize: 14,
      color: '#99EBDC',
      textAlign:'center',
      position: 'absolute',
      marginBottom:5
    },

    link:{
      color:'#99EBDC',
      marginTop:40 
    },

    modalView:{
      margin:20,
      backgroundColor:'white',
      borderRadius:20,
      width:'98%',
      padding:35,
      alignItems:'center',
      shadowColor:'#000',
      shadowOffset:{
        width:0,
        height:2,
      },
      shadowOpacity:0.25,
      shadowRadius:4,
      elevation: 5,
    },

    centeredView:{
      flex:1,
      justifyContent:'center',
      alignItems:'center',
      marginTop:22,
    },
    calendar:{
      backgroundColor:'white',
      borderWidth:1,
      borderColor:'white',
      borderRadius:15,
      padding:35,
      margin:25,



    }

});