import React, { useState } from 'react';
import ChildContentContainer from '../ChildContentContainer';

const ContentComponent = ({displayText, bodyText}) => {
  const [isOpen, setOpen] = useState(false);
  return (
    <div className='parent-container'>
      <div className='flex-container'>
        <div className='flex-item'>
          <button className='parent-button' onClick={() => {
            setOpen(!isOpen)
          }}>
            {isOpen ? '-' : '+'}
          </button>
        </div>
        <div className='flex-item'>
          <p>{displayText}</p>
        </div>
      </div>
      {isOpen && <ChildContentContainer bodyText={bodyText}/>}
    </div>
  );
}

export default ContentComponent;