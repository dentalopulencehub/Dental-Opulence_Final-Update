import Image from 'next/image'
import React from 'react'

const GoogleCard = () => {
  const arr = ['', '', '', '', '']
  return (
    <div className=" flex flex-col h-full relative min-h-[23.1rem] group w-full google-card   justify-between border-b border-[#383838] pb-[1.9rem]">
      <div />
      <div className="flex gap-[1.63rem]">
        <img src="/image/g.svg" alt='googleIcon' />
        <div className=" text-2xl font-encode text-black group-hover:text-[#ff3d2d]">
          <div className="flex  gap-[0.56rem]">
            {arr.map((star, i) => (
              <svg
                key={i}
                xmlns="http://www.w3.org/2000/svg"
                width="29"
                height="29"
                viewBox="0 0 29 29"
                className=" transition-all"
                fill="none"
              >
                <g clip-path="url(#clip0_550_1606)">
                  <path
                    d="M28.9242 11.1232C28.7332 10.5359 28.2124 10.1202 27.5986 10.0647L19.2272 9.30465L15.9187 1.55891C15.6745 0.989844 15.1187 0.622559 14.5 0.622559C13.8814 0.622559 13.3254 0.989844 13.0827 1.55891L9.77423 9.30465L1.40145 10.0647C0.787689 10.1213 0.267959 10.537 0.0759084 11.1232C-0.115036 11.7104 0.0613055 12.3544 0.525501 12.7616L6.85365 18.3104L4.9878 26.5283C4.85128 27.1326 5.08581 27.7574 5.58718 28.1198C5.85667 28.3156 6.17329 28.4134 6.49101 28.4134C6.76404 28.4134 7.03729 28.3409 7.28134 28.1948L14.5 23.8786L21.7174 28.1948C22.2469 28.5112 22.9126 28.4822 23.4129 28.1198C23.9143 27.7574 24.1488 27.1326 24.0123 26.5283L22.1464 18.3104L28.4746 12.7616C28.9386 12.3544 29.1151 11.7117 28.9242 11.1232Z"
                    fill="currentColor"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_550_1606">
                    <rect width="29" height="29" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            ))}
          </div>

          <p className="text-[#1E1E1E] mt-2"> 250 reviews  </p>
        </div>
      </div>
      <div className="flex gap-[1.27rem]">
        <img src="/image/google.svg" />
        <img src="/image/arrow-diagonal.svg" className='arrow-transition-1 transition-all group-hover:opacity-100 opacity-0' />
        <img src="/image/arrow-diagonal.svg" className='arrow-transition-2 transition-all group-hover:opacity-0 opacity-100' />
        {/* <div className="c-contact-slider__ico">
          <div
            className="c-contact-slider__ico__item u-hover w-embed"
            style={{
              transform:
                'translate3d(125%, -125%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
              transformStyle: 'preserve-3d',
            }}
          >
            <svg fill="none" viewBox="0 0 32 32">
              <path
                fill="black"
                fillRule="evenodd"
                d="M3.414 2h26v26h-4V8.828L4.828 29.414 2 26.586 22.586 6H3.414V2Z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div
            data-w-id="5d919f60-03b1-970d-0d18-8edfc0b5c5ce"
            className="c-contact-slider__ico__item has--hover w-embed"
            style={{
              transform:
                'translate3d(0%, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
              transformStyle: 'preserve-3d',
            }}
          >
            <svg fill="none" viewBox="0 0 32 32">
              <path
                fill="black"
                fillRule="evenodd"
                d="M3.414 2h26v26h-4V8.828L4.828 29.414 2 26.586 22.586 6H3.414V2Z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div> */}


        {/* initial */}
        {/* top */}
        {/* style="transform: translate3d(0%, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); transform-style: preserve-3d; */}
        {/* bottom */}
        {/* transform: translate3d(-125%, 125%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); transform-style: preserve-3d; */}
      </div>
    </div>
  )
}

export default GoogleCard
