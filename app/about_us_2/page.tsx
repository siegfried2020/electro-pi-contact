import Image from "next/image";

export default function About_us_2(){
  return(
    <div>
      <div className="m-10 grid grid-cols-1 gap-y-6 items-center justify-items-center">
        <button className="text-gray-300 p-1 px-6 rounded-2xl border-1 text-xl border-amber-50">أهم التقنيات</button>

        <h1 className="text-3xl sm:text-4xl font-bold">اطلب استشارة	</h1>
        <p className="text-gray-400 md:text-xl  text-center justify-center items-center">
          ...تواصل مع خبرائنا لمناقشة احتياجاتك واستكشاف الحلول
        </p>
        <h1 className="text-3xl sm:text-4xl font-bold">تعرّف على مستشارينا	</h1>
      </div>

      <div className=" grid xl:grid-cols-3 sm:grid-cols-1 justify-items-center items-center">
        <div className="pic-1 text-center">
          <Image
            className=""
            src="/worker.svg"
            alt="Next.js logo"
            width={270}
            height={280}
            priority
          />

          <h5 className="text-xl">راكان الزهراني</h5>
          <p className="gray-card-text">خبير في الأمن السيبراني؛ خبرة 10+ سنوات</p>
        </div>

        <div className="pic-2 text-center">
          <Image
            className=""
            src="/worker.svg"
            alt="Next.js logo"
            width={270}
            height={280}
            priority
          />

          <h5 className="text-xl">راكان الزهراني</h5>
          <p className="gray-card-text">خبير في الأمن السيبراني؛ خبرة 10+ سنوات</p>
        </div>

        <div className="pic-3 text-center">
          <Image
            className=""
            src="/worker.svg"
            alt="Next.js logo"
            width={270}
            height={280}
            priority
          />

          <h5 className="text-xl">راكان الزهراني</h5>
          <p className="gray-card-text">خبير في الأمن السيبراني؛ خبرة 10+ سنوات</p>
        </div>
      </div>

      <div className="md:text-3xl text-right p-10 list-none">
        <h5 className="my-5">ماذا تتوقع من الجلسة؟</h5>
        <ul className="text-gray-400 md:text-3xl sm:text-xl">
          <li className="about-list">.تحليل فني شامل: فحص دقيق للبنية التحتية، ونقاط القوة والضعف في إعداداتك التقنية الحالية</li>
          <li className="about-list">.خيارات حلول مصممة خصيصًا: عروض واضحة ومقارنات بين الحلول التقنية المتاحة، تناسب ميزانيتك وأهدافك</li>
          <li className="about-list">.خارطة طريق تنفيذية مفصّلة: خطة عمل متسلسلة وخطوات واضحة للانطلاق في مشروعك فورًا</li>
          <li className="about-list">.تقليل المخاطر التقنية: إرشادات ونصائح عملية لتجنب الأخطاء الشائعة وحماية مشروعك من التعثر أو تجاوز الميزانية</li>
          <li className="about-list">.انطلاق المشروع بثقة: تمكينك من اتخاذ القرارات الصحيحة والبدء في رحلتك التقنية بخطوات مدروسة وموثوقة</li>
        </ul>
      </div>

      
      <div className="text-center my-5">
        <h1 className="text-3xl font-bold">احجز استشارتك</h1>
      </div>

      <div className="flex justify-center items-center">

        <form className="bg-[#2d2c2c] lg:w-6xl rounded-xl text-right p-5 md:w-2xl ">

          <div className="grid grid-cols-1 gap-2 mt-5">
            <label className="font-bold">اختر التاريخ والوقت</label>
            <textarea className="resize-none text-right about-input rounded-xl p-3 lg:h-20" placeholder="اختر وقتك"></textarea>

            <label className="font-bold">اختر نوع المشكلة</label>
            <textarea className="resize-none text-right about-input rounded-xl p-3 " placeholder="تحليل البيانات"></textarea>
          </div>

          <button className="blue-button w-full mt-10">اطلب الآن</button>

        </form>
      </div>
    </div>
  )
}