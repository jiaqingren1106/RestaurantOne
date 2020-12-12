import React, {useState} from "react";
import "./MakePost.css"
import {createImage} from "../../Action/imageAction"
import {createPost} from "../../Action/postAction"
import { connect } from 'react-redux';
import { register, setRoute } from "../../redux/actions";


const mapStateToProps = (state) => {
    return {
        route: state.routeState.route,
        user: state.userState
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setRoute: (new_route) => dispatch(setRoute(new_route)),
        setUser: (user_obj) => dispatch(register(user_obj))
    }
}


const MakePost = (props) => {
    const [postTitle, setPostTitle] = useState("")
    const [postContent, setPostContent] = useState("")
    const [postPic, setPostPic] = useState(null)
    const [warning, setWarning] = useState("")
    const [picMsg, setPicMsg] = useState("")
    const [imageId1, setImageId1] = useState("")
    const [certificate, setCertificate] = useState(null)
    const [postId, setPostId] = useState("")

    const fileSelectedHandler = (e) => {
        const file = e.target.files[0]
        setPostPic(file)
        setPicMsg("upload img successfully")
        setWarning("")
    }


    const testId = props.user.restaurant_id



    const handleCreatePost = () => {
        setPicMsg("")
        setWarning("")
        if (postTitle !== "" && postContent !== "" && postPic !== null) {
            // props.setPostApp(false)
            // props.setPostSending("sending new post...")
            // call the backend sending
            createPost(postTitle, postContent, imageId1, setPostId ,testId)
            props.setPostSending("Success")

        }
        else {
            setWarning("has unfilled field!")
        }
    }

    

    return (
        <div className="makePost">
            <div className="pa3 black-80 pl4 postInput" >
                <label htmlFor="comment" className="f6 b db mb2">Post Title</label>
                <textarea id="postTitle" name="Post Title"
    className="db border-box hover-black w-100 measure ba b--black-20 pa2 br2 mb2"
    aria-describedby="comment-desc" onChange={(e) => {setPostTitle(e.target.value)}}/>
                    <label htmlFor="comment" className="f6 b db mb2">Post Content</label>
                    <textarea id="postText" name="Post Text"
                              className="db border-box hover-black ba b--black-20 pa2 br2 mb2  h-100"
                              onChange={(e) => {setPostContent(e.target.value)}}/>

                   

                   <form className="image-form" id = "form2" onChange={(e) => {
                            e.preventDefault();
                            createImage(document.getElementById("form2"), setImageId1)
                            setCertificate(document.getElementById("form2"))
                            setPostPic(document.getElementById("form2"))
                            }}>
                            <div class="image-form__field" id = "imageI">
                                <label>Image:</label>
                                <input name="image" type="file" />
                            </div>
                    </form>



                    <input type="file"
                           id="makePostFileUpload" name="avatar"
                           accept="image/png, image/jpeg" onChange={(e) => {fileSelectedHandler(e)}}/>
                    <button id="makePostFileButton" onClick={() => {document.getElementById("makePostFileUpload").click()} }
                            className="f6 link dim br-pill ba bw1 ph3 pv2 mb2 dib black">choose post picture</button>
                <p className="i green" >
                    {picMsg}
                </p>
                <p className="i red">
                    {warning}
                </p>
            </div>
            <a className="pa4 f6 link dim br1 ph3 pv2 mb2 dib white bg-dark-green ml4 createPostBut" href="#0" onClick={handleCreatePost}>Create Post</a>
        </div>
        )
}
 
export default connect(mapStateToProps, mapDispatchToProps)(MakePost);