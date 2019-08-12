import React from 'react';
// Selecting particular packages as opposed to saying ReactNative (whole library packages)
import {AppRegistry, View} from 'react-native';
// Imporing self written child components for component nesting
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList'; 

// Create a component
// Uses JSX, similar to HTML syntax but abstracts a lot of details away
//@tag - Header = Child Component
//@prop headerText = Text to display in child component
const App = () => {
    return (
        //<Text> Utsav Project</Text>
        <View>
        <Header headerText={'Albums!'}/>
        <AlbumList />
        </View>
    );

};

//Render it to device
//@func AppRegistry is the entry point to JS. Atleast one component needs
// to be registered
AppRegistry.registerComponent('FirstProject', () => App);
