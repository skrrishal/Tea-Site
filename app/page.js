

export default function Home() {
  return (
    <>
      <div className=" text-white h-[50vh] flex flex-col justify-center items-center  gap-4">

        <div className="font-sans font-bold text-5xl flex justify-center items-center gap-4">
          Tea
          <span className="border border-blue-700 rounded-full ring-1"><img width={170} height={170} src="/teaTime.webp" alt="Tea_GIF" /></span>
          Site
        </div>

        <p>
          Here you can have Chai
        </p>

        <div className="flex m-2 gap-3">
          <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Start Now</button>

          <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Read More</button>
        </div>

      </div>

      <hr className="h-px mt-10 w-full bg-gray-200 border-0 dark:bg-gray-700" />

      <div className="text-white container mx-auto py-20">

        <h2 className="text-4xl font-bold text-center mb-10">Your Friends can buy a Chai</h2>

        <div className="flex justify-around gap-5 ">
          {/* First GIF */}
          <div className="item space-y-3 flex flex-col items-center justify-center hover:scale-125 cursor-pointer">
            <img width={88} src="/grandpa_giphy.gif" alt="Tea-Man" />
            <p className="font-bold">Find Your Friends</p>
            <p className="text-center">You can join many group for Collaboration</p>
          </div>

          {/* Second GIF */}
          <div className="item space-y-3 flex flex-col items-center justify-center hover:scale-125 cursor-pointer">
            <img width={88} src="coin_giphy.gif" alt="Coin" />
            <p className="font-bold">Fund Yourself</p>
            <p className="text-center">You can join many group for Collaboration</p>
          </div>

          {/* Third GIF */}
          <div className="item space-y-3 flex flex-col items-center justify-center hover:scale-125 cursor-pointer">
            <img width={88} src="group_giphy.gif" alt="Group" />
            <p className="font-bold">Join in Groups</p>
            <p className="text-center">You can join many group for Collaboration</p>
          </div>
        </div>
      </div>


      <hr className="h-px mt-10 mx-[80px] bg-gray-200 border-0 dark:bg-gray-700" />


      <div className="text-white container mx-auto py-20 ">

        <h2 className="text-5xl font-bold text-center mb-10">Hitman Uncle</h2>
        <div className="text-center font-serif text-[18px] mb-6">
          <p >Hitman Uncle will prepare Tea and Coffee for us.</p>
          <p >Enjoy it.</p>
        </div>
        <div className="flex justify-around gap-5 ">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/Z29ORu6_p34?si=aAyMqxk9Twtf8QSf" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>
      </div>

    </>
  );
}
