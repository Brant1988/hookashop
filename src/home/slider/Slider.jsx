import React, {useState} from 'react'
import './Slider.css'
import BtnSlider from './BtnSlider'
import dataSlider from './dataSlider'
import { useEffect } from 'react'


const Slider = () => {

    const [slideIndex, setSlideIndex] = useState(1)

    const nextSlide = () => {
       setSlideIndex((prev => prev + 1))
    }

    const prevSlide = () => {
      setSlideIndex((prev => prev - 1))
    }

    const moveDot = index => {
        setSlideIndex(index)
    }

    useEffect(() => {
        setInterval(() => {
            nextSlide()
        }, 3000);
      }, []);
      
      return (
        <div className="container-slider">
            {dataSlider.map((obj, index) => {
                return (
                    <div
                    key={obj.id}
                    className={slideIndex === index + 1 ? "slide active-anim" : "slide"}
                    >
                    <img src={process.env.PUBLIC_URL + `/img/img${index + 1}.jpg`} alt=''></img> 
                    </div>
                )
            })}
            <BtnSlider moveSlide={nextSlide} direction={"next"} />
            <BtnSlider moveSlide={prevSlide} direction={"prev"}/>

            <div className="container-dots">
                {Array.from({length: 5}).map((_, index) => (
                    <div 
                    onClick={() => moveDot(index + 1)}
                    className={slideIndex === index + 1 ? "dot active" : "dot"}
                    ></div>
                ))}
            </div>
        </div>
    )
}

export default Slider