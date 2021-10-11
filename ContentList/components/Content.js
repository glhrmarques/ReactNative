import React, { Component, Fragment } from 'react';
import { Text, View, StyleSheet, StatusBar, SafeAreaView } from 'react-native';  
  
const Content = (props) => {   
  
  return(
        <View style={styles.ContentWrapper}>

            <View style={styles.contentSection}>
                <View style={styles.image} />
                <View style={{flex: 2,}}>
                    <Text style={styles.textHeader}>{props.title01}</Text>
                    <Text style={styles.textBody}>{props.body01}</Text>
                </View>
            </View>
            <View style={styles.border} />
        </View> 
  );
};

const styles = StyleSheet.create({
  ContentWrapper: {
    marginVertical: 12,
    
  },

  image: {
    flex: 1,
    height: 'auto',
    backgroundColor: '#fafafa',
    marginRight: 14,
    borderRadius: 8,
  },

  contentSection: {
    paddingHorizontal:16,
    marginBottom: 24,
    flexDirection: 'row',
    backgroundColor: null,
  },

  border: {
   borderBottomWidth: 1,
   borderBottomColor: '#fafafa',
   opacity: 0.1,
  },
  
  textHeader: {
    color: '#fafafa',
    marginBottom: 9,
    fontWeight: 'bold',
    fontSize: 20,
  },

  textBody: {
    color: '#fafafa',
    fontSize: 16,

  },
});

export default Content;