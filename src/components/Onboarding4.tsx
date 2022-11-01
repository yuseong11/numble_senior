import Img1 from '../image/onboarding_4_1.webp'
import Img2 from '../image/onboarding_4_2.webp'
import Img3 from '../image/onboarding_4_3.webp'
import Img4 from '../image/onboarding_4_4.webp'

const Onboarding3 = () => {
	return (
    <div className='relative'>
      <img src={Img1} alt='img' className='m-auto' />
      <img src={Img2} alt='img' className='absolute bottom-0 p-6 right-1/2 translate-x-1/2 animate-pulse' />
      <img src={Img3} alt='img' className='absolute bottom-0 p-6 right-1/2 translate-x-1/2 animate-pulse' />
      <img src={Img4} alt='img' className='absolute bottom-0 p-6 right-1/2 translate-x-1/2 animate-pulse' />
    </div>
	)
}

export default Onboarding3