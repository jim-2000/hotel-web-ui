import React,{useCallback, useState} from 'react'
import ImageViewer from "react-simple-image-viewer";

const DetailsImages = () => {
    const [currentImage, setCurrentImage] = useState(0);
    const [isViewerOpen, setIsViewerOpen] = useState(false);
    const images = [
      "http://placeimg.com/1200/800/nature",
      "http://placeimg.com/800/1200/nature",
      "http://placeimg.com/1920/1080/nature",
      "http://placeimg.com/1500/500/nature",
   
    ];
  
    const openImageViewer = useCallback((index) => {
      setCurrentImage(index);
      setIsViewerOpen(true);
    }, []);
  
    const closeImageViewer = () => {
      setCurrentImage(0);
      setIsViewerOpen(false);
    };
  return (
    <>
     

    
    
    <div class="flex flex-wrap items-center justify-center">
        <div class="flex flex-wrap w-full md:w-3/4  items-center ">
            {
                images.map((image, index) => (
                    <>
                     <div className={`${index } w-1/2 p-1 md:p-2`}>
                            <img 
                            onClick={() => openImageViewer(index)}
                            width="300"
                            key={index}
                            style={{ margin: "2px" }}
                            class="block object-cover object-center w-full h-96 md:h[280px] rounded-lg transform easy-in-out duration-500 hover:scale-105"
                            src={image}/>
                        </div>
                    </>
                ))
            }
           
        </div>
     
    </div>
      

      {isViewerOpen && (
        <ImageViewer
          src={images}
          currentIndex={currentImage}
          onClose={closeImageViewer}
          disableScroll={false}
          backgroundStyle={{
            backgroundColor: "rgba(0,0,0,0.9)"
          }}
          closeOnClickOutside={true}
          
        />
      )}
    </>
  )
}

export default DetailsImages