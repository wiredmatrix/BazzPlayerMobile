import React, {useEffect, useState} from 'react';
import { View, TouchableOpacity, Modal, Alert, FlatList } from 'react-native';
import { Avatar, Text, Button } from '@ui-kitten/components';
import styles from './styles';
import { API, graphqlOperation } from 'aws-amplify';
import { listUsers } from '../../graphql/queries';
import ContactListItems from '../ContactListItems';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign'
import { Auth } from 'aws-amplify';
import { useNavigation } from '@react-navigation/native';


const Profile = () => {
    const [isvisible, setIsVisible] = React.useState(false);
    const [users, setUsers] = useState([]);

    const navigation = useNavigation();

    async function signOut() {
        try {
          await Auth.signOut();
          updateAuthState('loggedOut');
        } catch (error) {
          console.log('Error signing out: ', error);
        }
      }

    useEffect(() => {
        const fetchUsers = async () => {
            try {

                const usersData = await API.graphql(
                    graphqlOperation(
                        listUsers
                    )
                )
                setUsers(usersData.data.listUsers.items);

            } catch (e) {
                console.log(e);
            }
        }
        fetchUsers();
    }, [])

    const ItemSeparatorView =()=>{
        return(
          <View
          style=
            {{
                height: 0.55, 
                width: '80%', 
                backgroundColor: '#c8c8c8',
                marginVertical: 40,
                elevation: 1
            }}/>
        )
      }

    return (
        <View style={styles.container}>
            <TouchableOpacity style={{marginHorizontal: 20, position: 'absolute', right: 10, marginVertical: 10}} onPress={signOut}>
                <AntDesign name='logout' size={25} color='#E03E48' />
            </TouchableOpacity>

            <TouchableOpacity style={{marginHorizontal: 20, position: 'absolute', right: 45, marginVertical: 170}} onPress={() => navigation.navigate("LiveStreamingScreen")}>
                <MaterialIcons name='stream' size={25} color='#9245B4' />
            </TouchableOpacity>
            
            <Avatar 
                style={styles.avater}
                size='giant'
                source={require('../../../assets/img/Austin.png')}
            />

            <View style={styles.profilename}>
                <Text style={styles.profilenametxt} category='label'>Austin Okolie</Text>
            </View>

            <ItemSeparatorView />

            <View>
                <TouchableOpacity>
                    <Button 
                        appearance='ghost'
                        onPress={() => setIsVisible(true)}
                        >
                            Contacts
                    </Button>
                </TouchableOpacity>
                

                <Modal 
                    visible={isvisible}
                    animationType="slide"
                    transparent={false}
                    onRequestClose={() => {
                        Alert.alert("close contacts!");
                        setIsVisible(!isvisible);
                    }}
                >
                    <View style={{flex: 1, justifyContent: 'space-around', position: 'absolute'}}>
                        <FlatList
                            style={{ width: '100%', margin: 5, paddingVertical: 15, alignContent: 'space-around' }}
                            data={users}
                            renderItem={({ item }) => <ContactListItems user={item} />}
                            keyExtractor={(item) =>item.id}
                        />
                    </View>
                    <TouchableOpacity onPress={() => setIsVisible(!isvisible)} style={{ flex: 1, position: 'absolute', left: 270, paddingVertical: 5 }}>
                        <MaterialCommunityIcons name='close-circle-outline' size={25} color='purple' />
                    </TouchableOpacity>
                </Modal>
            </View>
        </View>
    );
}

export default Profile;