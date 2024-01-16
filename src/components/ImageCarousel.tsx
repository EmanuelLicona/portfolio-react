import { useState } from 'react'
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from 'react-icons/bs'
import './ImageCarousel.css'

export const ImageCarousel = ({ images = [] }: { images: string[] }) => {
  const [slide, setSlide] = useState(0)
  
  if (images.length === 0) return <img className='w-full max-h-[200px]' src="https://placehold.co/300x180?text=Image+not+found" alt="" />
  
  const nextSlide = () => {
    setSlide(slide === images.length - 1 ? 0 : slide + 1);
  };

  const prevSlide = () => {
    setSlide(slide === 0 ? images.length - 1 : slide - 1);
  };

  return (
    <>
      <div className="carousel">
        <BsArrowLeftCircleFill onClick={prevSlide} className="arrow arrow-left" />
        {images.map((item, idx) => {
          return (
            <img
              src={item}
              key={idx}
              className={slide === idx ? "slide" : "slide slide-hidden"}
            />
          )
        })}
        <BsArrowRightCircleFill onClick={nextSlide} className="arrow arrow-right" />
        <span className="indicators">
          {images.map((_, idx) => {
            return (
              <button
                key={idx}
                className={
                  slide === idx ? "indicator" : "indicator indicator-inactive"
                }
                onClick={() => setSlide(idx)}
              ></button>
            )
          })}
        </span>
      </div>
    </>
  )
}
