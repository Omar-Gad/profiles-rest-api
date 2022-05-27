import { Button, TextField } from "@mui/material";

import axios from "axios";
import { useState } from "react";
import { useCookies } from "react-cookie";

function Post(props) {

    const { onUpdate } = props

    const [cookies, setCookie] = useCookies()

    const [post, setPost] = useState('')

    const onPost = async () => {
        await axios.post('http://host.docker.internal:8000/api/feed/', {
            status_text: post
        },
            {
                headers: {
                    'Authorization': `Token ${cookies.token}`
                }
            })
        onUpdate()
        setPost('')
    }

    return (
        <div className="post">
            <TextField
                label="What's on your mind?"
                fullWidth
                multiline
                minRows={4}
                maxRows={4}
                value={post}
                onChange={(e) => setPost(e.target.value)}
            />

            <Button onClick={onPost} style={{ backgroundColor: 'teal' }} variant="contained">Post</Button>
        </div>
    )
}

export default Post;