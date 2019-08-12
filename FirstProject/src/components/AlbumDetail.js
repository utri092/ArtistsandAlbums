import React from 'react';
import {Text} from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

const AlbumDetail = (props) => {
    return (
        <Card>
            <CardSection>
                
                <Text>{props.record.title}</Text>
            
            </CardSection>
        </Card>
    );
};

// Make component accessible to other parts of app
export default AlbumDetail;