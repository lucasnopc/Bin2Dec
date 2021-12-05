import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Bin2dec() {
  const [numConverter, setNumConverter] = useState(0)

  const changeInputNumber = e => {
    if (e.target.value && e.target.value.length < 9) {
      const n = Number(e.target.value.slice(-1))
      if (n == 1 || n == 0) {
        const digit = parseInt(e.target.value, 2);
        setNumConverter(digit)
      } else {
        toast.error('the number you entered is different from 0 and 1')
        const newval = e.target.value.substring(0, e.target.value.length - 1)
        e.target.value = newval
      }
    } else {
      toast.warning('the field only accepts a maximum of 8 characters')
      const newval = e.target.value.substring(0, e.target.value.length - 1)
      e.target.value = newval
    }
  }
  return <div className="bg-red-500 h-screen flex items-center justify-center p-5">
    <div className="w-3/5">
      <h2 className="font-bold text-center text-2xl">Bin2Dec</h2>
      <h3 className="text-center text-lg">Binary-to-Decimal number converter</h3>
      <p className="text-center">Enter up to 8 digits (0 or 1) that represent the binary number you want to convert</p>
      <div className="w-full">
        <input onChange={e => { changeInputNumber(e) }} type="number" className="w-full block p-2 outline-none text-red-500 font-bold" />
      </div>
      <span className="text-2xl md:text-4xl w-full text-center block p-3 ">{numConverter}</span>
    </div>
    <ToastContainer
      position="top-right"
      autoClose={3000}
      hideProgressBar
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover />
  </div>
}