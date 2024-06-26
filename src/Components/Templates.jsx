import React, { useState } from 'react';
import commentIcon from '../assets/comment.png';
import downloadIcon from '../assets/download.png';
import TemplateModal from './TemplateModal';

function Templates({mode, tempalteSlice }) {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleShowItem = (tempItem) => {
    setSelectedItem(tempItem);
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
    setSelectedItem(null);
  };

  return (
    <div>
      <div className="template-title flex justify-between items-center mb-5">
        <h2 className="text-xl sm:text-2xl font-normal dark:text-white">Templates</h2>
        <a href="/template"><p className="text-lite text-xs sm:text-sm cursor-pointer dark:hover:text-white hover:underline hover:text-black" onClick={handleClosePopup}>
          See all
        </p></a>
      </div>
      <div className="template-wrapper grid grid-cols-2 gap-2 md:grid-cols-3 md:gap-4">
        {tempalteSlice.map((tempItem) => (
          <div key={tempItem.id} onClick={() => handleShowItem(tempItem)} className='sm:aspect-video set-aspect-ratio' >
            <div>
            <img className="w-full cursor-pointer hover:scale-105 transition-all" src={tempItem.img} alt="" />
            </div>
            <div className="flex justify-between py-2">
              <h6 className="font-semibold cursor-pointer xl:text-base lg:text-sm text-xs dark:text-white">{tempItem.title}</h6>
              <div className="flex items-center overflow-x-hidden">
                <img className="hidden sm:inline-block w-4 h-4 lg:w-5 lg:h-5 ml-3" src={commentIcon} alt="" />
                <span className="hidden sm:inline-block xl:text-sm lg:text-sm text-xs ml-1 dark:text-white">{tempItem.comment}</span>
                <img className="hidden sm:inline-block w-4 h-4 lg:w-5 lg:h-5 ml-3" src={downloadIcon} alt="" />
                <span className="hidden sm:inline-block xl:text-sm lg:text-sm text-xs ml-1 dark:text-white">{tempItem.download}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {showPopup && (
        <div className="popup">
          <TemplateModal mode={mode} handleClosePopup={handleClosePopup} selectedItem={selectedItem} />
        </div>
      )}
      
    </div>
  );
}

export default Templates;
