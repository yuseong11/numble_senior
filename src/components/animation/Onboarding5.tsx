import CellPhoneImage from '@/image/onboarding_5_1.webp'
import Img2 from '@/image/onboarding_5_2.webp'
import Img3 from '@/image/onboarding_5_3.webp'
import Img4 from '@/image/onboarding_5_4.webp'
import Image from '@/components/Image'

const Onboarding3 = () => {
  return (
    <div className='relative'>
      <Image
        src={CellPhoneImage}
        alt='CellPhoneImage'
        width={360}
        height={500}
        className='m-auto'
      />
      <div className='carousel absolute bottom-56 translate-y-1/2 flex flex-col items-center'>
        <div className='flex animate-carouselSlideLeft pb-4 '>
          <Image
            src={Img2}
            alt='img'
            width={190}
            height={270}
            className='ml-8 mr-8 animate-scaleDown'
          />
          <Image src={Img4} alt='img' width={190} height={270} className='mr-8 animate-scaleUp' />
          <Image src={Img3} alt='img' width={190} height={270} className='mr-8' />
        </div>
        <div className='bg-white w-44 h-0.5 mb-6 relative '>
          <div className='w-11 bg-brown-200 h-1 absolute bottom-0 animate-moveRight'> </div>
        </div>
      </div>
    </div>
  )
}

export default Onboarding3