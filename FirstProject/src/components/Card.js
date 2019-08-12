import React from 'react';
import {View} from 'react-native';

const Card = (props) => {
    //@note props.children takes everything passed on from parent and renders. 
    //Equivalent to selecting props.record.artistName / props.record.title
    const {containerStyle} = styles;

    return (
        
        <View style = {containerStyle}>{props.children}</View>
    );
}

const styles = {
    containerStyle:{
        borderWidth: 1,
        borderRadius: 2,
        borderColour: '#ddd',
        borderBottomWidth: 0,
        
        // IOS only
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.1,
        // Border of shawdow. Good practice ,to match with content's borderRadius
        shadowRadius: 2,
        // For android elevation = shadow. Elevation works differently for IOS.
        elevation: 2,
        // Space between containers. Card parts in this case
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10
    }
}

// Make component accessible to other parts of app
export default Card;