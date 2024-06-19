import React from 'react'

const Username = ({ params }) => {
  return (
    <>
      <div className='cover w-full relative'>
        <img className='object-cover' src="/profile_holder.gif" alt="My_Poster" />

        <div className='absolute -bottom-24 right-[45%] border border-white rounded-full'>
          <img width={150} height={150} className='rounded-full' src="/profile_picture.jpeg" alt="Profile_Picture" />
        </div>
      </div>


      <div className="info flex flex-col justify-center items-center my-28 ">
        <div className='font-semibold text-xl pb-3'>
          @{params.username}
        </div>

        <div className='font-normal text-[14px] text-slate-400 p-2'>
          Creating Animated art for VTT's
        </div>

        <div className='font-normal text-[14px] text-slate-400 p-2 '>
          11,685 members • 85 posts • $16,090/release
        </div>


        <div className="Payment flex gap-3 w-[80%] mt-10 ">

          <div className="Supporters custom-gradient w-1/2 bg-slate-900 rounded-lg p-10 font-mono">
            {/* Show list the suppoerters of leaderboard */}

            <h2 className='text-3xl font-serif font-bold text-center'>Supporters</h2>

            <ul className='mt-2 text-[20px] '>

              <li className='my-2 flex items-center gap-3 pt-8'>
                <img width={40} height={40} src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExazNxbWtsMnZ5amJ1OHp2amZlZ240N3czeWVveXp6YzJvdjBydWNrMCZlcD12MV9zdGlja2Vyc19zZWFyY2gmY3Q9cw/bPn4wmkzg9m2AkqVF3/giphy.gif" alt="User_Avatar" />

                <span>
                  Jelly donated <span className='font-bold underline italic'>$1000</span> with the message ""
                </span>

              </li>


              <li className='my-2 flex items-center gap-3 pt-8'>
                <img width={40} height={40} src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExazNxbWtsMnZ5amJ1OHp2amZlZ240N3czeWVveXp6YzJvdjBydWNrMCZlcD12MV9zdGlja2Vyc19zZWFyY2gmY3Q9cw/bPn4wmkzg9m2AkqVF3/giphy.gif" alt="User_Avatar" />

                <span>
                  Jelly donated <span className='font-bold underline italic'>$1000</span> with the message ""
                </span>

              </li>


              <li className='my-2 flex items-center gap-3 pt-8'>
                <img width={40} height={40} src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExazNxbWtsMnZ5amJ1OHp2amZlZ240N3czeWVveXp6YzJvdjBydWNrMCZlcD12MV9zdGlja2Vyc19zZWFyY2gmY3Q9cw/bPn4wmkzg9m2AkqVF3/giphy.gif" alt="User_Avatar" />

                <span>
                  Jelly donated <span className='font-bold underline italic'>$1000</span> with the message ""
                </span>

              </li>


              <li className='my-2 flex items-center gap-3 pt-8'>
                <img width={40} height={40} src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExazNxbWtsMnZ5amJ1OHp2amZlZ240N3czeWVveXp6YzJvdjBydWNrMCZlcD12MV9zdGlja2Vyc19zZWFyY2gmY3Q9cw/bPn4wmkzg9m2AkqVF3/giphy.gif" alt="User_Avatar" />

                <span>
                  Jelly donated <span className='font-bold underline italic'>$1000</span> with the message ""
                </span>

              </li>


              <li className='my-2 flex items-center gap-3 pt-8'>
                <img width={40} height={40} src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExazNxbWtsMnZ5amJ1OHp2amZlZ240N3czeWVveXp6YzJvdjBydWNrMCZlcD12MV9zdGlja2Vyc19zZWFyY2gmY3Q9cw/bPn4wmkzg9m2AkqVF3/giphy.gif" alt="User_Avatar" />

                <span>
                  Jelly donated <span className='font-bold underline italic'>$1000</span> with the message ""
                </span>

              </li>


              <li className='my-2 flex items-center gap-3 pt-8'>
                <img width={40} height={40} src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExazNxbWtsMnZ5amJ1OHp2amZlZ240N3czeWVveXp6YzJvdjBydWNrMCZlcD12MV9zdGlja2Vyc19zZWFyY2gmY3Q9cw/bPn4wmkzg9m2AkqVF3/giphy.gif" alt="User_Avatar" />

                <span>
                  Jelly donated <span className='font-bold underline italic'>$1000</span> with the message ""
                </span>

              </li>


              <li className='my-2 flex items-center gap-3 pt-8'>
                <img width={40} height={40} src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExazNxbWtsMnZ5amJ1OHp2amZlZ240N3czeWVveXp6YzJvdjBydWNrMCZlcD12MV9zdGlja2Vyc19zZWFyY2gmY3Q9cw/bPn4wmkzg9m2AkqVF3/giphy.gif" alt="User_Avatar" />

                <span>
                  Jelly donated <span className='font-bold underline italic'>$1000</span> with the message ""
                </span>

              </li>


            </ul>

          </div>

          <div className="MakePayment w-1/2 bg-slate-900 rounded-lg p-10 h-fit custom-red-gradient">
            <h2 className='text-3xl font-bold my-5'>Make Payment</h2>

            {/* MAKE PAYMENT */}

            <div className='flex flex-col gap-5'>
              <input type="text" className='w-full p-3 rounded-lg bg-slate-800 hover:bg-slate-700' placeholder='Enter your Username' />
              <input type="text" className='w-full p-3 rounded-lg bg-slate-800 hover:bg-slate-700' placeholder='Enter your Message' />
              <input type="text" className='w-full p-3 rounded-lg bg-slate-800 hover:bg-slate-700' placeholder='Enter Amount' />
              <button type="button" className="text-white w-[100px] h-[50px] my-3 self-center text-[20px] bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Pay</button>            </div>

            {/* Or Choose Amounts  */}

            <div className='flex gap-7 mt-5 justify-center'>
              <button className='bg-slate-800 p-3 rounded-lg w-fit self-center hover:bg-slate-700'>Pay ₹ 10</button>
              <button className='bg-slate-800 p-3 rounded-lg w-fit self-center hover:bg-slate-700'>Pay ₹ 20</button>
              <button className='bg-slate-800 p-3 rounded-lg w-fit self-center hover:bg-slate-700'>Pay ₹ 30</button>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default Username
