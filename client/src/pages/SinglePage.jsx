import React, { useEffect, useState } from "react";
import "../stylesheet/SinglePage.css";
import Slider from "../components/Slider";
import { singlePostData, userData } from "../data/dummyList";
import Map from "../components/Map";
import { useParams } from "react-router-dom";
import axios from "axios";

const SinglePage = () => {
  const { id } = useParams();
  const [error, setError] = useState();
  const [singleData, setSingleData] = useState(null);

  const fetchPostDetails = async () => {
    try {
      const response = await axios.get(`http://localhost:8800/api/posts/${id}`);
      setSingleData(response.data);
    } catch (error) {
      setError(error);
    }
  };

  useEffect(() => {
    fetchPostDetails();
  }, []);

  return (
    <div className="singlePage">
      {singleData ? (
        <>
          <div className="details">
            <div className="wrapper">
              <Slider images={singleData.images} />
              <div className="info">
                <div className="top">
                  <div className="post">
                    <h1>{singleData ? singleData.title : ""}</h1>
                    <div className="address">
                      <img src="/pin.png" alt="" />
                      <span>{singleData.address}</span>
                    </div>
                    <div className="price">$ {singleData.price}</div>
                  </div>
                  <div className="user">
                    <img src={singleData.userId.avatar} alt="" />
                    <span>{singleData.userId.username}</span>
                  </div>
                </div>
                <div className="bottom">{singleData.postDetail.desc}</div>
              </div>
            </div>
          </div>
          <div className="features">
            <div className="wrapper">
              <p className="title">General</p>
              <div className="listVertical">
                <div className="feature">
                  <img src="/utility.png" alt="" />
                  <div className="featureText">
                    <span>Utilities</span>
                    {singleData.postDetail.utilities === "owner" ? (
                      <p>Owner is responsible</p>
                    ) : (
                      <p>Tenant is responsible</p>
                    )}
                  </div>
                </div>
                <div className="feature">
                  <img src="/pet.png" alt="" />
                  <div className="featureText">
                    <span>Pet Policy</span>
                    {singleData.postDetail.pet === "allowed" ? (
                      <p>Pets Allowed</p>
                    ) : (
                      <p>Pets not Allowed</p>
                    )}
                  </div>
                </div>
                <div className="feature">
                  <img src="/fee.png" alt="" />
                  <div className="featureText">
                    <span>Income Policy</span>
                    <p>{singleData.postDetail.income}</p>
                  </div>
                </div>
              </div>
              <p className="title">Room Sizes</p>
              <div className="sizes">
                <div className="size">
                  <img src="/size.png" alt="" />
                  <span>{singleData.postDetail.size}</span>
                </div>
                <div className="size">
                  <img src="/bed.png" alt="" />
                  <span>{singleData.bedroom}</span>
                </div>
                <div className="size">
                  <img src="/bath.png" alt="" />
                  <span>{singleData.bathroom}</span>
                </div>
              </div>
              <p className="title">Nearby Places</p>
              <div className="listHorizontal">
                <div className="feature">
                  <img src="/school.png" alt="" />
                  <div className="featureText">
                    <span>School</span>
                    <p>
                      {singleData.postDetail.school > 999
                        ? singleData.postDetail.school / 1000 + "km"
                        : singleData.postDetail.school + "m"}
                    </p>
                  </div>
                </div>
                <div className="feature">
                  <img src="/pet.png" alt="" />
                  <div className="featureText">
                    <span>Bus Stop</span>
                    <p>{singleData.postDetail.bus}</p>
                  </div>
                </div>
                <div className="feature">
                  <img src="/fee.png" alt="" />
                  <div className="featureText">
                    <span>Restaurant</span>
                    <p>{singleData.postDetail.restaurant}</p>
                  </div>
                </div>
              </div>
              <p className="title">Location</p>
              <div className="mapContainer">
                <Map items={[singleData]} />
              </div>
              <div className="buttons">
                <button>
                  <img src="/chat.png" alt="" />
                  Send a Message
                </button>
                <button>
                  <img src="/save.png" alt="" />
                  Save the Place
                </button>
              </div>
            </div>
          </div>
        </>
      ) : (
        <h1>Unable to Post</h1>
      )}
    </div>
  );
};
export default SinglePage;
