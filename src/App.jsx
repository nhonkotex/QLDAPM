import React, { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';

export default function App() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 3000); 
    return () => clearTimeout(timer);
  }, []);

  const props = useSpring({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateX(0)' : 'translateX(-100%)',
  });

  return (
    <>
      <div className="relative pb-32">
        <div className='flex flex-col lg:text-center mt-20 gap-6 mb-16'>
        <h1 className='lg:text-[35px] text-[25px] text-[#0B132A] font-medium font-Rubik'>Trusted by Thousands of <br /> Happy Customer</h1>
      <p className='text-[#4F5665] lg:text-base text-[12px] font-normal'>These are the stories of our customers who have joined us with great <br />
       pleasure when using this crazy feature.</p>
        </div>

        <div className="flex lg:gap-10 gap-6 font-Rubik">
          {[0].map(index => (
            <animated.div key={index} style={props} className="flex-shrink-0">
              <div className={`lg:w-[400px] w-[240px] h-[230px] bgbottomcenter lg:p-6 p-2 rounded-[10px] animate__animated animate__fadeInLeft delay-[${index + 1}]s`}>
                <div className='flex justify-between'>
                  <div>
                    <div className='flex items-center gap-4'>
                    <img src="src/assets/image/viezh.png" alt="" />
                    </div>
                  </div>
                  <div className='flex items-center gap-1'>
                  <p>4.5</p>
                  </div>
                </div>
                <div className='my-4 lg:text-base text-xs text-[#0B132A]'>
                <p>
                “Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been 
                no problems. LaslesVPN always the best”.
              </p>
                </div>
              </div>

              <div className={`lg:w-[400px] w-[240px] h-[230px] bgbottomcenter lg:p-6 p-2 rounded-[10px] animate__animated animate__fadeInLeft delay-[${index + 1}]s`}>
                <div className='flex justify-between'>
                  <div>
                    <div className='flex items-center gap-4'>
                    <img src="src/assets/image/viezh.png" alt="" />
                    </div>
                  </div>
                  <div className='flex items-center gap-1'>
                  <p>4.5</p>
                  </div>
                </div>
                <div className='my-4 lg:text-base text-xs text-[#0B132A]'>
                <p>
                “Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been 
                no problems. LaslesVPN always the best”.
              </p>
                </div>
              </div>
              <div className={`lg:w-[400px] w-[240px] h-[230px] bgbottomcenter lg:p-6 p-2 rounded-[10px] animate__animated animate__fadeInLeft delay-[${index + 1}]s`}>
                <div className='flex justify-between'>
                  <div>
                    <div className='flex items-center gap-4'>
                    <img src="src/assets/image/viezh.png" alt="" />
                    </div>
                  </div>
                  <div className='flex items-center gap-1'>
                  <p>4.5</p>
                  </div>
                </div>
                <div className='my-4 lg:text-base text-xs text-[#0B132A]'>
                <p>
                “Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been 
                no problems. LaslesVPN always the best”.
              </p>
                </div>
              </div>
            </animated.div>
          ))}
        </div>

        <div className='flex justify-between mt-6'>
          {/* Phần dấu chấm */}
          <div className='flex items-center gap-4'>
            {/* Hình ảnh */}
          </div>
        </div>

        <div className='bgbottom lg:w-[1200px] w-[770px] h-[233px] lg:h-[233px] lg:px-14 px-8 flex justify-between items-center rounded'>
          <div>
            {/* Tiêu đề và mô tả */}
          </div>
          <div>
            {/* Nút Subscribe */}
          </div>
        </div>
      </div>
    </>
  );
}
