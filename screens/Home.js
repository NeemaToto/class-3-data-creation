import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Button } from 'react-native';
import { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';


export default function Home({ navigation }) {
    const [number, setNumber] = useState(1)

    function check() {
            navigation.push('About')
    }

    return (
        <SafeAreaView style={styles.container}>
                <Button onPress={() => check()} title="Press me to continue" />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    }
   
});
