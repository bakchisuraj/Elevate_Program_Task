import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
const Adddata = () => {
    const [formdata,setFormdata]=useState({title:"",desc:"",plevel:"",status:"",duedate:""})
    const navigate=useNavigate()
    

    const handlechange = (e)=>{
        setFormdata((prev)=>({...prev,[e.target.name]:e.target.value}))
    }

    const handlesubmit = (e)=>{
        e.preventDefault()
        
            axios.post("https://todo-2-9h7o.onrender.com/create",formdata)
        .then(()=>{
            alert("Todo created")
            setFormdata({title:"",desc:"",plevel:"",status:"",duedate:""})
            navigate("/")
        })
        .catch(()=>{
            alert("there is a error")
        })

        
        
    }


  return (
    <>
<div className="max-w-2xl mx-auto p-6 bg-white rounded-xl shadow-md border border-gray-100 mt-8">
    <h2 className="text-2xl font-bold text-gray-800 mb-6">Add New Task</h2>
    
    <form onSubmit={handlesubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
                <input 
                    type="text" 
                    placeholder='Enter title' 
                    value={formdata.title} 
                    onChange={handlechange} 
                    name='title'
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                />
            </div>

            <div className="space-y-2">
                <input 
                    type="text" 
                    placeholder='Enter Description' 
                    value={formdata.desc} 
                    onChange={handlechange} 
                    name='desc'
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                />
            </div>

            <div className="space-y-2">
                <input 
                    type="date" 
                    placeholder='Enter Due Date' 
                    value={formdata.duedate} 
                    onChange={handlechange} 
                    name="duedate"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                />
            </div>

            <div className="space-y-2">
                <select 
                    name="plevel" 
                    placeholder="enter priority" 
                    onChange={handlechange} 
                    value={formdata.plevel}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all bg-white"
                >
                    <option value="low">Low Priority</option>
                    <option value="medium">Medium Priority</option>
                    <option value="high">High Priority</option>
                </select>
            </div>

            <div className="space-y-2">
                <select 
                    name="status" 
                    placeholder="enter status" 
                    onChange={handlechange} 
                    value={formdata.status}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all bg-white"
                >
                    <option value="completed">Completed</option>
                    <option value="started">In Progress</option>
                    <option value="notstarted">Not Started</option>
                </select>
            </div>
            <div className="space-y-2">
                <select 
                    name="status" 
                    placeholder="enter status" 
                    onChange={handlechange} 
                    value={formdata.status}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all bg-white"
                >
                    <option value="completed">Completed</option>
                    <option value="started">In Progress</option>
                    <option value="notstarted">Not Started</option>
                </select>
            </div>
        </div>

        <div className="flex justify-end mt-6">
            <button
                type="submit"
                className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium"
            >
                Add Task
            </button>
        </div>
    </form>
</div>
    </>
  )
}

export default Adddata