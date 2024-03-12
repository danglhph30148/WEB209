import React from 'react'

type Props = {}

const Slider = (props: Props) => {
  return (
    <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img src="https://4kwallpapers.com/images/wallpapers/rose-blackpink-beautiful-portrait-k-pop-singer-vogue-1920x1080-5390.jpeg" className="d-block w-100" alt="..."/>
      </div>
      <div className="carousel-item">
        <img src="https://media-cdn-v2.laodong.vn/storage/newsportal/2023/7/25/1220914/Rose.jpg" className="d-block w-100" alt="..."/>
      </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>
  )
}
export default Slider;