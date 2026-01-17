import Zoom from "react-medium-image-zoom";
import 'react-medium-image-zoom/dist/styles.css'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from 'swiper';

import 'swiper/scss';
import 'swiper/scss/navigation';

import { isMobile } from "react-device-detect";
import { ImageLoaded } from '../imageLoaded/ImageLoaded';


export const CarouselImage = ({ images }) => {

	return (
		<Swiper
			// install Swiper modules
			modules={[Navigation]}
			navigation={true}
			pagination={{ clickable: true }}
			spaceBetween={10}
			slidesPerView='auto'
			className='container'
		>
			{images.map((image, index) => {
				return (
					<SwiperSlide
						key={`${index}`}
						className={
							isMobile
								? 'slide_portrait'
								: 'slide_landscape'
						}>
						<Zoom>
							<ImageLoaded 
								effect={"blur"} 
								classname={
									isMobile
										? 'slide_portrait'
										: 'slide_landscape'
								} 
								alt={"image"} 
								src={image}/>
						</Zoom>
					</SwiperSlide>
				);
			})}
		</Swiper>
	)
}
