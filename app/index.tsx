import { View, Text, Button, StyleSheet, ScrollView } from 'react-native';
import { Link, useRouter } from 'expo-router';

export default function Home() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <Button title="Go to Details" onPress={() => router.push('/')} />

      
      <View style={styles.section}>
        <Text style={styles.header}>First</Text>
        <ScrollView horizontal style={styles.scrollView} contentContainerStyle={styles.contentContainer}>
          {Array.from({ length: 20 }, (_, index) => (
            <View key={index} style={styles.item}>
              <Text style={styles.text}>Item {index + 1}</Text>
            </View>
          ))}
        </ScrollView>
      </View>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  item: {
    width: 130,
    height: 130,

    backgroundColor: 'red',
    marginVertical: 10,
    marginRight: 15,
  },
  contentContainer: {
    flexDirection: 'row',
  },
  scrollView: {
    marginBottom: 20,
  },
  text: {
    color: 'black',
    fontSize: 20,
  },
  section: {
    marginHorizontal: 15,
},

});
