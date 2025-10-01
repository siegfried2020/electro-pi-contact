import Image from "next/image";



export default function aboutUs(){
  return(
    <div>
      <div className="m-10 grid grid-cols-1 gap-y-6 items-center justify-items-center">
        <button className="text-gray-300 p-1 px-6 rounded-2xl border-1 text-xl border-amber-50">أهم التقنيات</button>

        <h1 className="text-3xl sm:text-4xl font-bold">.<span className="text-blue-700"> اكتشف حلولنا</span> …التقنية الجاهزة</h1>
        <p className="text-gray-400 lg:text-xl md:text-[18px] text-center justify-center items-center">
          حلول تقنية جاهزة، صُممت بدقة لتلبية متطلباتك القياسية اختر حلك الجاهز، وانطلق نحو المستقبل الآن
        </p>
        <h1 className="text-3xl sm:text-4xl font-bold">اختر تقنيتك المناسبة لك</h1>
      </div>

      <div className="justify-center items-center grid 2xl:grid-cols-4 gap-10 lg:grid-cols-2 p-20 md:grid-cols-1">
        <div className="card-border 1">
          <div className="Image-pos 1">

            <Image
              className=""
              src="/cellphone.svg"
              alt="Next.js logo"
              width={30}
              height={50}
              priority
            />
          </div>
          
          <div className="text-right">

            <h5 className="text-2xl">تطبيقات الجوال</h5>
            <p className="gray-card-text">تطبيقات جوال متكاملة وتفاعلية وتستجيب لاحتياجات المستخدمين</p>
            <br />
            <p className="gray-card-text">تبدأ من</p>
            <h5 className="text-2xl">2000ريال</h5>
          </div>
          <button className="blue-button">اطلب الآن</button>
        </div>
        
        <div className="card-border 2">
          <div className="Image-pos">

            <Image
              className=""
              src="/mask_group.svg"
              alt="Next.js logo"
              width={60}
              height={100}
              priority
            />
          </div>

          
          <div className="text-right">

            <h5 className="text-2xl">تطبيقات الجوال</h5>
            <p className="gray-card-text">تطبيقات جوال متكاملة وتفاعلية وتستجيب لاحتياجات المستخدمين</p>
            <br />
            <p className="gray-card-text">تبدأ من</p>
            <h5 className="text-2xl">2000ريال</h5>
          </div>
          <button className="blue-button">اطلب الآن</button>

        </div>

        <div className="card-border 3">
          <div className="Image-pos">
            <Image
              className=""
              src="/cellphone.svg"
              alt="Next.js logo"
              width={30}
              height={50}
              priority
            />
          </div>

          
          <div className="text-right">

            <h5 className="text-2xl">تطبيقات الجوال</h5>
            <p className="gray-card-text">تطبيقات جوال متكاملة وتفاعلية وتستجيب لاحتياجات المستخدمين</p>
            <br />
            <p className="gray-card-text">تبدأ من</p>
            <h5 className="text-2xl">2000ريال</h5>
          </div>
          <button className="blue-button">اطلب الآن</button>


        </div>
        
        <div className="card-border">
          <div className="Image-pos">
            <Image
              className=""
              src="/mask_group.svg"
              alt="Next.js logo"
              width={60}
              height={50}
              priority
            />
          </div>
          
          <div className="text-right">

            <h5 className="text-2xl">تطبيقات الجوال</h5>
            <p className="gray-card-text">تطبيقات جوال متكاملة وتفاعلية وتستجيب لاحتياجات المستخدمين</p>
            <br />
            <p className="gray-card-text">تبدأ من</p>
            <h5 className="text-2xl">2000ريال</h5>
          </div>
          <button className="blue-button">اطلب الآن</button>


        </div>

      </div>

      <div className="text-center mt-10">
        <h1 className="text-3xl font-bold">طلب خدمة مخصصة</h1>
      </div>
      
      
      <div className="flex justify-center items-center">

        <form className="bg-[#2d2c2c] rounded-xl text-right p-5 w-6xl max-lg:m-10">
          <div className="grid lg:grid-cols-2 gap-10 sm:grid-cols-1">
            
            <div className="c-2 grid grid-cols-1">
              <label className="font-bold">البريد الألكتروني</label>
              <input className="about-input lg:w-full" type="text" placeholder="ex: john@gmail.com" />
            </div>

            <div className="c-1 grid grid-cols-1">
              <label className="font-bold">الأسم</label>
              <input className="about-input lg:w-full " type="text" placeholder="ex: john Adams" />
            </div>
            

          </div>

          <div className="grid grid-cols-1 gap-2 mt-5">
            <label>وصف المشروع بالتفصيل</label>
            <textarea className="resize-none text-right about-input rounded-xl px-3 h-44" placeholder="وصف المشروع"></textarea>

            <label>الميزانية المقترحة</label>
            <textarea className="resize-none text-right about-input rounded-xl p-3 " placeholder="الميزانية المقترحة(بالريال) "></textarea>
          </div>

          <button className="blue-button w-full mt-5">اطلب الآن</button>
        </form>
      </div>
    </div>
  )

}