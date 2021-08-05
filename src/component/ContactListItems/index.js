import React from 'react';
import { View, Image, Text, TouchableOpacity, Dimensions } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation } from '@react-navigation/native';


export type ContactsListItemProps = {
    user: User;
}

export type User = {
    id: String;
    name: String;
    imageUri: String;
    status: String;
}
const ContactListItems = (props: ContactsListItemProps) => {
    const { user } = props

    const navigation = useNavigation();

    return (
        <View 
            style=
                {{ 
                    flex: 1,
                    flexDirection: 'row', 
                    width: Dimensions.get('window').width - 20, 
                    // height: Dimensions.get('window').height,
                    marginVertical: 10,
                }}
        >
            <Image source={{ uri: user.imageUri }} style={{ width: 60, height: 60, borderRadius: 50, marginRight: 10 }} />
            <View style={{flex: 1, position: 'relative'}}>
                <Text style={{ fontWeight: 'bold', fontSize: 16 }}>{user.name}</Text>
                <Text style={{ color: 'grey', fontSize: 16 }}>{user.status}</Text>
            </View>
            <View style={{justifyContent: 'space-between', flexDirection: 'row'}}>
                <TouchableOpacity style={{ marginHorizontal: 7 }} onPress={() => navigation.navigate("VideoP2PCall")}>
                    <MaterialCommunityIcons name='video-outline' size={25} color='#3E3E3E' />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate("VideoGroupCall")}>
                    <MaterialCommunityIcons name='video-plus-outline' size={25} color='#3E3E3E' />
                </TouchableOpacity>
            </View>
            
        </View>
    );
}

export default ContactListItems;