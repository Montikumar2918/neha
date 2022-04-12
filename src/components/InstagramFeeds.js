import React from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { InstagramColored } from "./Icons";

const InstagramFeeds = () => {
  const feedsdata = [
    {
      id: "1",
      imageurl: "assets/images/feeds/feed (1).png",
      author_name: "office_office_memes",
    },
    {
      id: "2",
      imageurl: "assets/images/feeds/feed (2).png",
      author_name: "office_office_memes",
    },
    {
      id: "3",
      imageurl: "assets/images/feeds/feed (3).png",
      author_name: "office_office_memes",
    },
    {
      id: "4",
      imageurl: "assets/images/feeds/feed (4).png",
      author_name: "office_office_memes",
    },
    {
      id: "5",
      imageurl: "assets/images/feeds/feed (5).png",
      author_name: "office_office_memes",
    },
    {
      id: "6",
      imageurl: "assets/images/feeds/feed (6).png",
      author_name: "office_office_memes",
    },
    {
      id: "7",
      imageurl: "assets/images/feeds/feed (7).png",
      author_name: "office_office_memes",
    },
    {
      id: "8",
      imageurl: "assets/images/feeds/feed (8).png",
      author_name: "office_office_memes",
    } 
  ];

  return (
    <>
      <ResponsiveMasonry
        columnsCountBreakPoints={{ 350: 1, 768: 2, 992: 3, 1200: 4 }}
      >
        <Masonry gutter="30px">
          {feedsdata.map((image, i) => (
            <div className="img-holder feed-image" key={i}>
              <img src={image.imageurl} alt="" className="img-fluid w-100" />
              <div className="overlay d-flex align-items-center justify-content-center">
                <div className="row g-1 h5 text-white d-flex align-items-center">
                    <div className="col-auto">
                        <InstagramColored/>
                    </div>
                    <div className="col-auto">
                    {image.author_name} 
                    </div>
                </div>
              </div>
            </div>
          ))}
        </Masonry>
      </ResponsiveMasonry>
    </>
  );
};

export default InstagramFeeds;
