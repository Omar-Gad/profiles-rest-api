import Profile from "./Profile";
import Post from "./Post";

import { useCookies } from "react-cookie";





function Feed(props) {

    const [cookies, setCookie] = useCookies()

    const { profiles, onUpdate } = props
    return (
        <div className="feed">
            <h1>Feed</h1>
            {cookies.token ? <Post onUpdate={onUpdate} /> : <></>}
            {
                profiles.map((profile, key) => {
                    return <Profile profile={profile} key={key} />
                })
            }
        </div>
    )
}

export default Feed;