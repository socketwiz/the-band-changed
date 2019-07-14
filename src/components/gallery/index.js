
import './gallery.css';
import {Carousel, Modal} from 'react-bootstrap';
import Main from '../../layouts/main';
import map from 'lodash/map';
import PropTypes from 'prop-types';
import React, {Component} from 'react';

class Gallery extends Component {
    constructor(props) {
        super(props);

        this.state = {
            'activeIndex': 0,
            'showModal': false
        };
    }

    componentDidMount() {
        const {getImages} = this.props;

        if (typeof getImages === 'function') {
            getImages();
        }
    }

    onClickPhoto(event) {
        event.preventDefault();

        const element = event.currentTarget;

        try {
            const id = /-(\d+)$/.exec(element.id)[1];

            this.setState({
                'activeIndex': parseInt(id, 10),
                'showModal': true
            });
        } catch (error) {
            console.error('Regex failed!', error);
        }
    }

    close() {
        this.setState({'showModal': false});
    }

    onSelectCarousel(id) {
        this.setState({'activeIndex': parseInt(id, 10)});
    }

    render() {
        const {activeIndex, showModal} = this.state;
        const {images} = this.props;
        const thumbnails = map(images, (image, index) => {
            const id = `carousel-selector-${index}`;
            const style = {
                'height': '150px',
                'width': 'auto'
            };

            if (image.orientation === 'portrait') {
                style.height = 'auto';
                style.width = '150px';
            }

            return (
                <div className="thumbnail"
                     id={id}
                     key={index}
                     onClick={this.onClickPhoto.bind(this)}>
                  <img alt="" src={image.path} style={style} />
                </div>
            );
        });
        const carouselItems = map(images, (image, index) => {
            return (
                <Carousel.Item key={index}>
                  <img alt="" src={image.path} />
                </Carousel.Item>
            );
        });

        return (
            <Main>
              <h1 className="title">Photos</h1>
              <div className="photo row">
                <div className="col-7" id="slider-thumbs">
                  {thumbnails}
                </div>
                <div className="col-5">
                  <div className="row">
                    <div className="col" id="carousel-bounding-box">
                      <Carousel className="carousel"
                                indicators={false}
                                interval={5000}> 
                        {carouselItems}
                      </Carousel>
                    </div>
                  </div>
                </div>
              </div>

              <Modal bsSize="large" show={showModal} onHide={this.close.bind(this)}>
                <Modal.Header closeButton>
                  <Modal.Title>Image {activeIndex + 1}/{images.length}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <Carousel activeIndex={activeIndex}
                            className="carousel"
                            controls={true}
                            indicators={false}
                            onSelect={this.onSelectCarousel.bind(this)}>
                    {carouselItems}
                  </Carousel>
                </Modal.Body>
              </Modal>
            </Main>
        );
    }
}

Gallery.propTypes = {
    'getImages': PropTypes.func,
    'images': PropTypes.array
};

export default Gallery;
