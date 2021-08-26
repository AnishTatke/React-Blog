import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'


function Create() {
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [isPending, setIsPending] = useState(false)

    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault()
        const blog = { title, body }

        setIsPending(true)

        fetch('http://localhost:5000/api/v1/article', {
            method: 'POST',
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify(blog)
        }).then(() => {
            console.log("New Blog Added")
            setIsPending(false)
            history.push('/')
        })
        
    }

    return (
        <div className="create">
            <h2>Add a new blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog Title</label>
                <input type='text' required value={title} onChange={(e) => setTitle(e.target.value)}></input>
                <label>Blog Body</label>
                <textarea required value={body} onChange={(e) => setBody(e.target.value)}></textarea>
                {!isPending &&<button>Add Blog</button>}
                {isPending &&<button>Adding Blog</button>}
            </form>
        </div>
    )
}

export default Create
