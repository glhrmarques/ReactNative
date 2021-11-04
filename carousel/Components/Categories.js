import React from 'react';
import {View, Text, Image, StyleSheet, ScrollView} from 'react-native';

export default function Categories(){
    
    //Array - Categories contents

    const pages = [
        { image: require('../assets/memoji.jpg'), text: 'Page 01' },
        { image: require('../assets/memoji.jpg'), text: 'Page 02' },
        { image: require('../assets/memoji.jpg'), text: 'Page 03' },
        { image: require('../assets/memoji.jpg'), text: 'Page 04' },
        { image: require('../assets/memoji.jpg'), text: 'Page 05' },
        { image: require('../assets/memoji.jpg'), text: 'Page 06' },
        { image: require('../assets/memoji.jpg'), text: 'Page 07' },
    ]
    
    
    return (
        <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        >
            {pages.map((item,index) => (
                <View key={index}style={styles.contentWrapper}>
                    <Image style={styles.contentImage} source={item.image} />
                    <Text style={styles.contentText}>{item.text}</Text>
                </View>
             ))}
        </ScrollView>

        
    )
}

const styles = StyleSheet.create({

    contentWrapper: {
        alignItems: 'center',
    },

    contentImage: {
        width: 120,
        height: 120,
    },

    contentText: {
        fontWeight: 'bold',
        fontSize: 16,
    },
})
