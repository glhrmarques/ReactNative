import React from 'react';
import { Text, StyleSheet, View, SafeAreaView, StatusBar, FlatList, ScrollView } from 'react-native';
import { Header } from './components/Header';
import { IconCarousel } from './components/IconCarousel';




export default function App() { 
  
  return ( 


    <>
      <SafeAreaView style={{flex:0, backgroundColor: '#7f8c8d'}} />
        <StatusBar barStyle='light-content' />

      <SafeAreaView style={{flex:1, backgroundColor: '#fafafa'}}>
      

        <View style={styles.contentWrapper}>
          <ScrollView
            showsVerticalScrollIndicator={false}
          >
            <Header />
            <IconCarousel />
            <View style={{borderBottomWidth:1, marginTop: 32, marginHorizontal: 16, opacity: 0.1}}/>
            <View style={styles.textContainer}>
              <Text style={styles.headline}>Lovely Title</Text>
              <Text style={styles.bodytext}>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
              </Text>
              <Text style={styles.bodytext}>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
              </Text>
            </View>
          </ScrollView>
        </View>

      </SafeAreaView>
    </>
  );
}


const styles = StyleSheet.create ({
  contentWrapper: {
  backgroundColor: '#fafafa',
  },


  textContainer: {
    paddingHorizontal: 20,
  },

  headline: {
    marginVertical: 20,
    fontSize: 24,
    fontWeight: 'bold',
    color: '#3d3d3d',
  },

  bodytext: {
    lineHeight: 28,
  },

});

