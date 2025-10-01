import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="m-10 grid grid-cols-1 gap-y-6 items-center justify-items-center">
        <button className="text-gray-300 p-1 px-6 rounded-2xl border-1 text-xl border-amber-50">تواصل معنا</button>

        <h1 className="text-3xl sm:text-4xl "><span className="text-blue-700">نقدّم لك</span> التقنية… بشكل يناسبك</h1>
        <p className="text-gray-400 lg:text-xl md:text-[18px] text-center  justify-center items-center">كل اللي تحتاجه في مكان واحد – خدمات رقمية متكاملة مصممة لك وتغطي كل جوانب مشروعك</p>
        
      </div>
      
      <div className="bg-[url(/continents.png)] bg-cover shadow
      grid lg:grid-cols-2 justify-items-center md:grid-cols-1">
        <form className="grid grid-rows-2 gap-y-4 contact-form mt-15 lg:ml-50" action="POST">
          
          <div>
            <label>Name</label>
            <br />
            <input type="text"  placeholder="ex: John Adam"/>
          </div>
        
          <div>
            <label>Email</label>
            <br />
            <input type="email"  placeholder="ex: john@gmail.com"/>
          </div>
          
  
          <div>
            <label>Message</label>
            <br />
            {/* <input type="text" className="h-44 rounded-2xl"/> */}
            <textarea className="h-44 resize-none p-2 w-80 rounded-2xl bg-[#2B2A4A]/80"></textarea>
          </div>

          <div>
            <button className="bg-[#2154FE] hover:bg-[#002bb6] cursor-pointer p-2 px-28 rounded-3xl text-2xl">إرسال رسالة</button>
          </div>

        </form>


        <div className="bg-[#131422]/80 rounded-2xl py-5 pl-10 pr-30 grid grid-rows-4 gap-10 mt-15 lg:mr-50">
          <div>
            <h1 className="text-3xl">Search Us</h1>
            
          </div>
          
          <div className="Email info">
            <div>
              <Image
                className=""
                src="/email.svg"
                alt="Next.js logo"
                width={24}
                height={24}
                priority
              />
            </div>
            <div>
              <h5>E-mail</h5>
              <h5 className="text-[#9F9F9F]">info@inforamtion.sa</h5>
            </div>
          </div>

          <div className="Phone info">
            <div>
              <Image
                className=""
                src="/phone.svg"
                alt="Next.js logo"
                width={24}
                height={24}
                priority
              />
            </div>
            
            <div>
              <h5>Phone</h5>
              <h5 className="text-[#9F9F9F]">+966 5388 75889</h5>
            </div>
          </div>

          <div className="location info">
            <div>
              <Image
                className=""
                src="/location.svg"
                alt="Next.js logo"
                width={24}
                height={24}
                priority
              />
            </div>
            
            <div>
              <h5>location</h5>
              <h5 className="text-[#9F9F9F]">info@inforamtion.sa</h5>
            </div>
          </div>

          <div className="Media flex gap-x-10">
            <div>
              <Image
                className=""
                src="/linkedin.svg"
                alt="Next.js logo"
                width={24}
                height={24}
                priority
              />
            </div>
            <div>
              <Image
                className=""
                src="/instagram logo.svg"
                alt="Next.js logo"
                width={24}
                height={24}
                priority
              />
            </div>
            <div>
              <Image
                className=""
                src="/facebook logo.svg"
                alt="Next.js logo"
                width={24}
                height={24}
                priority
              />
            </div>

            <div>
              <Image
                className=""
                src="/X logo.svg"
                alt="Next.js logo"
                width={24}
                height={24}
                priority
              />
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
