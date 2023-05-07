import React from 'react'
import home2 from "../../IT20620202/UserView/images/Homepage1.jpg"
import A_positive from "../Images/A+.jpg"
import B_positive from "../Images/B+.jpg"
import O_positive from "../Images/o+.jpg"
import A_negative from "../Images/A-.jpg"
import B_negative from "../Images/B-.jpg"
import AB_negative from "../Images/AB-.jpg"
import O_negative from "../Images/O-.jpg"
import AB_positive from "../Images/AB+.jpg"


function BloodCount() {
  return (
    <div className='ml-15'>
         <div className="w-full bg-gray-100 py-10 text-center">
        <h1 className="text-2xl">Blood Counts</h1>
      </div>
        <div className='flex nowrap gap-10 ml-20 mt-20'>
            <div className="bg-white w-1/5">
                <div className="shadow-md rounded-lg">
                <img
                    className="object-cover h-full w-full rounded-t-lg"

                    src={A_positive}

                    alt="Card images cap"
                />
                <div className="p-5">
                    <h5 className="text-2xl font-semibold mb-4 text-center">23 Pints</h5>
                    
                </div>
                </div>
            </div>

            <div className="bg-white w-1/5">
                <div className="shadow-md rounded-lg">
                <img
                    className="object-cover h-full w-full rounded-t-lg"

                    src={B_positive}

                    alt="Card images cap"
                />
                <div className="p-5">
                    <h5 className="text-2xl font-semibold mb-4 text-center">12 Pints</h5>
                    
                </div>
                </div>
            </div>

            <div className="bg-white w-1/5">
                <div className="shadow-md rounded-lg">
                <img
                    className="object-cover h-full w-full rounded-t-lg"

                    src={O_positive}

                    alt="Card images cap"
                />
                <div className="p-5">
                    <h5 className="text-2xl font-semibold mb-4 text-center">43 Pints</h5>
                    
                </div>
                </div>
            </div>

            <div className="bg-white w-1/5">
                <div className="shadow-md rounded-lg">
                <img
                    className="object-cover h-full w-full rounded-t-lg"

                    src={AB_positive}

                    alt="Card images cap"
                />
                <div className="p-5">
                    <h5 className="text-2xl font-semibold mb-4 text-center">18 Pints</h5>
                    
                </div>
                </div>
            </div>
        
        </div>

        <div className='flex nowrap gap-10 ml-20 mt-20 '>
            <div className="bg-white w-1/5">
                <div className="shadow-md rounded-lg">
                <img
                    className="object-cover h-full w-full rounded-t-lg"

                    src={A_negative}

                    alt="Card images cap"
                />
                <div className="p-5">
                    <h5 className="text-2xl font-semibold mb-4 text-center">9 Pints</h5>
                    
                </div>
                </div>
            </div>

            <div className="bg-white w-1/5">
                <div className="shadow-md rounded-lg">
                <img
                    className="object-cover h-full w-full rounded-t-lg"

                    src={AB_negative}

                    alt="Card images cap"
                />
                <div className="p-5">
                    <h5 className="text-2xl font-semibold mb-4 text-center">31 Pints</h5>
                    
                </div>
                </div>
            </div>

            <div className="bg-white w-1/5">
                <div className="shadow-md rounded-lg">
                <img
                    className="object-cover h-full w-full rounded-t-lg"

                    src={B_negative}

                    alt="Card images cap"
                />
                <div className="p-5">
                    <h5 className="text-2xl font-semibold mb-4 text-center">55 Pints</h5>
                    
                </div>
                </div>
            </div>

            <div className="bg-white w-1/5">
                <div className="shadow-md rounded-lg">
                <img
                    className="object-cover h-full w-full rounded-t-lg"

                    src={O_negative}

                    alt="Card images cap"
                />
                <div className="p-5">
                    <h5 className="text-2xl font-semibold mb-4 text-center">25 Pints</h5>
                    
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default BloodCount
