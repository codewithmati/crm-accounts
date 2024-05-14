"use client"
import axios from 'axios';
import React, { useEffect, useState } from 'react';



function formatDate(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Adding 1 because January is 0
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

const Page = () => {

    var [data, setData] = useState([])
    var [voucherData, setVoucherData] = useState([])
    var [formData, setFormData] = useState({
        createdAt:formatDate(new Date())
    })

   
      

    const formHandle = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const submitHandler = async (e) => {
        e.preventDefault()
        try {
            console.log(formData)
            var res = await axios.post("/api/voucher", formData)
            // setData([...data, res.data.message])
            // console.log(res)
        } catch (error) {
            console.log(error)
        }
    }

    const getDynamicLedger = async () => {
        try {
            var { data } = await axios.get("/api/chartOfAccount", formData)
            setData(data.message)
        } catch (error) {
            console.log(error)
        }
    }

    const getVoucherData = async () => {
        try {
            var res = await axios.get("/api/voucher", formData)
            setVoucherData(res?.data?.message)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getDynamicLedger()
        getVoucherData()
    }, [])

    console.log(voucherData)



    return (
        <div>
            <div className='py-10 max-w-4xl mx-auto'>

                <h2 className='text-2xl font-semibold mb-4'>Voucher</h2>

                <form onSubmit={submitHandler} className=" text-black mx-auto p-4 bg-gray-100 rounded-md shadow-md">


                <div className="mb-4">
                        <label htmlFor="createdAt" className="block text-gray-700 text-sm font-bold mb-2">Date:</label>
                        <input onChange={formHandle} type="date" value={formData.createdAt} id="createdAt" name="createdAt" className="border rounded-md px-3 py-2 w-full focus:outline-none focus:border-indigo-600" />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="ledger" className="block text-gray-700 text-sm font-bold mb-2">ledger:</label>
                        <select onChange={formHandle} id="ledger" name="ledger" className="border rounded-md px-3 py-2 w-full focus:outline-none focus:border-indigo-600">
                            <option className='text-black' value="">Select ledger</option>
                            {/* Add options dynamically */}
                            {
                                data?.map((v, i) => {
                                    return (

                                        <option key={i} className='text-black' value={v._id}>{v.name}</option>
                                    )
                                })
                            }
                        </select>
                    </div>

                    <div className="mb-4">
                        <label htmlFor="narration" className="block text-gray-700 text-sm font-bold mb-2">Narration:</label>
                        <input onChange={formHandle} type="text" id="narration" name="narration" className="border rounded-md px-3 py-2 w-full focus:outline-none focus:border-indigo-600" />
                    </div>





                    <div className="mb-4">
                        <label htmlFor="dr" className="block text-gray-700 text-sm font-bold mb-2">Dr:</label>
                        <input onChange={formHandle} type="number" id="dr" name="dr" className="border rounded-md px-3 py-2 w-full focus:outline-none focus:border-indigo-600" />
                    </div>


                    <div className="mb-4">
                        <label htmlFor="cr" className="block text-gray-700 text-sm font-bold mb-2">Cr:</label>
                        <input onChange={formHandle} type="number" id="cr" name="cr" className="border rounded-md px-3 py-2 w-full focus:outline-none focus:border-indigo-600" />
                    </div>


                    <button type="submit" className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                        Submit
                    </button>
                </form>





                <div className="relative overflow-x-auto py-10">
                    <table className="w-full border  mx-auto  text-sm text-left rtl:text-right text-gray-500">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    Date
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Account
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Narration
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Cr
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Dr
                                </th>
                                
                                
                            </tr>
                        </thead>
                        <tbody>
                            {voucherData.map((item, index) => (
                                <tr key={index} className={index % 2 === 0 ? 'bg-white border-b' : 'bg-gray-100 border-b'}>
                                    <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                        {new Date(item.createdAt).toDateString()}
                                    </td>
                                    <td className="px-6 py-4">
                                        {item?.ledger?.name}
                                    </td>
                                    <td className="px-6 py-4">
                                        {item.narration}
                                    </td>
                                    <td className="px-6 py-4">
                                        {item.cr}
                                    </td>
                                    <td className="px-6 py-4">
                                        {item.dr}
                                    </td>
                                    
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>



            </div>
        </div>
    )
}

export default Page