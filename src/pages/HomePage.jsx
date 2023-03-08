
import React from 'react'
import '../styles/HomePage.css'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import img1 from '../pics/stars.jpg'
import img2 from '../pics/stars2.jpg'
import pic from '../pics/png.png'
import { style } from '@mui/system'
import ProductsPage from '../pages/ProductsPage'



const HomePage = () => {


// export default HomePage;

// // const HomePage = () => {
//   return (
//     // <Parallax pages={2}>
//     //   <ParallaxLayer
//     //     offset={0}
//     //     speed={1}
//     //     factor={1}
//     //     style={{
//     //       backgroundImage: `url(${img1})`,
//     //       backgroundSize: "cover",
//     //     }}
//     //   ></ParallaxLayer>

//     //   {/* <ParallaxLayer offset={1} speed={0.5} factor={1} style={{
//     //     backgroundImage: `url(${BGSecond})`,
//     //     backgroundSize: 'cover'
//     //   }}>

  return (
    <>
    <div className="container">

    <div className='textdiv'> 
      <h1 className='h1'>Lorem ipsum</h1>
      <span className='h2'>Русские пельмени… А насколько русские они на самом деле? Ведь известно, что до 30-х годов XIX века пельмени не упоминались в русской литературе, в том время как сибиряки и уральцы уже точно активно лепили и ели их. А если копнуть еще глубже, то остается принять факт, что это блюдо готовили в Древнем Китае, откуда, скорее всего, оно и распространилось по Азии, Сибири и, наконец, потом добралось до центральной России. Однако именно у нас пельмени приобрели невероятную популярность, благодаря своей простоте и сытности. Конечно, вы можете купить русские пельмени в любом магазине. Но если хотите получить качественный и вкусный продукт, то потрудитесь немного и налепите их самостоятельно.</span>
    </div>

      <div className='png-div'>
        <img src={pic} alt="" className='pic'/>
        <a href='products'>
          <button className='btn'>View the products</button>
        </a>
      </div>
    </div>
    </>
  //   <Parallax pages={2}>
  //     <ParallaxLayer className='img1PL' offset={0} speed={1} factor={0.5} style={{
  //       // background: '#c1c3ef',
  //       backgroundImage: `url(${img1})`,
  //       backgroundSize: 'Cover'  
  //     }}>
  //     </ParallaxLayer>
      
  //     <ParallaxLayer offset={1} speed={0.5} factor={2} style={{
  //       // background: '#c1c3ef',
  //       backgroundImage: `url(${img2})`,
  //       backgroundSize: 'cover'
  //     }}>
  //       Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque quas rerum eius illo modi quia explicabo eos non delectus dolorum nulla, omnis adipisci illum impedit molestias commodi sequi tenetur fuga?
  //     </ParallaxLayer>
  //   </Parallax>
  )
}

export default HomePage

//     //   </ParallaxLayer> */}
//     // </Parallax>
//   );
// };
