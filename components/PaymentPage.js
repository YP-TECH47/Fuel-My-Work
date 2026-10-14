"use client"
import React from 'react'
import Script from 'next/script'
import { useEffect,useState } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import {fetchUser,fetchPayments} from "@/actions/useractions"
 
import { initiate } from '@/actions/useractions';
import { useSearchParams } from 'next/navigation';
 
 
 

const PaymentPage = ({username}) => {
 
  const getdata= async ( )=>{
    let u = await fetchUser(username);
    setcurrentUser(u)
let dbpayments= await fetchPayments(username)
setpayments(dbpayments)


console.log(u)
console.log(dbpayments)
  }

  useEffect(() => {
    getdata()
  }, [ ])
  
const SearchParams= useSearchParams()
 
  
  const [currentUser, setcurrentUser] = useState( )
  const [ payments, setpayments] = useState([] )
  const [paymentform, setpaymentform] = useState({  name: "",
    message: "",
    amount: "",})
    
    const handlechange=(e)=>{
      setpaymentform({...paymentform,[e.target.name]:e.target.value})
      
    }
    const router = useRouter();
  const pay = async (amount)=>{
    let a = await initiate(amount,username,paymentform)
     
    let orderId =   a.id;
 var options = {
     "key": currentUser.razorpayid, // Enter the Key ID generated from the Dashboard
    "amount": amount, // Amount is in currency subunits. 
    "currency": "INR",
    "name": "Get Me A Chai", //your business name
    "description": "Test Transaction",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFhhFCoI-KowjM2kzcbCK_q0P9YW5Vx7P8E0POCJStyg&s",
    "order_id": orderId, // This is a sample Order ID. Pass the `id` obtained in the response of Step 1
    "callback_url": `${process.env.NEXT_PUBLIC_URL}/api/razorpay`,
    "prefill": { //We recommend using the prefill parameter to auto-fill customer's contact information especially their phone number
        "name": `${session?.user.name}`, //your customer's name
        "email": `${session?.user.email}`,
        "contact": `${session?.user.contact}` //Provide the customer's phone number for better conversion rates 
    },
    "notes": {
        "address": "Razorpay Corporate Office"
    },
     method: {
    upi: true,
    card: true,
    netbanking: true,
    wallet: true,
    emi: false,
    paylater: true,
  },
    "theme": {
        "color": "#3399cc"
    }
};
var rzp1 = new Razorpay(options);
 rzp1.open()
 
  }
  //  const pay = async (amount) => {
  //       // Get the order Id 
  //       let a = await initiate(amount, username, paymentform)
  //       let orderId = a.id
  //       var options = {
  //           "key": process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID, // Enter the Key ID generated from the Dashboard
  //           "amount": amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
  //           "currency": "INR",
  //           "name": "Get Me A Chai", //your business name
  //           "description": "Test Transaction",
  //           "image": "https://example.com/your_logo",
  //           "order_id": orderId, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
  //           "callback_url": `${process.env.NEXT_PUBLIC_URL}/api/razorpay`,
  //           "prefill": { //We recommend using the prefill parameter to auto-fill customer's contact information especially their phone number
  //               "name": "Gaurav Kumar", //your customer's name
  //               "email": "gaurav.kumar@example.com",
  //               "contact": "7690041102" //Provide the customer's phone number for better conversion rates 
  //           },
  //           "notes": {
  //               "address": "Razorpay Corporate Office"
  //           },
  //           "theme": {
  //               "color": "#3399cc"
  //           }
  //       }  

  //       var rzp1 = new window.Razorpay(options);
  //       rzp1.open();
  //   }
    const { data: session } = useSession();    

  const pfp_img =
    "https://c10.patreonusercontent.com/4/patreon-media/p/campaign/4842667/aa52624d1cef47ba91c357da4a7859cf/eyJoIjozNjAsInciOjM2MH0%3D/4.gif?token-hash=HNWn7McRCrqUt9U2lXrBqvzzfm95PAG8YMg0fiin03k%3D&token-time=1783036800";
  const temp_img = "/spiderman_bg.jfif";
  const main_img =
    "https://c10.patreonusercontent.com/4/patreon-media/p/campaign/4842667/452146dcfeb04f38853368f554aadde1/eyJ3IjoxOTIwLCJ3ZSI6MX0%3D/20.gif?token-hash=Ea6_VCjkA8gDYUhEyfLeYl-Iv-qdKB_m2EGR2MSTXkg%3D&token-time=1783123200";
 
  return (
    < >


 
      <Script src="https://checkout.razorpay.com/v1/checkout.js"></Script>
 

  <div className="bg-gray-200 h-100">
        <img
          src={currentUser?.coverpic}
          alt="The cover image of the user"
          className="w-full h-full object-cover"
        />
        <div className="   absolute right-176.25 top-105 w-auto h-auto    ">
          <img
            width={100}
            height={100}
            src={currentUser?.profilepic}
            alt="Profile Picture"
            className="  rounded-full"
          />
        </div>
      </div>
      <div className=" flex flex-col   justify-center items-center   font-medium font-mono my-13     ">
        <div>
          <pre>@{username}</pre>
        </div>
        <div className="  my-1 text-gray-400 ">
        Let's Help {username} get a Chai
        </div>
         <div className='text-slate-400'>
                  {payments.length} Payments .   ₹{payments.reduce((a, b) => a + b.amount, 0)/100} raised
                </div>
      </div>
      <div className="payment flex flex-row h-auto w-auto m-10   justify-center ">
        <div className="makePayment w-full md:w-1/2 bg-slate-900 rounded-lg text-white px-2 md:p-10 mr-5 h-auto">
          <p className="px-9 pt-5 text-xl font-bold">Leaderboard</p>
           <ul className='mx-5 text-lg'>
                            {payments.length == 0 && <li>No payments yet</li>}
                            {payments.map((p, i) => {
                                return <li key={i} className='my-4 flex gap-2 items-center'>
                                    <img width={33} src="avatar.gif" alt="user avatar" />
                                 <span>
    {p.name} donated{" "}
    <span className="font-bold">₹{p.amount / 100}</span>{" "}
    with a message &quot;
     {p.message.length > 15
        ? p.message.slice(0, 15) + "..."
        : p.message}
    &quot;
</span>
                                </li>
                            })}

                        </ul>
        </div>
        <div className="makePayment w-full md:w-1/2 bg-slate-900 rounded-lg text-white px-2 md:p-10 h-full">
          <h2 className="text-2xl font-bold my-5">Make a Payment</h2>
          <div className="flex gap-2 flex-col">
            <div>
              <input
              onChange={handlechange}
              value={paymentform.name}
                name="name"
                type="text"
                className="w-full p-3 rounded-lg bg-slate-800"
                placeholder="Enter Name"
              />
            </div>
            <input
               onChange={handlechange}
               value={paymentform.message}
              name="message"
              type="text"
              className="w-full p-3 rounded-lg bg-slate-800"
              placeholder="Enter Message"
            />

            <input
               onChange={handlechange}
               value={paymentform.amount}
              name="amount"
              type="number"
              className="w-full p-3 rounded-lg bg-slate-800"
              placeholder="Enter Amount"
            />

            <button
              onClick={() => { pay(Number.parseInt(paymentform.amount*100))}}
              disabled={  paymentform.amount<1||paymentform.name<3||paymentform.message<2}
              type="button"
              className="text-white bg-linear-to-br from-purple-900 to-blue-900 hover:bg-linear-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 disabled:bg-slate-600 disabled:from-purple-100"
            >
               
              Pay 
            </button>
          </div>

          <div className="flex flex-col md:flex-row gap-2 mt-5">
            <button className="bg-slate-800 p-3 rounded-lg" onClick={() => {pay(1000)}}>
              Pay ₹10
            </button>
            <button className="bg-slate-800 p-3 rounded-lg" onClick={() => {pay(2000)}}>
              Pay ₹20
            </button>
            <button className="bg-slate-800 p-3 rounded-lg" onClick={() => {pay(3000)}}>
              Pay ₹30
            </button>
          </div>
        </div>
      </div>
    </ >
  )
}

export default PaymentPage
