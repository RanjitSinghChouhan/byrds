import React, { useEffect, useState } from 'react'
import { BarChart, Bar, XAxis, AreaChart, Area } from 'recharts';
import axios from 'axios';

const data = [
    {
        name: 'Page A',
        uv: 4000,
        pv: 2400,
        amt: 2400,
    },
    {
        name: 'Page B',
        uv: 3000,
        pv: 1398,
        amt: 2210,
    },
    {
        name: 'Page C',
        uv: 2000,
        pv: 9800,
        amt: 2290,
    },
    {
        name: 'Page D',
        uv: 2780,
        pv: 3908,
        amt: 2000,
    },
    {
        name: 'Page E',
        uv: 1890,
        pv: 4800,
        amt: 2181,
    },
    {
        name: 'Page F',
        uv: 2390,
        pv: 3800,
        amt: 2500,
    },
    {
        name: 'Page G',
        uv: 3490,
        pv: 4300,
        amt: 2100,
    },
];
function GraphicalContent() {
    const [startList, setStartList] = useState([])
    const [chartList, setChartList] = useState([])
    useEffect(() => {
        axios.get("http://127.0.0.1:8001/api/startList").then(res => {
            console.log(res.data, "response")
            setStartList(res.data.data)
        })
        axios.get("http://127.0.0.1:8001/api/charts").then(res => {
            console.log(res.data, "response")
            setChartList(res.data.data.monthly
            )
        })
    }, [])

    return (
        <div className=' p-4'>
            <div className='h-3/6 flex'>
                <div className='mr-3'>
                    <h1>Some Graph Here</h1>
                    <BarChart
                        width={350}
                        height={230}
                        data={chartList}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                        barSize={20}
                        className='shadow-xl rounded-2xl'
                    >
                        <XAxis dataKey="title" padding={{ left: 10, right: 10 }} />
                        <Bar dataKey="value" fill="rgb(34 197 94)" background={{ fill: '#eee' }} />
                    </BarChart>
                </div>
                <div className='mr-3'>
                    <h1>Some Graph Here</h1>
                    <AreaChart width={350} height={230} data={chartList}
                        margin={{ top: 10, right: 0, left: 0, bottom: 0 }} className='shadow-xl rounded-2xl'>
                        <defs>
                            <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                                <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
                            </linearGradient>
                        </defs>
                        <Area type="monotone" dataKey="value" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
                    </AreaChart>
                </div>
                <div className='grid grid-cols-2 gap-3 place-content-center'>
                    <div className='w-full p-3 shadow-xl rounded-2xl'>
                        <div className=' text-sm'>Visit byrds page</div>
                        <button className='py-2 px-5 mt-7 ml-10 bg-green-500 rounded-lg text-sm text-white'>View Page</button>
                    </div>
                    <div className='w-full p-4 shadow-xl rounded-2xl'>
                        <div className=' text-sm'>Eco Goal</div>
                        <div className='text-xl font-bold'>3,298</div>
                    </div>
                    <div className='w-full p-4 shadow-xl rounded-2xl'>
                        <div className=' text-sm'>Upcoming Shipping Details</div>
                        <div className='font-bold text-green-400'>Eco Name <br />12/12/23</div>
                    </div>
                    <div className='w-full p-4 shadow-xl rounded-2xl'>
                        <div className=' text-sm'>Leaders Board Position</div>
                        <div className=' text-xl font-bold'>86</div>
                        <AreaChart width={150} height={40} data={data}>
                            <defs>
                                <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                                    <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
                                </linearGradient>
                            </defs>
                            <Area type="monotone" dataKey="pv" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
                        </AreaChart>
                    </div>
                </div>
            </div>
            <div className='h-3/6 mt-6'>
                <div class="flex ">
                    <div class="block py-6 w-1/2 overflow-x-hidden rounded-2xl shadow-lg bg-white">
                        <h1 class="pl-4 text-2xl font-bold">Today's Start List</h1>
                        <table>
                            <thead class="border-b border-gray-100">
                                <tr>
                                    <th
                                        scope="col"
                                        class="text-sm font-medium text-gray-400 px-10 py-2 text-left"
                                    >
                                        Receiver
                                    </th>
                                    <th
                                        scope="col"
                                        class="text-sm font-medium text-gray-400 px-10 py-2 text-left"
                                    >
                                        Type
                                    </th>
                                    <th
                                        scope="col"
                                        class="text-sm font-medium text-gray-400 px-10 py-2 text-left"
                                    >
                                        Date
                                    </th>
                                    <th
                                        scope="col"
                                        class="text-sm font-medium text-gray-400 px-10 py-2 text-left"
                                    >
                                        Amount
                                    </th>
                                </tr>
                            </thead>
                            <tbody className='border-gray-100'>
                                {startList.map((item, index) => {
                                    return (<tr class="border-b last:border-none border-gray-100">
                                        <td class="px-10 py-2 whitespace-nowrap text-sm font-medium text-gray-700">
                                            {item.title}
                                        </td>
                                        <td class="text-sm text-gray-400 font-medium px-10 py-2 whitespace-nowrap">
                                            {item.type}
                                        </td>
                                        <td class="text-sm text-gray-400 font-medium px-10 py-2 whitespace-nowrap">
                                            {item.date}
                                        </td>
                                        <td class="text-sm text-gray-700 font-medium px-10 py-2 whitespace-nowrap">
                                            ${item.amount}
                                        </td>
                                    </tr>)
                                })}
                            </tbody>
                        </table>
                    </div>
                    <div className="w-2/4 h-2/4 ml-3">
                        <div className="block px-6 py-9 rounded-2xl shadow-lg bg-white">
                            <h1 className="pl-4 text-2xl font-bold">Eco Goal Status</h1>
                            <div className="status-wrapper flex flex-col">
                                <div className="status-item flex justify-around items-center m-1 py-3">
                                    <div className="icon rounded p-1 text-green-800 bg-green-100">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth={1.5}
                                            stroke="currentColor"
                                            className="w-6 h-6"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                                            />
                                        </svg>
                                    </div>
                                    <div className="progress-bar  rounded w-9/12 bg-gray-200 h-2">
                                        <div className="progrees-bar-indicator w-6/12 rounded-3xl bg-green-500 h-2 text-gray-400"></div>
                                        Api name here
                                    </div>
                                    <div className="percentage flex justify-center items-center w-12 text-gray-500 text-2xl min-w-max">
                                        51 %
                                    </div>
                                </div>
                                <div className="status-item flex justify-around items-center m-1 pt-3">
                                    <div className="icon rounded p-1 text-green-800 bg-green-100">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke-width="1.5"
                                            stroke="currentColor"
                                            class="w-6 h-6"
                                        >
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"
                                            />
                                        </svg>
                                    </div>
                                    <div className="progress-bar  rounded w-9/12 bg-gray-200 h-2">
                                        <div className="progrees-bar-indicator w-6/12 rounded-3xl bg-green-500 h-2 text-gray-400"></div>
                                        <p>Eco name here</p>
                                    </div>
                                    <div className="percentage flex justify-center items-center w-12 text-gray-500 text-2xl min-w-max">
                                        51 %
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="block p-6 rounded-2xl shadow-lg bg-white mt-2">
                            <h1 className="pl-4 text-2xl font-bold">Eco Goal Status</h1>
                            <div className="status-wrapper flex flex-col">
                                <div className="status-item flex justify-around items-center m-1 py-3">
                                    <div className="icon rounded p-1 text-green-900 bg-green-100">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth={1.5}
                                            stroke="currentColor"
                                            className="w-6 h-6"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                                            />
                                        </svg>
                                    </div>
                                    <div className="progress-bar  rounded w-9/12 bg-gray-200 h-2">
                                        <div className="progrees-bar-indicator w-6/12 rounded-3xl bg-green-500 h-2 text-gray-400"></div>
                                        Api name here
                                    </div>
                                    <div className="percentage flex justify-center items-center w-12 text-gray-500 text-2xl min-w-max">
                                        51 %
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default GraphicalContent