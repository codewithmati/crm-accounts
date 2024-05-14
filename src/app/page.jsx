"use client"
import axios from 'axios';
import React, { useEffect, useState } from 'react';


const Form = () => {

  var [data,setData] = useState([])
  var [formData,setFormData] = useState({})

  const formHandle = (e) =>{
    setFormData({...formData,[e.target.name]:e.target.value})
  }

  const submitHandler =async (e) =>{
    e.preventDefault()
    try {
      var res = await axios.post("/api/chartOfAccount",formData)
      setData([...data,res.data.message])
    } catch (error) {
      console.log(error)
    }
  }

  const getData =async () =>{
    try {
      var {data} = await axios.get("/api/chartOfAccount",formData)
      setData(data.message)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(()=>{
    getData()
  },[])

  return (
    <div className='py-10 max-w-4xl mx-auto'>

    <h2 className='text-2xl font-semibold mb-4'>Chart of Account</h2>

    <form onSubmit={submitHandler} className=" text-black mx-auto p-4 bg-gray-100 rounded-md shadow-md">
      <div className="mb-4">
        <label htmlFor="main" className="block text-gray-700 text-sm font-bold mb-2">Main:</label>
        <select onChange={formHandle} id="main" name="main" className="border rounded-md px-3 py-2 w-full focus:outline-none focus:border-indigo-600">
          <option className='text-black' value="">Select Main</option>
          {/* Add options dynamically */}
          <option className='text-black' value="Assets">Assets</option>
          <option className='text-black' value="Liabilities">Liabilities</option>
          <option className='text-black' value="Capital">Capital</option>
        </select>
      </div>
      <div className="mb-4">
        <label htmlFor="sub" className="block text-gray-700 text-sm font-bold mb-2">Sub:</label>
        <select onChange={formHandle} id="sub" name="sub" className="border rounded-md px-3 py-2 w-full focus:outline-none focus:border-indigo-600">
          <option className='text-black' value="">Select Sub</option>
          {/* Add options dynamically */}
          <option className='text-black' value="Customers">Customers</option>
          <option className='text-black' value="Furniture">Furniture</option>
          <option className='text-black' value="Expenses">Expenses</option>
        </select>
      </div>
      <div className="mb-4">
        <label htmlFor="city" className="block text-gray-700 text-sm font-bold mb-2">City:</label>
        <select onChange={formHandle} id="city" name="city" className="border rounded-md px-3 py-2 w-full focus:outline-none focus:border-indigo-600">
          <option className='text-black' value="">Select City</option>
          {/* Add options dynamically */}
          <option className='text-black' value="Fsd">Fsd</option>
          <option className='text-black' value="Isb">Isb</option>
          <option className='text-black' value="Lhr">Lhr</option>
        </select>
      </div>
      <div className="mb-4">
        <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Name:</label>
        <input onChange={formHandle} type="text" id="name" name="name" className="border rounded-md px-3 py-2 w-full focus:outline-none focus:border-indigo-600" />
      </div>
      <div className="mb-4">
        <label htmlFor="openDr" className="block text-gray-700 text-sm font-bold mb-2">Open Debit:</label>
        <input onChange={formHandle} type="number" id="openDr" name="openDr" className="border rounded-md px-3 py-2 w-full focus:outline-none focus:border-indigo-600" />
      </div>
      <div className="mb-4">
        <label htmlFor="openCr" className="block text-gray-700 text-sm font-bold mb-2">Open Credit:</label>
        <input onChange={formHandle} type="number" id="openCr" name="openCr" className="border rounded-md px-3 py-2 w-full focus:outline-none focus:border-indigo-600" />
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
              Main
            </th>
            <th scope="col" className="px-6 py-3">
              Sub
            </th>
            <th scope="col" className="px-6 py-3">
              City
            </th>
            <th scope="col" className="px-6 py-3">
              Name
            </th>
            <th scope="col" className="px-6 py-3">
              Date
            </th>
            <th scope="col" className="px-6 py-3">
              Open Debit
            </th>
            <th scope="col" className="px-6 py-3">
              Open Credit
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index} className={index % 2 === 0 ? 'bg-white border-b' : 'bg-gray-100 border-b'}>
              <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                {item.main}
              </td>
              <td className="px-6 py-4">
                {item.sub}
              </td>
              <td className="px-6 py-4">
                {item.city}
              </td>
              <td className="px-6 py-4">
                {item.name}
              </td>
              <td className="px-6 py-4">
                {new Date(item.createdAt).toDateString()}
              </td>
              <td className="px-6 py-4">
                {item.openDr}
              </td>
              <td className="px-6 py-4">
                {item.openCr}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>



    </div>
  );
};

export default Form;
