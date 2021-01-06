import React from 'react';
import {View} from 'react-native';
import {WebView} from 'react-native-webview'

const Profile = ( {navigation}) => {
    const github_username = navigation.getParam('github_username');
    
    return <WebView style={{ flex:1 }} source = {{uri: `www://github.com/${github_username}`}} / >
        
}; 
export default Profile;