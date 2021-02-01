import { Avatar } from '@material-ui/core'
import { ChatBubble, ExpandMoreOutlined, ThumbUp, AccountCircle, Share } from '@material-ui/icons'
import React from 'react'
import "./Post.css"

function Post({profilePic, image, username, timestamp, message}) {
    return (
        <div className="post">
            <div className="post__top">
                <Avatar src={profilePic} className="post_avatar"/>
                <div className="post__topInfo">
                    <h3>{username}</h3>
                    <p>{new Date(timestamp?.toDate()).toUTCString()}</p>
                </div>
            </div>

            <div className="post__bottom">
                <p>{message}</p>
            </div>

            <div className="post__image">
                <img src={image} alt=""/>
            </div>
            <div className="post__option">
                <div className="post__options">
                    <ThumbUp/>
                    <p>Like</p>
                </div>
                <div className="post__options">
                    <ChatBubble/>
                    <p>Comment</p>
                </div>
                <div className="post__options">
                    <Share/>
                    <p>Share</p>
                </div>
                <div className="post__options">
                    <AccountCircle/>
                    <ExpandMoreOutlined/>
                </div>
            </div>
        </div>
    );
}

export default Post
