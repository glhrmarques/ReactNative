import React, { Component, Fragment } from 'react';
import { Text, View, StyleSheet, StatusBar, SafeAreaView, ScrollView } from 'react-native';  
import Content from './components/Content';


const ScreenApp = () => {   
 

  return(
    <Fragment>
      <StatusBar barStyle='light-content' />
      <SafeAreaView style={{flex: 0, backgroundColor: '#3d3d3d'}} />
      <SafeAreaView style={{flex: 1, backgroundColor: '#3d3d3d'}}>
      <ScrollView
      showsVerticalScrollIndicator={false}>
          <Content 
          title01={'Awesome Title'}
          body01={'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.'}
          />

          <Content 
          title01={'Another Awesome Title'}
          body01={'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.'}
          />

          <Content 
          title01={'Awesome Title'}
          body01={'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.'}
          />

          <Content 
          title01={'Another Awesome Title'}
          body01={'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.'}
          />

          <Content 
          title01={'Another Awesome Title'}
          body01={'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.'}
          />

          <Content 
          title01={'Another Awesome Title'}
          body01={'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.'}
          />

          <Content 
          title01={'Another Awesome Title'}
          body01={'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.'}
          />
      </ScrollView>
      


      </SafeAreaView>
    </Fragment>
  )
};

const styles = StyleSheet.create({
  ContentWrapper: {
    flex: null,
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

export default ScreenApp;