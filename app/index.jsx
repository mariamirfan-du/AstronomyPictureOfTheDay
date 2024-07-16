import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Link } from 'expo-router'

export default function App() {
  return (
    <View style={styles.container} className='flex-1 items-center justify-center bg-purple'>
      <Text className="text-3x1">Stargazer's Daily</Text>
      <StatusBar style="auto" />
        <Link href="/APOD" style={{ color: 'blue'}}>View Today's</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
