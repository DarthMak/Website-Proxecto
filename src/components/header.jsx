import React from "react";
import VideoBg from "reactjs-videobg";
import mp4 from "./Background.mp4";
export const Header = (props) => {
  return (
    <header id='header'>
      <div className='intro'>
         <div className='overlay'>
          <div className='container'>
            <div className='row'>
               <div className='col-md-8 col-md-offset-2 intro-text'>
                <h1>
                  {props.data ? props.data.title : 'Loading'}
                  <span></span>
                </h1>
                <p>{props.data ? props.data.paragraph : 'Loading'}</p>
                <a
                  href='#about'
                  className='btn btn-custom btn-lg page-scroll'
                >
                  Learn More
                </a>{' '}
              </div>
            </div>
          </div>
        </div>
      </div>
      <video className='videoTag' autoPlay loop muted>
    <source src={mp4} type='video/mp4' />
</video>
    </header>
  )
}
