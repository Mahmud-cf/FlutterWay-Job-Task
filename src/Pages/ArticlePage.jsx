import React, { useState } from 'react'
import SideNav from '../Components/SideNav';
import Hero from '../Components/Hero';
import { Articles, darkArticles } from '../AllData';
import commentIcon from "../assets/comment.png";
import downloadIcon from "../assets/download.png";
import Fotter from '../Components/Fotter';
import TemplateModal from '../Components/TemplateModal';
import SlideNav from '../Components/SlideNav';
import filter from "../assets/filter.png";
import Article from '../Components/Article';
import { useTheme } from '../Context/Context';

function ArticlePage() {
  const {mode, setMode, toggleMode} = useTheme()
  const [showPopup, setShowPopup] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const articleSlice = mode === 'dark' ? darkArticles : Articles

  const handleShowItem = (tempItem) => {
    setSelectedItem(tempItem);
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
    setSelectedItem(null);
  };
  

  return (
    <div className={`${mode === "dark" ? "dark" : ""}`}>
      <div className="header-wrapper">
        <SideNav />

        <div className="p-1 sm:p-4 lg:ml-48">
          <Hero mode={mode} setMode={setMode} toggleMode={toggleMode} />
          <div className="my-6 article-page">
            <div className="flex justify-between items-center mt-24 sm:mt-20  mb-5">
              <h2 className="text-2xl font-normal dark:text-white">
                Articles
              </h2>
              <a href="./article-details">
                <p className="text-lite text-sm cursor-pointer dark:hover:text-white hover:underline hover:text-black ">
                  See all
                </p>
              </a>
            </div>
            <div className="flex items-center mb-4">
              <div className="filter-button">
                <div className="flex justify-center items-center rounded-3xl bg-lite px-4 py-1">
                  <img src={filter} alt="" />
                  <span className="ml-2">Filter</span>
                </div>
              </div>
              <SlideNav />
            </div >
            <Article articleSlice={articleSlice} />
            <div>
              <p className='text-center py-3 font-semibold' >Loading...</p>
            </div>
            <div className="templates-docs mt-6">
              <h2 className="text-2xl pb-2 font-semibold">
                How To Use Free Flutter Template
              </h2>
              <p className="text-lite text-sm sm:text-base">
                Need a boost in your app design? Grab a free Flutter UI kit!
                These handy Flutter UI libraries offer a variety of pre-designed
                templates, making it easy for you to create stunning apps. The
                best part you can download beautiful, ready-to-use UI components
                for free and give your project a professional look in no time!
              </p>
            </div>
          </div>
          {showPopup && (
        <div className="popup">
          <TemplateModal handleClosePopup={handleClosePopup} selectedItem={selectedItem} />
        </div>
      )}
          <Fotter />
        </div>
      </div>
    </div>
  );
}

export default ArticlePage