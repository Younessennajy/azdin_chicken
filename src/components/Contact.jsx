import React from 'react';

const Contact = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between bg-white shadow-lg rounded-lg p-6 max-w-4xl mx-auto mt-10">
      <div className="lg:w-1/2 mb-6 lg:mb-0">
        <h2 className="text-3xl text-center font-bold mb-4">تواصل معنا</h2>
        <p className="text-gray-600 mb-4 text-right">
         نحن هنا للإجابة على جميع استفساراتكم وتقديم الدعم اللازم. سواء كنتم بحاجة لمزيد من المعلومات حول منتجاتنا، أو ترغبون في تقديم ملاحظاتكم واقتراحاتكم، يسعدنا التواصل معكم. <br/>
        <span className='font-bold  text-lg'> !نحن دائماً في خدمتك    </span>    
        </p>

        {/* Location */}
        <div className="flex items-center mb-4 gap-3">
        <svg fill="#00b92f" height="64px" width="64px" version="1.1" id="Capa_1" viewBox="0 0 490 490">
    <g id="SVGRepo_iconCarrier"> 
      <g>
        <path d="M245.001,0C156.458,0,84.424,71.987,84.424,160.472c0,85.04,145.93,315.146,152.142,324.9
        c1.836,2.882,5.017,4.628,8.435,4.628c3.418,0,6.599-1.746,8.434-4.628c6.212-9.754,152.141-239.861,152.141-324.9
        C405.576,71.987,333.542,0,245.001,0z M245.001,461.127c-13.207-21.363-40.009-65.587-66.549-114.588
        c-48.429-89.418-74.027-153.758-74.027-186.067C104.424,83.015,167.487,20,245.001,20c77.514,0,140.575,63.015,140.575,140.472
        c0,32.309-25.599,96.649-74.027,186.067C285.009,395.539,258.207,439.764,245.001,461.127z"></path> 
        <path d="M244.999,76.071c-41.884,0-75.959,33.149-75.959,73.894c0,40.744,34.075,73.891,75.959,73.891s75.959-33.147,75.959-73.891
        C320.958,109.22,286.883,76.071,244.999,76.071z M244.999,203.855c-30.855,0-55.959-24.175-55.959-53.891
        c0-29.717,25.104-53.894,55.959-53.894s55.959,24.177,55.959,53.894C300.958,179.68,275.855,203.855,244.999,203.855z"></path> 
      </g> 
    </g>
  </svg>
          <div>
            <span className="font-bold">Location:</span>
            <p>ain zemzem, Galaz Taounate</p>
          </div>
        </div>

        {/* Email */}
        <div className="flex items-center mb-4 gap-3">
          <svg width="64px" height="64px" viewBox="0 0 24 24" fill="#00b92f">
            <path fillRule="evenodd" clipRule="evenodd" d="M3.75 5.25L3 6V18L3.75 18.75H20.25L21 18V6L20.25 5.25H3.75ZM4.5 7.6955V17.25H19.5V7.69525L11.9999 14.5136L4.5 7.6955ZM18.3099 6.75H5.68986L11.9999 12.4864L18.3099 6.75Z" />
          </svg>
          <div>
            <span className="font-bold">Email:</span>
            <p>info@example.com</p>
          </div>
        </div>

        {/* Phone */}
        <div className="flex items-center gap-3">
          <svg width="64px" height="64px" viewBox="0 0 24 24" fill="none" stroke="#00b92f">
            <path d="M14.3308 15.9402L15.6608 14.6101C15.8655 14.403 16.1092 14.2384 16.3778 14.1262C16.6465 14.014 16.9347 13.9563 17.2258 13.9563C17.517 13.9563 17.8052 14.014 18.0739 14.1262C18.3425 14.2384 18.5862 14.403 18.7908 14.6101L20.3508 16.1702C20.5579 16.3748 20.7224 16.6183 20.8346 16.887C20.9468 17.1556 21.0046 17.444 21.0046 17.7351C21.0046 18.0263 20.9468 18.3146 20.8346 18.5833C20.7224 18.8519 20.5579 19.0954 20.3508 19.3L19.6408 20.02C19.1516 20.514 18.5189 20.841 17.8329 20.9541C17.1469 21.0672 16.4427 20.9609 15.8208 20.6501C10.4691 17.8952 6.11008 13.5396 3.35083 8.19019C3.03976 7.56761 2.93414 6.86242 3.04914 6.17603C3.16414 5.48963 3.49384 4.85731 3.99085 4.37012L4.70081 3.65015C5.11674 3.23673 5.67937 3.00464 6.26581 3.00464C6.85225 3.00464 7.41488 3.23673 7.83081 3.65015L9.40082 5.22021C9.81424 5.63615 10.0463 6.19871 10.0463 6.78516C10.0463 7.3716 9.81424 7.93416 9.40082 8.3501L8.0708 9.68018C8.95021 10.8697 9.91617 11.9926 10.9608 13.04C11.9994 14.0804 13.116 15.04 14.3008 15.9102L14.3308 15.9402Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <div>
            <span className="font-bold">Call:</span>
            <p>06 44 30 03 11</p>
          </div>
        </div>
      </div>

      <div className="lg:w-1/2 w-full">
        <iframe
          className="w-full h-64 rounded-lg shadow-lg"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13273.84544412222!2d-4.89072!3d34.53139!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDMxJzUzLjAiTiA0wrA1Myc0MS4yIlc!5e0!3m2!1sen!2sfr!4v1631317762059!5m2!1sen!2sfr"
          allowFullScreen=""
          loading="lazy"
          title="Google Maps Location"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
