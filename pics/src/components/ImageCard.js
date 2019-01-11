import React from 'react';

class ImageCard extends React.Component {
    render(){
        return (
            <img 
                src={this.props.image.urls.regular}
                alt={this.props.image.description}
            />
        );
    }
}

export default ImageCard;
