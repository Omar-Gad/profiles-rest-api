import { Avatar } from "@mui/material";



function Profile(props) {

    const { profile } = props
    const author = profile['user_profile']
    const status = profile['status_text']
    const letter = author.charAt(0).toUpperCase()
    return (
        <div className="profile">
            <div>
                <Avatar>{letter}</Avatar>
                <p>{status}</p>
            </div>
            <p>{author}</p>
        </div>
    )
}

export default Profile;