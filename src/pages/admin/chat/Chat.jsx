import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  chatLogo,
  dummy,
  dummy2,
  dummy3,
  editSquare,
  mic,
  optionsIcon,
  send,
  user,
  video,
} from "../../../assets";
import { SearchBar } from "../../../components";
import { baseURL } from "../../../constants";
import { authReq } from "../../../requests";
import socketIO from "socket.io-client"

import "./chat.css";

const socket = socketIO(baseURL);

const Chat = () => {
  const navigate = useNavigate();
  const [toggle, setToggle] = useState(false);

  const [selectedChat, setSelectedChat] = useState({
    id: 1,
    messagesArray: [],
  });

  const [message, setMessage] = useState("")
  const [chatArray, setChatArray] = useState([]);
  const [user, setUser] = useState({})


  useEffect(() => {
    authReq('GET', '/user/me')
      .then(data => setUser(data.data))
  }, [])

  useEffect(() => {
    if(!user._id) return
    socket.emit('user-enter', { userId: user._id })
    socket.emit('get-inboxes', { userId: user._id })

    let first = true

    socket.on('inboxes', data => {
      const inboxes = data.data.inboxes
      // console.log(inboxes)
      socket.emit('get-messages', { userId: user._id, inbox: inboxes[0]._id })
      socket.on('messages', data => {
        // console.log("Got some messages!")
        // console.log(data.data.messages)
        const messagesArray = data.data.messages.map(message => {
          return { ...message, type: message.sender == user._id ? 'sender' : 'receiver' }
        })

        const newinboxes = inboxes.map(inbox => {
          return {
            id: inbox.id,
            title: inbox.name,
            message: inbox.lastMessage,
            image: inbox.image,
            messagesArray,
          }
        })

        console.log(newinboxes)
        setChatArray(newinboxes)
        newinboxes.forEach(inbox => {
          console.log(inbox.id, selectedChat.id)
          if(inbox.id == selectedChat.id) setSelectedChat(inbox)
        })
        setSelectedChat(newinboxes[0])
        first = false
      })

      return () => {
        socket.removeAllListeners('inboxes')
        socket.removeAllListeners('messages')
      }
    })

  }, [user])

  useEffect(() => {
    const objDiv = document.getElementById('chatbox')
    const messageEls = document.getElementsByClassName('kwn-chat-chating_item_view')
    messageEls[messageEls.length - 1]?.scrollIntoView()
    // objDiv.scrollTop = objDiv.scrollHeight
  }, [selectedChat])

  return (
    <div className="kavan_admin_main_container">
      <div className="kwn-search" style={{ paddingBottom: 0 }}>
        <SearchBar />
      </div>
      <div className="kwn-chat-main_view">
        <div
          className={
            toggle
              ? "kwn-chat-main-header-box-active"
              : "kwn-chat-main-header-box-hide"
          }
        >
          <HeradrBox
            user={user}
            setChatArray={setChatArray}
            chatArray={chatArray}
            selectedChat={selectedChat}
            setSelectedChat={setSelectedChat}
            setToggle={setToggle}
            toggle={toggle}
            socket={socket}
          />
        </div>

        <div className="kwn-chat-inbox_view_divider" />

        <div className="kwn-chat-message_top_view">
          <div className="kwn-chat-message_view_header">
            <div
              onClick={() => setToggle(!toggle)}
              className="kwn-chat-message_view_header_title"
            >
              <img src={selectedChat.image} />
              <div>
                <h2>{selectedChat.title}</h2>
                <h3>Active now</h3>
              </div>
            </div>
            <div className="kwn-chat-message_view_header_icons">
              <img
                className="kwn-chat-message_view_header_more_icon"
                src={optionsIcon}
              />
              <img
                onClick={() => navigate("sessionEnded")}
                className="kwn-chat-message_view_header_video_icon"
                src={video}
              />
            </div>
          </div>
          <div className="kwn-chat-messages-view">
            <div className="kwn-chat-chating_view">
              <div id="chatbox" className="kwn-chat-chating_item_top_viwe">
                {selectedChat.messagesArray.sort((a, b) => a.createdAt > b.createdAt ? 1 : -1).map((item) => {
                  return (
                    <div
                      className="kwn-chat-chating_item_view"
                      style={{
                        alignSelf:
                          item.sender === user._id ? "flex-start" : "flex-end",
                      }}
                    >
                      {item.sender === user._id && <img src={chatLogo} />}
                      <div
                        style={{
                          backgroundColor:
                            item.sender === user._id ? "#FFFFFF" : "#006039",
                          borderTopLeftRadius: item.sender === user._id ? 0 : 24,
                          borderBottomRightRadius:
                            item.sender === user._id ? 24 : 0,
                        }}
                      >
                        <h3
                          style={{
                            color:
                              item.sender === user._id ? "#666666" : "#FFFFFF",
                          }}
                        >
                          {item.message}
                        </h3>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="kwn-chat-send_view">
              <div className="kwn-chat-send-input_view">
                <input placeholder="Type a message..." value={message} onChange={ev => setMessage(ev.target.value)} />
                <img src={mic} style={{ cursor: 'pointer' }} />
              </div>
              <div className="kwn-chat-send_button_view">
                <img src={send} style={{ cursor: 'pointer' }} onClick={() => {
                  socket.emit('send-message', { userId: user._id, to: selectedChat.id, message, messageType: 'text', messageTime: Date.now() })
                  socket.emit('get-messages', { userId: user._id, inbox: selectedChat.id })
                  setMessage("")
                }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
const HeradrBox = ({
  user,
  setChatArray,
  chatArray,
  selectedChat,
  setSelectedChat,
  setToggle,
  toggle,
  socket
}) => {
  return (
    <div className="kwn-chat-inbox_top_view">
      <div className="kwn-chat-inbox_view_header">
        <h2>Messaging</h2>
        <div>
          <img src={optionsIcon} />
          <img src={editSquare} />
        </div>
      </div>
      <div style={{ background: "#f5f5f5" }} className="kwn-chat-inbox_view">
        {chatArray.map((item) => {
          return (
            <div
              onClick={() => {
                console.log("Selected Chat =>", selectedChat)
                setToggle(!toggle);
                socket.emit('get-messages', { userId: user._id, inbox: item.id });
                socket.on('messages', res => {
                  console.log("Hi! Messages")
                  const mapRes = chatArray.map(chat => 
                      chat.id == item.id ? 
                        { ...chat, messagesArray: res.data.messages.map(message => 
                          { return { ...message, type: message.sender == user._id ? 'sender' : 'receiver' } }
                        ) } :
                      chat
                    )
                      // .map(inbox => { return {...inbox, messagesArray: inbox.messagesArray.reverse()} })
                  const singleChat = chatArray.filter(chat => chat = chat.id == item.id)[0]
                  singleChat.messagesArray = res.data.messages
                  setChatArray(mapRes)
                  setSelectedChat(singleChat)
                })
              }}
              className="kwn-chat-inbox_item"
              style={{
                backgroundColor:
                  item.id === selectedChat.id ? "#55B48D" : "#F5F5F5",
              }}
            >
              <img src={item.image} />
              <div>
                <h2
                  style={{
                    color: item.id === selectedChat.id ? "#FFFFFF" : "#2D292A",
                  }}
                >
                  {item.title}
                </h2>
                <h3
                  style={{
                    color: item.id === selectedChat.id ? "#F5F5F5" : "#666666",
                  }}
                >
                  {item.message}
                </h3>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Chat;
