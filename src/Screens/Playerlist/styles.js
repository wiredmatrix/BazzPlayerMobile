import { StyleSheet, StatusBar, Dimensions } from 'react-native';

const styles = StyleSheet.create({
    container: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
        backgroundColor: '#fff',
      },

      itemStyle:{
        padding: 15,
        marginHorizontal: -15
      },

      textInputStyle:{
        height: 50,
        borderWidth: 0.5,
        borderRadius: 20,
        paddingLeft: 20,
        margin: 5,
        borderColor: '#009688',
        backgroundColor: 'white'
      },

      item: {
        flexDirection: 'row',
        padding: 20,
        // marginVertical: '5%',
        marginHorizontal: '4%',
      },
      title: {
        fontSize: 20,
        color: '#000'
      },
});

export default styles;