import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { bookStore } from '../data/books';
import { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Card } from '@rneui/themed';

export default function About({ navigation }) {
    const [data, setData] = useState();

    function addingData() {
        console.log('started')
        setData(bookStore);
    }

    return (

        <SafeAreaView style={styles.container}>
            <Text>Press the button to see books relating to: Java</Text>
            <Button onPress={() => addingData()} title='Show Book(s)' />
            <Card>
                {
                    data && data.books.map((b, index) => {
                        if (b.category.toLowerCase() == 'java') {
                            return (
                                <View key={index}>
                                    <Text style={styles.title}>{b.title}</Text>
                                    {
                                        b.authors && b.authors.map((a, ind) => {
                                            return (
                                                <View key={ind}><Text style={styles.subtitles}>{a}</Text></View>
                                            )
                                        })
                                    }
                                </View>
                            )
                        }
                    })
                }
            </Card>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 30,
    },
    subtitles: {
        fontSize: 15,
        textAlign: 'center',
        fontStyle: 'italic'
    }
});
