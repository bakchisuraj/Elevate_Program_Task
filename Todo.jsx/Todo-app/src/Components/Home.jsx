import React, { useEffect, useState } from 'react'
import axios from "axios";
import { useNavigate } from "react-router-dom";




const Home = () => {
    const [data,setData]=useState([])
    const [updateData, setUpdateData] = useState({
        id: "",
        title: "",
        desc: "",
        plevel: "",
        status: "",
        duedate: ""
    });

    const [isEditing, setIsEditing] = useState(false);
    const navigate = useNavigate();

useEffect(()=>{
    axios.get(`https://todo-2-9h7o.onrender.com/show`)
        .then((res)=>setData(res.data.todos))

},[])
console.log(data)

    const handledelete = (id)=>{
        axios.delete(`https://todo-2-9h7o.onrender.com/todos/${id}`)
        .then(()=>{ 
            alert("Todo Deleted")
        })
        .catch(()=>{
            console.log(id)
            alert("there is a error")
        })

    }
    

const handleupdate = (todo) => {
    setUpdateData({
        id: todo._id,
        title: todo.title,
        desc: todo.desc,
        plevel: todo.plevel,
        status: todo.status,
        duedate: todo.duedate
    });
    setIsEditing(true); 
};

const submitUpdate = () => {
    axios.patch(`https://todo-2-9h7o.onrender.com/todos/${updateData.id}`, updateData)
        .then(() => {
            alert("Todo Updated Successfully");
            setIsEditing(false);
        })
        .catch(() => {
            alert("Error updating todo");
        });
};

    
  return (
    <>
   <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 p-6 md:p-10">   
    <h1 className="text-4xl font-bold text-gray-800 text-center mb-2 animate-fade-in">Todo's</h1>
    <h1 className="text-2xl font-semibold text-gray-600 text-center mb-8">Pending Tasks</h1>     
    <div className="flex justify-center md:justify-end max-w-7xl mx-auto px-6 py-4">
    <button 
        onClick={() => navigate("/add")}
        className="group relative px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-200 shadow-md hover:shadow-lg flex items-center space-x-2"
    >
        <span className="font-medium">Add New Task</span>
        <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
    </button>
    <div>
    <div>
    
</div>
<div>
   
        {isEditing && (
        <div className="bg-white p-6 rounded-lg shadow-md mt-6">
            <h2 className="text-lg font-semibold">Update Todo</h2>
            <input
                type="text"
                name="title"
                value={updateData.title}
                placeholder='enter updated title'
                onChange={(e) => setUpdateData({ ...updateData, title: e.target.value })}
                className="border p-2 w-full rounded mt-2"
            />
            <input
                type="text"
                name="desc"
                value={updateData.desc}
                placeholder='enter updated description'
                onChange={(e) => setUpdateData({ ...updateData, desc: e.target.value })}
                className="border p-2 w-full rounded mt-2"
            />
            <input
                type="date"
                name="desc"
                value={updateData.duedate}
                placeholder='enter updated Duedate'
                onChange={(e) => setUpdateData({ ...updateData, duedate: e.target.value })}
                className="border p-2 w-full rounded mt-2"
            />
            <div className="space-y-2">
            <select 
            name="plevel" 
            placeholder="enter priority" 
            onChange={(e) => setUpdateData({ ...updateData, plevel: e.target.value })} 
            value={updateData.plevel}
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
                        onChange={(e) => setUpdateData({ ...updateData, plevel: e.target.value })} 
                        value={updateData.status}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all bg-white"
                    >
                        <option value="completed">Completed</option>
                        <option value="started">In Progress</option>
                        <option value="notstarted">Not Started</option>
                    </select>
                </div>
            <button onClick={submitUpdate}
                className="mt-3 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
                Save Changes
            </button>
        </div>
    )}
        
</div>

    </div>
</div>
    <div className='grid grid-cols-1 md:grid-cols-2 gap-6 max-w-7xl mx-auto'>
        {
            data.map((ele,i)=>(
                <div key={ele._id} className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 p-6 border border-gray-100">
                    <div className="space-y-3">
                        <div className="flex items-center space-x-2">
                            <h2 className="text-lg font-semibold text-gray-800">Title: </h2>
                            <span className="text-gray-700">{ele.title}</span>
                        </div>
                        
                        <div className="flex items-start space-x-2">
                            <h2 className="text-lg font-semibold text-gray-800">Description: </h2>
                            <span className="text-gray-600">{ele.desc}</span>
                        </div>
                        
                        <div className="flex items-center space-x-2">
                            <h2 className="text-lg font-semibold text-gray-800">Priority Level: </h2>
                            <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                                ele.plevel.toLowerCase() === 'high' ? 'bg-red-100 text-red-800' :
                                ele.plevel.toLowerCase() === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                                'bg-green-100 text-green-800'
                            }`}>
                                {ele.plevel}
                            </span>
                        </div>
                        
                        <div className="flex items-center space-x-2">
                            <h2 className="text-lg font-semibold text-gray-800">Due Date: </h2>
                            <span className="text-gray-600">{ele.duedate}</span>
                        </div>
                        
                        <div className="flex items-center space-x-2">
                            <h2 className="text-lg font-semibold text-gray-800">Status: </h2>
                            <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                                ele.status.toLowerCase() === 'completed' ? 'bg-green-100 text-green-800' :
                                'bg-blue-100 text-blue-800'
                            }`}>
                                {ele.status}
                            </span>
                        </div>
                    </div>

                    <div className="flex space-x-4 mt-6">
                    <button onClick={() => { handleupdate(ele); }}
                                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200">
                            Update
                        </button>
                        <div>
                            
                        </div>
                        <button onClick={()=>handledelete(ele._id)}
                                className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors duration-200">
                            Delete
                        </button>
                    </div>
                </div>
            ))
        }
    </div>
    
</div>


    </>
  )
}

export default Home