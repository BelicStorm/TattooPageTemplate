import { useState, createRef } from "react"

const Slider = ({slides, heading}) => {
    const [current, setCurrent] = useState(2)
    const headingId = `slider-heading__${heading.replace(/\s+/g, '-').toLowerCase()}`
    const wrapperTransform = {
        'transform': `translateX(-${current * (100 / slides.length)}%)`
      }
    /* const handlePreviousClick  = () => setCurrent((current - 1 < 0) ? slides.length - 1 : current - 1)
    const handleNextClick = () => setCurrent((current + 1 === slides.length) ? 0 : current + 1) */
    const handleSlideClick = (index) => (current !== index) ? setCurrent(index) : ""
    
    return <div className='slider' aria-labelledby={headingId}>
            <ul className="slider__wrapper" style={wrapperTransform}>
                
                {slides.map(slide => {
                    return (
                    <Slide
                        key={slide.index}
                        slide={slide}
                        current={current}
                        handleSlideClick={handleSlideClick}
                    />
                    )
                })}
            </ul>
            
            {/* <div className="slider__controls">
                <SliderControl 
                    type="previous"
                    title="Go to previous slide"
                    handleClick={handlePreviousClick}
                />
                
                <SliderControl 
                    type="next"
                    title="Go to next slide"
                    handleClick={handleNextClick}
                />
            </div> */}
        </div>
}

const Slide = ({handleSlideClick,slide,current}) => {
    let currentSlide = createRef()
    let classNames = 'slide'
    const { src, button, headline, index } = slide
    if (current === index) classNames += ' slide--current'
    else if (current - 1 === index) classNames += ' slide--previous'
    else if (current + 1 === index) classNames += ' slide--next'
    const handleClickSlide = () => handleSlideClick(slide.index)
    
    
    return (
        <li 
          ref={currentSlide}
          className={classNames} 
          onClick={handleClickSlide}
        >
          <div className="slide__image-wrapper">
            <img 
              className="slide__image"
              alt={headline}
              src={src}
              
            />
          </div>
          
         {/*  <article className="slide__content">
            <h2 className="slide__headline">{headline}</h2>
            <button className="slide__action button">{button}</button>
          </article> */}
        </li>
      )
    

}

/* const SliderControl = ({ type, title, handleClick }) => {
    return (
      <button className={`btn btn--${type}`} title={title} onClick={handleClick}>
        <svg className="navIcon" viewBox="0 0 24 24">
          <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
        </svg>
      </button>
    )
} */
const slideData = [
    {
      index: 0,
      headline: 'New Fashion Apparel',
      button: 'Shop now',
      src: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/225363/fashion.jpg'
    },
    {
      index: 1,
      headline: 'In The Wilderness',
      button: 'Book travel',
      src: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/225363/forest.jpg'
    },
    {
      index: 2,
      headline: 'For Your Current Mood',
      button: 'Listen',
      src: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/225363/guitar.jpg'
    },
    {
      index: 3,
      headline: 'Focus On The Writing',
      button: 'Get Focused',
      src: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/225363/typewriter.jpg'
    },
    {
        index: 4,
        headline: 'New Fashion Apparel',
        button: 'Shop now',
        src: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/225363/fashion.jpg'
    },
  ]
export {Slider,slideData}
  
