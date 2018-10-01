import React, { Component } from 'react';
import { View, Modal, TouchableOpacity, Platform } from 'react-native';
import ImageViewer from 'react-native-image-zoom-viewer';
import { Icon } from 'native-base';  
import { connect } from 'react-redux';
import * as actions from '../actions';

 class PhotoView extends Component {
    constructor(props){
        super(props);
        this.state = {
            index: props.index,
            images: props.images,
            modalVisible: props.photoView
          };
    }
 

  componentDidMount(){
      console.log('came into photo view');
        let {index,images,photoView} = this.props;
        console.log('index is -- ' ,index);
        // let imagesArray = images.map((img)=>{
        //        return {url:img};
        // })
        // console.log('imagesArray' ,imagesArray);
        this.setState({index,images:images,photoView});
  }

  componentWillReceiveProps(nextProps){
    console.log('came into componentWillReceiveProps view');
        let {index,images,photoView} = nextProps;
    //     let imagesArray = images.map((img)=>{
    //         return {url:img};
    //  })
    //  console.log('imagesArray' ,imagesArray);
        this.setState({index,images:images,photoView});
  }

  render() {
    let {index,images,photoView} = this.state;
    console.log("index",index)
    console.log("photoView",photoView)
    console.log("images",images)
    return (
            <Modal
            visible={photoView}
            transparent={true}
            onRequestClose={() => this.props.hidePhotoView()}
          >
             <ImageViewer
              imageUrls={images}
              index={index}
              onSwipeDown={() => {
                  this.props.hidePhotoView()
              }}
              enableSwipeDown={true}
             
            />
          </Modal>
    );
  }
}

const mapStateToProps = state=> ({ 
    index:state.photo.index,
    photoView:state.photo.photoView,
    images:state.photo.images
})
export default connect(mapStateToProps, actions)(PhotoView);
