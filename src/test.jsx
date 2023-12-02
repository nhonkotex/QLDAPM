import React, { useState, useEffect } from 'react';

export default function App() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(false);
    }, 3000); // Thay đổi sau 3 giây

    return () => clearTimeout(timeout); // Clear timeout khi component bị hủy
  }, []); // Chạy một lần khi component được render


  return (
    <>
    <div className="relative pb-32">

    <div className='flex flex-col lg:text-center mt-20 gap-6 mb-16'>
      <h1 className='lg:text-[35px] text-[25px] text-[#0B132A] font-medium font-Rubik'>Trusted by Thousands of <br /> Happy Customer</h1>
      <p className='text-[#4F5665] lg:text-base text-[12px] font-normal'>These are the stories of our customers who have joined us with great <br />
       pleasure when using this crazy feature.</p>
     
          <div className='lg:w-[400px] w-[240px] h-[180px] lg:h-[230px] bgbottomleft lg:p-7 p-2 rounded-[10px] animate__animated animate__fadeInLeft'>
            <div className='flex justify-between'>
              <div>
                <div className='flex items-center gap-4'>
                  <img src="src/assets/image/viezh.png" alt="" />
                  <div>
                    <p className='font-medium lg:text-lg text-base'>Viezh Robert</p>
                    <p className='font-normal lg:text-sm text-[12px] text-[#4F5665]'>Warsaw, Poland</p>
                  </div>
                </div>
              </div>
              <div className='flex items-center gap-1'>
                <p>4.5</p>
                <img src="src/assets/image/star.png" alt="" />
              </div>
            </div>
            <div className='my-4 lg:text-base text-xs text-[#0B132A]'>
              <p>
                “Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been 
                no problems. LaslesVPN always the best”.
              </p>
            </div>
          </div>
        

        <div className='lg:w-[400px] w-[240px] h-[180px] lg:h-[230px] bgbottomcenter lg:p-6 p-2 rounded-[10px]'>
          <div className='flex justify-between'>
            <div>
              <div className='flex items-center gap-4'>
                <img src="src/assets/image/male.png" alt="" />
                <div>
                  <p className='font-medium lg:text-lg text-base'>Yessica Christy</p>
                  <p className='font-normal lg:text-sm text-[12px] text-[#4F5665]'>Shanxi, China</p>
                </div>
              </div>
            </div>
            <div className='flex items-center gap-1'>
              <p>4.5</p>
              <img src="src/assets/image/star.png" alt="" />
            </div>
          </div>
          <div className='my-4 lg:text-base text-[12px] text-[#0B132A]'>
            <p>
            “I like it because I like to travel far and still can connect with high speed.”.
            </p>
          </div>
        </div>

        <div className='lg:w-[400px] w-[240px] h-[180px] lg:h-[230px] bgbottomcenter lg:p-6 p-2 rounded-[10px]'>
          <div className='flex justify-between'>
            <div>
<div className='flex items-center gap-4'>
                <img src="src/assets/image/kimyoungjou.png" alt="" />
                <div>
                  <p className='font-medium lg:text-lg text-base'>Kim Young Jou</p>
                  <p className='font-normal lg:text-sm text-[12px] text-[#4F5665]'>Seoul, South Korea</p>
                </div>
              </div>
            </div>
            <div className='flex items-center gap-1'>
              <p>4.5</p>
              <img src="src/assets/image/star.png" alt="" />
            </div>
          </div>
          <div className='my-4 lg:text-base text-[12px] text-[#0B132A]'>
            <p>
            “This is very unusual for my business that
             currently requires a virtual private network
              that has high security.”.
            </p>
          </div>
        </div>
        
      </div>
      
      <div className='flex justify-between  mt-6'>
        <div className='flex items-center gap-2 my-14 '>
          <p className='bg-[#F53838] lg:w-[45px] w-[25px] h-[10px] rounded-xl'></p>
          <p className='bg-[#DDE0E4] lg:w-[15px] lg:h-[15px] w-[10px] h-[10px] rounded-[50%]'></p>
          <p className='bg-[#DDE0E4] lg:w-[15px] lg:h-[15px] w-[10px] h-[10px] rounded-[50%]'></p>
          <p className='bg-[#DDE0E4] lg:w-[15px] lg:h-[15px] w-[10px] h-[10px] rounded-[50%]'></p>
        </div>
        <div className='flex items-center gap-4'>
          <div className='border-[3px] border-red-500 w-[60px] h-[60px] flex justify-center rounded-[50%] items-center'>
            <img src="src/assets/image/Vector.png" alt="" />
          </div>
          <div className=' bg-[#F53838] w-[60px] h-[60px] flex justify-center rounded-[50%] items-center'>
            <img src="src/assets/image/VectorRight.png" alt="" />
          </div>
        </div>
      </div>

      <div className='bgbottom lg:w-[1200px] w-[770px] h-[233px] lg:h-[233px] lg:px-14 px-8 flex justify-between items-center rounded'>
        <div>
          <h1 className='lg:text-[35px] text-[25px] text-[#0B132A]'>Subscribe Now for <br /> Get Special Features!</h1>
          <p className='lg:text-base text-[12px] mt-2 font-medium text-[#4F5665]'>Let's subscribe with us and find the fun.</p>
        </div>
        <div>
          <button className='text-white bg-[#F53838] lg:text-base font-bold lg:w-[250px] lg:h-[60px]'>Subscribe Now</button>
        </div>
      </div>
  </div>
  </>
  )
}