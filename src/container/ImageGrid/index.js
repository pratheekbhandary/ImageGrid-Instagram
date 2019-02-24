import React from 'react';
import './cssTrics.scss';
import Imagetile from './ImageTile';
export default class ImageGrid extends React.Component {

    render() {
        return(
            <div className = "imageContainer">
               {this.props.imagesArray.map(img=><Imagetile image={img}/>)}
            </div>
        );
    }
}
