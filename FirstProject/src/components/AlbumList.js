import React, {Component} from 'react';
import {View} from 'react-native';
import AlbumDetail from './AlbumDetail';


// Make component
// class based component. Ideal for HTTP, AJAX requests
class AlbumList extends Component {

    state = {albums: [] };

    async componentDidMount(){
        //@detail http get request for retrieving album data. React native Fetch API is used for this
        //@note printing direct repsonse doesn't show data but useful for seeing http status code
        //      console.log(response.json()) for seeing an array consisting of parsed json objects
        //      and using for rendering.
        console.log('componentWillMount inside AlbumList!');
        //debugger;
        try {

            let response = await fetch('http://rallycoding.herokuapp.com/api/music_albums');
            console.log(response);
            console.log('Printed response inside AlbumList');
            
            //* Parsing to array of json objects *//
            // Necessary to parse repsonse to Json
            let responseJson = await response.json();
            console.log(responseJson);
            console.log('Printed responseJson inside AlbumList');

            // Update state for rendering converted Json data
            this.setState({albums: responseJson});
            console.log('Updated state for rendering in AlbumList!');

        } catch(error){
            console.error(error);
        }
    }

    renderAlbums(){
        //@note map() method accepts a federal function which returns data chosen in an existing array and returns each instance in its own array 
        //@param key is for identifying each returned album by a unique name for rendering. In this case each album name is different from another
        //@prop record If the user wants to know about a specific album
        return this.state.albums.map(album => 
        
            <AlbumDetail key = {album.title} record={album}/>
        );
    }


    render(){
        //@detail Returns JSX code
        console.log(this.state);
        console.log("Inside render of AlbumList!")
        return (
            <View>
                {/* <Text>Album List!!</Text> */}
                {this.renderAlbums()}
            </View>
        );
    }
    // Renders on screen
}

// Make component available to other parts of app
export default AlbumList;