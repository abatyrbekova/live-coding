import { useEffect, useState } from "react"
import axios from 'axios'
import './App.css'

export default function App() {

    const [posts, setPosts] = useState([])
    const [showModal, setShowModal] = useState(false)

    const [message, setMessage] = useState('')

    useEffect(async () => {
        {
            const response  = await axios('/posts/list?skip=11')

            console.log('response is', response);

            if (response.data.success) {

                setPosts(response.data.items)
                console.log('Posts:', posts)
            }
        }
    }, []) 

    const handleSave = async () => {
        if (!message.length) return
        
        console.log('message is', message);

        const data = {
            message,
            owner: 'amma'
        }

        try {
            
            const response = await axios.post('/posts/add', data)

            console.log('response from sending data is ', response)

            setPosts([...posts, response.data.item])

            setShowModal(false)
        } catch (error) {
            
        }

    }

    return <div>
        {
            posts.map(item => {
                return <div key={item._id}>
                    {item.message}
                </div>
            })
        }
        <button onClick={()=> setShowModal(true)}>+</button>

        {
            showModal ?
            <div className="modal">
                <textarea placeholder="type your post" rows="4" value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
                <button onClick={handleSave}>Save</button>
                <button onClick={()=> setShowModal(false)}>Close</button>
            </div>
            :
            null
        }
        
    </div>
}