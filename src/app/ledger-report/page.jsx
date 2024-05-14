"use client"
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import queryStr from 'query-string'
const Page = () => {


    var [filters,setFilters] = useState({})
    const formHandle = (e) => {
        setFilters({ ...formData, [e.target.name]: e.target.value })
    }

    var [data, setData] = useState([])

    const getDynamicLedger = async () => {
        try {
            var { data } = await axios.get("/api/chartOfAccount")
            setData(data.message)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getDynamicLedger()
    }, [])

    var [ledgerDetails,setLedgerDetails] = useState([])

    var getLedgerDetail = async () =>{
        try {
            var res = await axios.get(`/api/ledger`)
            setLedgerDetails(res?.data?.message)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=>{
        getLedgerDetail()
    },[])

    console.log(ledgerDetails)



    return (
        <div className='max-w-4xl mx-auto py-10'>
            <h2 className='text-2xl font-semibold mb-4'>Ledger Report</h2>
            <div className='grid grid-cols-2 gap-4 text-sm'>

                <div className='col-span-2'>
                    <label className="block w-full" htmlFor="id">From Date:</label>
                    <select onChange={formHandle} className="block w-full" name="id" id="id">
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

                <div>
                    <label className="block w-full" htmlFor="fDate">From Date:</label>
                    <input onChange={formHandle} className="block w-full" id='fDate' name='fDate' type="date" />
                </div>
                <div>
                    <label className="block w-full" htmlFor="tDate">From Date:</label>
                    <input onChange={formHandle} className="block w-full" id='tDate' name='tDate' type="date" />
                </div>
            </div>

            <div className="relative overflow-x-auto py-10">
                    <table className="w-full border  mx-auto  text-sm text-left rtl:text-right text-gray-500">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                            <tr>
                            
                                <th scope="col" className="px-6 py-3">
                                    Date
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
                                <th scope="col" className="px-6 py-3">
                                    Balance
                                </th>
                                
                                
                            </tr>
                        </thead>
                        <tbody>
                        <tr key={0} className={0 % 2 === 0 ? 'bg-white border-b' : 'bg-gray-100 border-b'}>
                                    
                                    <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                        {new Date(ledgerDetails[0]?.ledger?.createdAt).toDateString()}
                                    </td>
                                    
                                    <td className="px-6 py-4">
                                        Opening Balance
                                    </td>
                                    <td className="px-6 py-4">
                                        {ledgerDetails[0]?.ledger?.createdAt}
                                    </td>
                                    <td className="px-6 py-4">
                                        {ledgerDetails[0]?.ledger?.openCr || "-"}
                                    </td>
                                    <td className="px-6 py-4">
                                        {ledgerDetails[0]?.ledger?.openDr || "-"}
                                    </td>
                                    <td className="px-6 py-4">
                                        
                                    </td>
                                    
                                </tr>
                            {/* {ledgerDetails.map((item, index) => (
                                <tr key={index} className={index % 2 === 0 ? 'bg-white border-b' : 'bg-gray-100 border-b'}>
                                    <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                        {new Date(item.createdAt).toDateString()}
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
                                    <td className="px-6 py-4">
                                    </td>
                                    
                                </tr>
                            ))} */}
                        </tbody>
                    </table>
                </div>

        </div>
    )
}

export default Page