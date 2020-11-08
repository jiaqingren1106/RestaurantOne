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
        const lastIndex = this.state.images.length - 1;
        const resetIndex = this.state.currentImageIndex === 0;
        const index = resetIndex ? lastIndex: this.state.currentImageIndex - 1;

        this.setState({
            currentImageIndex : index
        })
    }

    nextSlide(){
        const lastIndex = this.state.images.length - 1;
        const resetIndex = this.state.currentImageIndex === lastIndex
        const index = resetIndex ? 0 : this.state.currentImageIndex + 1;

        this.setState({
            currentImageIndex : index
        })
    }

    render(){
        const index = this.state.currentImageIndex;
        let firstPics = this.state.images.slice(index, index + 5)

        if(firstPics.length < 5){
            firstPics = firstPics.concat(this.state.images.slice(0, 5 - firstPics.length))
        }

        return(
            <div className={"picSlider"}>
                <img src = {this.state.arrowPrev} alt={"None"} className={"arrowPrev"} onClick={this.prevSlide}/>
                {firstPics.map((image, index) => <img className={"displayPic"} key={index} src={image} alt={"None"}/>)}
                <img src={this.state.arrowNext} alt={"None"} className={"arrowNext"} onClick={this.nextSlide}/>
            </div>
        );
    }
}

export default Sliders