    import React, { Component } from 'react';
    import { Container, Row, Col } from 'reactstrap';
    import NavBar from '../../components/NavBar/NavBar';
    import InfiniteScroll from 'react-infinite-scroll-component';
    import ImageGallery from '../../components/ImageGallery/ImageGallery';

    import './Home.css';
    class Home extends Component{
    state = {
        images: null,
        hasMoreImages: true,
        pageSize:20
    };
    componentDidMount() {
        
        // const xhr = new XMLHttpRequest();

        // xhr.open("GET", "http://api.giphy.com/v1/gifs/search?q=weather&api_key=RUQ5fTsgpKgWvotUt7agVzerZL6UuCkh&limit=20");

        // xhr.onloadend = () => {

        //     if (xhr.status === 200) {
        //         let allImages = JSON.parse(xhr.response).data ;
                
        //         this.setState({
        //             images: allImages
        //         })

        //     } else {
        //         console.log('error')
        //     }
        // }
        // xhr.send();
        this.loadMoreImages()
    }

    render(){
        return(
            <div>
                <NavBar/>
                <Container>
                    <Row>
                        <h1>Weather</h1>
                    </Row>
                    <InfiniteScroll
                        style={{'overflow':'hidden !important'}}
                        dataLength={this.state.images}
                        next={this.loadMoreImages}
                        hasMore = {
                            this.state.hasMoreImages 
                        }
                        loader={<h4>Loading...</h4>}
                        endMessage={
                            <div class="text-center" style={{    'margin-top': '15px'}}>
                                loadMoreImages
                            </div>
                        }
                        >

                        {this.state.images &&<ImageGallery images={this.state.images}/>}
                        
                    </InfiniteScroll>
                    
                                       
                </Container>
            </div>
        );
    }
    loadMoreImages = () => {
        
        if (this.state.images && this.state.images.length !==0 && this.state.images.length%20 !== 0) {
            this.setState({
                loadMoreImages: false
            });
            return;
          }

        const xhr = new XMLHttpRequest();

        xhr.open("GET", "https://api.giphy.com/v1/gifs/search?q=weather&api_key=RUQ5fTsgpKgWvotUt7agVzerZL6UuCkh&limit=" + this.state.pageSize);

        xhr.onloadend = () => {

            if (xhr.status === 200) {
                let allImages = JSON.parse(xhr.response).data ;
                this.setState({
                    images: allImages,
                    pageSize: this.state.pageSize+20
                })

            } else {
                console.log('error')
            }
        }
        xhr.send();
    }
    }

    export default Home;