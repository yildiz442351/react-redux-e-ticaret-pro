import React from 'react'
import Slider from 'react-slick'
const SliderComp = () => {
    const settings = {
        //dots: true,
        infinite:rue,
        speed: 500,
        slidesToShow:1,
        slidesToScroll:1
    };
  return (
    <div>
       <Slider {...settings}>
        <div className='!flex-5xl font-bold bg-gray-100 px-6'>
            <div className=''>
                <div className='text-6xl font-bold'>En Kaliteli Ayakkabılar Burada</div>
                <div className='text-lg my-4'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos soluta cupiditate impedit! Vero ex ipsam quae et, corrupti id animi voluptatibus similique optio tempore autem delectus doloribus sint. Eligendi, debitis!</div>
                <div className='border rounded-full cursor-pointer text-2xl w-[200px] h-16 flex items-center justify-center bg-gray-200'>İncele</div>
            </div>
            <img src="https://www.yandex.com.tr/gorsel/search?p=3&text=nike+ayakkab%C4%B1&pos=5&rpt=simage&img_url=https%3A%2F%2Fs3.amazonaws.com%2Fnikeinc%2Fassets%2F1189%2FLunar_Glide_W_0177_01a_hd_1600.jpg%3F1315411479&from=tabbar&lr=103826" alt=""/>
        </div>
        <div>
            <img src="https://www.yandex.com.tr/gorsel/search?p=4&text=nike+ayakkab%C4%B1&pos=24&rpt=simage&img_url=https%3A%2F%2Fsneg.top%2Fuploads%2Fposts%2F2023-03%2F1678056299_sneg-top-p-naiki-na-belom-fone-krasivo-42.jpg&from=tabbar&lr=103826" alt="" />
        </div>
        </Slider>
    </div>
  )
}

export default SliderComp