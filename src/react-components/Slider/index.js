import React from 'react'
import arrowRight from '../../images/rightarrow.png'
import arrowLeft from '../../images/leftarrow.png'
import './styles.css'


class Sliders extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            currentImageIndex: 0,
            images:this.props.pic['images'],
            arrowNext: this.props.pic['rightArrow'],
            arrowPrev: this.props.pic['leftArrow']
        };
        this.nextSlide = this.nextSlide.bind(this);
        this.prevSlide = this.prevSlide.bind(this);
    }

    prevSlide(){
        const index_last = this.state.images.length - 1;
        const resetIndex = this.state.currentImageIndex === 0;

        let index;
        if(this.state.currentImageIndex === 0){
            index = index_last;
        }else{
            index = this.state.currentImageIndex - 1;
        }

        this.setState({
            currentImageIndex : index
        })
    }

    nextSlide(){
        const index_last = this.state.images.length - 1;
        let index;
        if(this.state.currentImageIndex === index_last){
            index = 0;
        }else{
            index = this.state.currentImageIndex + 1;
        }
        this.setState({
            currentImageIndex : index
        })
    }

    render(){
        const index = this.state.currentImageIndex;
        let firstPics = this.state.images.slice(index, index + 4)

        if(firstPics.length < 4){
            firstPics = firstPics.concat(this.state.images.slice(0, 4 - firstPics.length))
        }

        return(
            <div className={"picSlider"}>
                <img src = {this.state.arrowPrev} alt={"None"} className={"arrowPrev"} onClick={this.prevSlide}/>
                {firstPics.map((image, index) => <img className={"displayPic"} src={image} alt={""}/>)}
                <img src={this.state.arrowNext} alt={"None"} className={"arrowNext"} onClick={this.nextSlide}/>
            </div>
        );
    }
}

export default Sliders