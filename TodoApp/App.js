import React, {useState} from 'react';
import { Text, View, SafeAreaView, StatusBar, StyleSheet, FlatList} from 'react-native';
import Header from './components/Header';
import ItemList from './components/ItemList';


export default function App() {
  
  const [todos, setTodos] = useState([
    { text:'Something 001', key: 1},
    { text:'Something 002', key: 2},
    { text:'Something 003', key: 3},
    { text:'Something 004', key: 4},
    { text:'Something 005', key: 5},
    { text:'Something 006', key: 6},
  ]);

  return (
    <>
      <SafeAreaView style={{flex: 0, backgroundColor: '#3d3d3d'}} />
      <StatusBar barStyle='light-content'/>
      <SafeAreaView style={{flex:1}}>
      
        {/*Header*/}
        <Header pageName={'Page Name'} />
        <View style={styles.pageContent}>
          <View style={styles.listWrapper}>
          <FlatList 
            data={todos}
            renderItem={({ item }) => (
              <ItemList item={item}/>
            )}
          />
        </View>
        </View>

      </SafeAreaView>
    </>
  )
};

const styles = StyleSheet.create({
  listWrapper: {
  }

})