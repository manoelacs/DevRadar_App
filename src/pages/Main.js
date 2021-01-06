import { getCurrentPositionAsync, requestPermissionsAsync } from 'expo-location';
import React, { useEffect , useState }from 'react';
import {View, StyleSheet, Image, Text} from 'react-native';
import MapView, { Marker , Callout } from 'react-native-maps';

const Main = ({navigation}) => {
    const [currentRegion, setCurrentRegion ] = useState(null);

    useEffect(() =>{
        async function loadInitalPosition() {
            const {granted} =  await requestPermissionsAsync();    
            if(granted) {
                const { coords } = await getCurrentPositionAsync({
                    anableHighAccuracy: true, 
                });
                const { latitude, longitude } = coords;
                setCurrentRegion({
                    latitude,
                    longitude,
                    latitudeDelta: 0.04 ,
                    longitudeDelta: 0.04,
                });
            }      
        } loadInitalPosition();

    }, []);

    if(!currentRegion){
        return null;
    }
 
    return (           
        <MapView initialRegion = {currentRegion} style={styles.map}> 
            <Marker coordinate={{ latitude: -9.5937012, longitude: -35.7794636 }} >
                <Image style={styles.avatar} source={{ uri: 'https://avatars0.githubusercontent.com/u/20269170?s=460&u=e37d7d68b69192e6a30b1f56f110dd3ba1dc3cc3&v=4'}}></Image>
                <Callout onPress = { () => {
                    navigation.navigate('Profile', { github_username: 'ManuSayure'})
                }} >
                    <View style={styles.callout}>
                        <Text style={ styles.devName }> Manoela </Text>
                        <Text style={ styles.devBio }></Text>
                        <Text style= { styles.devTechs }> ReactJS, Node </Text>
                    </View>
                </Callout>
            </Marker>
        </MapView>  
    )  

}; export default Main;
 
const styles = StyleSheet.create({
    container:{

    },
    map: {
        flex: 1,       
      },
    avatar: {
        width: 54,
        height: 54,
        borderRadius:4, 
        borderWidth:4,
        borderColor: '#fff'
    },
    callout:{
        width:260,
    },
    devName:{
        fontWeight: 'bold',
        fontSize: 16,

    },
    devBio:{
        color: '#666',
        marginTop: 5,
    },
    devTechs:{
        marginTop:5
    }

})
