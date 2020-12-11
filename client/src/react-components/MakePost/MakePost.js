import React, {useState} from "react";
import "./MakePost.css"
import {createImage} from "../../Action/imageAction"
import {createPost} from "../../Action/postAction"

const MakePost = (props) => {
    const [postTitle, setPostTitle] = useState("")
    const [postContent, setPostContent] = useState("")
    const [postPic, setPostPic] = useState(null)
    const [warning, setWarning] = useState("")
    const [picMsg, setPicMsg] = useState("")
    const [imageId, setImageId] = useState("")
    const [certificate, setCertificate] = useState(null)
    const [postId, setPostId] = useState("")

    const fileSelectedHandler = (e) => {
        const file = e.target.files[0]
        setPostPic(file)
        setPicMsg("upload img successfully")
        setWarning("")
    }

    const delay = ms => new Promise(res => setTimeout(res, ms));

    const testId = "5fd03079037cb93f99c2fa01"


    const handleCreatePost = () => {
        setPicMsg("")
        setWarning("")
        if (postTitle !== "" && postContent !== "" && postPic !== null) {
            props.setPostApp(false)
            props.setPostSending("sending new post...")
            // call the backend sending
            createImage(certificate, setPostPic)
            // console.log(imageId)
            // createPost(postId, postContent, postPic, imageId, setPostId)
            // console.log(postId)
            const yourFunction = async () => {
                await delay(1000);
                console.log(postId)
                // createRestaurant(entered_restaurant.restName, entered_restaurant.restDescription, entered_restaurant.restAddress, imageId, setSubmitMsg)
              };
            yourFunction()
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
                            setCertificate(document.getElementById("form2"))
                            setPostPic(document.getElementById("form2"))
                            }}>
                            <div class="image-form__field" id = "imageI">
                                <label>Image:</label>
                                <input name="image" type="file" />
                            </div>
                    </form>



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
export default MakePost