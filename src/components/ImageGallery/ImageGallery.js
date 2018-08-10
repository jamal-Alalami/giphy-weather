import React, { Component } from 'react';
import { Row, Col, Media } from 'reactstrap';
import FadeIn from '../FadeIn/FadeIn';
import $ from 'jquery';
import 'lightgallery';
import 'lg-thumbnail';
import 'lg-video';
import 'lg-fullscreen';
import 'lg-pager';
import 'lg-zoom';
import 'lg-hash';
import 'lg-share';
import 'lg-autoplay';
import './ImageGallery.css';
class ImageGallery extends Component {
    onLightGallery = node => {
        this.lightGallery = node;
        $(node).lightGallery();
        console.log('gaa',this.props.images);
        
    }

    componentWillUpdate() {
        if(this.lightGallery)
            $(this.lightGallery).lightGallery();
    }
    componentDidUpdate(){
        if(this.lightGallery){
            $(this.lightGallery).data('lightGallery').destroy(true);
            $(this.lightGallery).lightGallery();

        }
    }

    componentWillUnmount() {
        $(this.lightGallery).data('lightGallery').destroy(true);
    }

    getThumbnails() {
        if (!this.props.images)
            return;
            const numLg = [
                [4,3,2,3],
                [3,4,3,2],
                [3,3,3,3],
                [2,3,3,4]
            ]
            const numMd = [
                [4,4,4],
                [5,3,4],
                [4,5,3],
                [5,2,5]
            ]

            
        let thumbnailsImag = null;
        let i = -1, iMd=-1;
        let row= -1, rowMd=-1;
            
        thumbnailsImag = this.props.images.map( (img,id) => {
            i++;
            i=i%4;
            if (i==0) row=(row+1)%4;
            
            iMd=(iMd+1)%3;
            if (iMd ==0 ) rowMd=(rowMd+1)%4

            return (
                <Col href={img.images.fixed_height.url} lg={numLg[row][i]} md={numMd[rowMd][iMd]} sm="6" className="gif " key={img.id}>
                    <div class="item">
                    <FadeIn height={250} >
                    {onLoad =>
                        <img src={img.images.fixed_height.url} alt="thumbnail" className="img-fluid" onLoad={onLoad} />
                    }
                    </FadeIn>
                    </div>
                </Col>)
        });

        return thumbnailsImag;
    }

    render() {
        const thumbnailsImag = this.getThumbnails();

        return (
            <div >
                <div className=" thumbnails" >
                    <div id="lightgallery" ref={this.onLightGallery} className="row thumbnails">
                        {this.props.images ? thumbnailsImag : null}
                    </div>
                </div>
            </div>
        )
    }
}

export default ImageGallery;