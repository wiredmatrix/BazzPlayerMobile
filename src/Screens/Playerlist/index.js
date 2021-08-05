import { ListItem } from '@ui-kitten/components';
import React, { useEffect, useState } from 'react';
import { View, SafeAreaView, FlatList, TextInput, TouchableOpacity, Button } from 'react-native';
import songs from '../../SongData';
import Sound from 'react-native-sound';
import { Avatar, Text } from '@ui-kitten/components';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Auth } from 'aws-amplify';

import styles from './styles';

const Playerlist = ({ updateAuthState  }) => {
  const [filteredData, setFilteredData] = useState([])
  const [masterData, setMasterData] = useState([])
  const [search, setSearch] = useState('')
  
  const [isDisabled, setisDisabled] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isPlayed, setIsPlayed] = useState(false);

  async function signOut() {
    try {
      await Auth.signOut();
      updateAuthState('loggedOut');
    } catch (error) {
      console.log('Error signing out: ', error);
    }
  }
  
  useEffect(() => {
    setMasterData(songs)
    setFilteredData(songs)
  }, [])

  const searchFilter = (text) =>{
    if (text) {
      const newData = masterData.filter((item)=>{
        const itemData = item.title?item.title.toUpperCase()
                      :''.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData)> -1;
      });
      setFilteredData(newData);
      setSearch(text);
    }else{
      setFilteredData(masterData);
      setSearch(text);
    }
  }
  

  let sound;
  
  const playSound =(item, id)=>{
    console.log("the url is "+ item.url);
  if(item.url !=1){
      sound = new Sound(item.url, '', (error, _sound) => {
          if (error) {
            alert('error' + error.message);
            return;
          }
          stopSound
          sound.play(() => {
              setisDisabled(true)
            sound.release();
          });
        });
  }else{
  sound = new Sound(item.url, (error, _sound) => {
      if (error) {
        alert('error' + error.message);
        return;
      }
      stopSound
      sound.play(() => {
          setisDisabled(true)
        sound.release();
      });
    });
  }
}

  const stopSound =(index)=>{
    setisDisabled(false)
    sound.stop(() => {
        console.log('Stop');
      });
}

  const ItemView =({item, index}) =>{
    return(
      <>
      <View style={{flexDirection: 'row'}}>
        <Avatar
            source={{ uri: item.picture }}
            style={{ margin: 7 }} 
            size='giant'
        />  
          <View style={{flex: 3}}>
            <Text style={styles.itemStyle} category='s1'>
              {item.title.toUpperCase()}
            </Text>
          </View>
          <Text 
          style={{ 
            color: '#444',
            fontSize: 11,
            position: 'absolute', 
            marginLeft: '22%', 
            marginVertical: 30, 
            // bottom: 27 
          }}
          category='s1'
          >{item.ArtistName} 
        </Text>
        <Text 
          style={{ 
            color: '#999',
            position: 'absolute', 
            marginLeft: '22%',
            marginVertical: 40,
            fontStyle: 'italic',
            // top: 10
          }}
          category='s1'
          >Genre: {item.genre} 
        </Text>
          
            <View style={{flex: 1, flexDirection: 'row', marginRight: 15}}>
              <TouchableOpacity
                onPress={()=>playSound(item, index)} 
                style={{ padding: 10,}}
              >
                <Ionicons name="play" color={isPlayed ? 'red' : '#555555'} size={22} />
                
              </TouchableOpacity>
              <TouchableOpacity 
                onPress={()=>stopSound(index)} 
                style={{ padding: 10,}}
              >
                <Ionicons name="stop" color="#555555" size={22} />
              </TouchableOpacity>
            </View>
          </View>
      </>
    )
  }

  const ItemSeparatorView =()=>{
    return(
      <View
      style={{height: 0.55, width: '100%', backgroundColor: '#c8c8c8'}}/>
    )
  }
  return (
      <SafeAreaView style={{flex: 1}}>
        <View style={styles.container}>
          <Button title="Sign Out" color="#E080B4" onPress={signOut} />
          <TextInput
            style={styles.textInputStyle}
            value={search}
            placeholder="Search Music"
            underlineColorAndroid="transparent"
            onChangeText={(text)=> searchFilter(text)}
          /> 
          <FlatList
            data={filteredData}
            keyExtractor={(item, index)=> index.toString()}
            ItemSeparatorComponent={ItemSeparatorView}
            renderItem={ItemView}
            />
        </View>
      </SafeAreaView>
    
    
  );
};

export default Playerlist;