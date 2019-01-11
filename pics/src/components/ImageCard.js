import React from 'react';

class ImageCard extends React.Component {
    constructor(props) {
        super(props);

        this.imageRef = React.createRef();
    }

    componentDidMount() {
        console.log(this.imageRef.current.clientHeight);
    }

    render(){
        const { urls, description} = this.props.image;
        return (
            <img 
                ref={this.imageRef}
                src={urls.regular}
                alt={description}
            />
        );
    }
}

export default ImageCard;
