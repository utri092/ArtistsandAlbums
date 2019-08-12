// import libraries

import React from 'react';
import {Text, View} from 'react-native';

// Make component. 
//@param props -  Passed from Root to Header. Contains text
const Header = (props) => {
    const {textStyle, viewStyle} = styles;
    // Renders on screen
    return (
        <View style={viewStyle}>
            <Text style={textStyle}>{props.headerText}</Text>
        </View>
        
    );
};

// Styles component

const styles = {
    viewStyle: {
        backgroundColor: '#F8F8E8',
        justifyContent: 'center',
        alignItems: 'center',
        height: 40,
        paddingTop: 15,
        // Elevation determines size of shadow in Android
        elevation: 2,
        position: 'relative'
        
        // Ios Only //

        //shadowColor: 'blue'
        // // Offset is dimensions
        // shadowOffset: {width: 0, height: 2},
        // shadowOpacity: 0.2
    },
    textStyle: {
        fontSize: 20
    }
};

// Make components available to other parts of the app
export default Header;