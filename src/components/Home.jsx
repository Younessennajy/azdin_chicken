import { Carousel } from 'flowbite-react';
import section1 from './../assets/fayoumi1.jpg'
import section2 from './../assets/goldfayoumy.jpeg'
import section3 from './../assets/brahma.jpeg'

const Home = () => {
  return(
    <>
      <div className="flex flex-col md:flex-row items-center justify-center mb-10">
        <div id="default-carousel" className="md:w-2/3 w-full md:order-2 order-1" data-carousel="slide" slideInterval={3000}> 
          <Carousel className="relative h-80 md:h-96 overflow-hidden rounded-lg">
            <img src={section3} className="absolute block w-full h-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="Poulet Brahma"/>
            <img src={section1} className="absolute block w-full h-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="Poulet Fayoumi"/>
            <img src={section2} className="absolute block w-full h-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="Poulet Fayoumi doré"/>
          </Carousel>
        </div>
      </div>

      <div className="infos mt-4 text-center ">
        <h2 className="text-5xl font-bold my-3" > رفاهية <span className='text-green-400'>الدواجن</span>، سعادة المستهلك</h2>
        <p className="text-gray-700 text-lg  ">نقدّم مجموعة متنوعة من منتجات الدواجن لتلبية احتياجات السوق المتجددة. سواء كنتم تبحثون عن بيض الدجاج، أو دجاج عالي الجودة، أو ديكة قوية، فإننا نلتزم بتقديم منتجات بأعلى معايير الجودة لتلبية متطلباتكم.</p>
      </div>
    </>
  )
}

export default Home