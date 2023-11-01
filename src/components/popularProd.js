// import Swiper core and required modules
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

//images
import image1 from '../images/prod1.png'
import image2 from '../images/prod2.png'
import image3 from '../images/prod3.png'
import image4 from '../images/prod4.png'
import image5 from '../images/prod5.png'
import image6 from '../images/prod6.png'
import image7 from '../images/prod7.png'
import image8 from '../images/prod8.png'


 const PopularProd = () => {

  const tempData = [

    {

      isSale: true,
      ProductImage: image1,
      ProductName: "Pearl Powder",
      ProductPrice: "$85.00",
   

    },
    {

      isSale: false,
      ProductImage: image2,
      ProductName: "Lavender",
      ProductPrice: "$80.75",
   

    },
    {

      isSale: true,
      ProductImage: image3,
      ProductName: "Coco & Sandelwoo",
      ProductPrice: "$19.50",
   

    },
    {

      isSale: true,
      ProductImage: image4,
      ProductName: "Aromatic Blend",
      ProductPrice: "$19.00",
     

    },
    {

      isSale: false,
      ProductImage: image5,
      ProductName: "Three Rose",
      ProductPrice: "$19.00",
     

    },
    {

      isSale: true,
      ProductImage: image6,
      ProductName: "Green Clay",
      ProductPrice: "$85.00",
     
    },
    {

      isSale: true,
      ProductImage: image7,
      ProductName: "Organic Beeswax",
      ProductPrice: "$7.13",
    

    },
    {

      isSale: false,
      ProductImage: image8,
      ProductName: "Star Anise & Lily",
      ProductPrice: "$38.00",
     

    }
    
  ]


  return (

    <Swiper
     
      modules={[Navigation]}
      spaceBetween={0}
      slidesPerView={5}
      navigation
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
      className='text-center container-fluid pb-5 pt-5'
    >
      
      {tempData && tempData.map((val) => {

        return <SwiperSlide className='col-lg-1'> 

        <img src={val.ProductImage} alt={val.ProductName} className='prodImage'/> 
        
        <div className='mt-3 col-lg-5 text-start ms-4'>
          <p>{val.ProductName}</p> 
          <p>{val.ProductPrice}</p> 
          <p>{val.ProductDescription}</p>
        </div>
        <button className='col-lg-10 cartBtn pt-2 pb-2'>Add To Cart</button>
        {val.isSale ? <p className='saleTxt'>SALE</p> : null}
        </SwiperSlide>

      })}
  
    </Swiper>


  );
};

export default PopularProd