import React, { useState } from "react";
import { chatLogo, dummy, dummy2, dummy3, editSquare, mic, optionsIcon, send, video } from "../../../assets";
import { SearchBar } from "../../../components";

import "./chat.css";
const Chat = () => {
    const [selectedChat, setSelectedChat] = useState({
        id: 1, title: 'Annie', message: 'Hi, Mark Odama how are you', image: dummy,
        messagesArray: [
            {
                id: 1,
                message: 'Hi, Sweety! 👋 How are you today?',
                type: 'sender'
            },
            {
                id: 2,
                message: 'I am fine',
                type: 'receiver'
            },
            {
                id: 3,
                message: 'How can I help you.',
                type: 'sender'
            },
        ]
    })

    const chatArray = [
        {
            id: 1,
            title: 'Annie',
            message: 'Hi, Mark Odama how are you',
            image: dummy,
            messagesArray: [
                {
                    id: 1,
                    message: 'Hi, Sweety! 👋 How are you today?',
                    type: 'sender'
                },
                {
                    id: 2,
                    message: 'I am fine',
                    type: 'receiver'
                },
                {
                    id: 3,
                    message: 'How can I help you.',
                    type: 'sender'
                }
            ]
        },
        {
            id: 2,
            title: 'John doe',
            message: 'Hi, Mark Odama how are you',
            image: dummy3,
            messagesArray: [
                {
                    id: 1,
                    message: 'Hi, Sweety! 👋 How are you today?',
                    type: 'sender'
                },
            ]

        },
        {
            id: 3,
            title: 'Annie',
            message: 'Hi, Mark Odama how are you',
            image: dummy2,
            messagesArray: [
                {
                    id: 1,
                    message: 'Hi, Sweety! 👋 How are you today?',
                    type: 'sender'
                },
                {
                    id: 2,
                    message: 'I am fine',
                    type: 'receiver'
                },
                {
                    id: 3,
                    message: 'How can I help you.',
                    type: 'sender'
                }
            ]

        },
        {
            id: 4,
            title: 'John doe',
            message: 'Hi, Mark Odama how are you',
            image: dummy3,
            messagesArray: [
                {
                    id: 1,
                    message: 'Hi, Sweety! 👋 How are you today?',
                    type: 'sender'
                },
                {
                    id: 2,
                    message: 'I am fine',
                    type: 'receiver'
                },
                {
                    id: 3,
                    message: 'How can I help you.',
                    type: 'sender'
                }
            ]

        },
        {
            id: 5,
            title: 'Annie',
            message: 'Hi, Mark Odama how are you',
            image: dummy,
            messagesArray: [
                {
                    id: 1,
                    message: 'Hi, Sweety! 👋 How are you today?',
                    type: 'sender'
                },
                {
                    id: 2,
                    message: 'I am fine',
                    type: 'receiver'
                },
                {
                    id: 3,
                    message: 'How can I help you.',
                    type: 'sender'
                }
            ]

        },
        {
            id: 6,
            title: 'John doe',
            message: 'Hi, Mark Odama how are you',
            image: dummy2,
            messagesArray: [
                {
                    id: 1,
                    message: 'Hi, Sweety! 👋 How are you today?',
                    type: 'sender'
                },
                {
                    id: 2,
                    message: 'I am fine',
                    type: 'receiver'
                },
                {
                    id: 3,
                    message: 'How can I help you.',
                    type: 'sender'
                }
            ]
        },
        {
            id: 7,
            title: 'John doe',
            message: 'Hi, Mark Odama how are you',
            image: dummy3,
            messagesArray: [
                {
                    id: 1,
                    message: 'Hi, Sweety! 👋 How are you today?',
                    type: 'sender'
                },
                {
                    id: 2,
                    message: 'I am fine',
                    type: 'receiver'
                },
                {
                    id: 3,
                    message: 'How can I help you.',
                    type: 'sender'
                }
            ]

        },
        {
            id: 8,
            title: 'Annie',
            message: 'Hi, Mark Odama how are you',
            image: dummy,
            messagesArray: [
                {
                    id: 1,
                    message: 'Hi, Sweety! 👋 How are you today?',
                    type: 'sender'
                },
                {
                    id: 2,
                    message: 'I am fine',
                    type: 'receiver'
                },
                {
                    id: 3,
                    message: 'How can I help you.',
                    type: 'sender'
                }
            ]

        },
        {
            id: 9,
            title: 'John doe',
            message: 'Hi, Mark Odama how are you',
            image: dummy2,
            messagesArray: [
                {
                    id: 1,
                    message: 'Hi, Sweety! 👋 How are you today?',
                    type: 'sender'
                },
                {
                    id: 2,
                    message: 'I am fine',
                    type: 'receiver'
                },
                {
                    id: 3,
                    message: 'How can I help you.',
                    type: 'sender'
                }
            ]

        },
        {
            id: 10,
            title: 'John doe',
            message: 'Hi, Mark Odama how are you',
            image: dummy3,
            messagesArray: [
                {
                    id: 1,
                    message: 'Hi, Sweety! 👋 How are you today?',
                    type: 'sender'
                },
                {
                    id: 2,
                    message: 'I am fine',
                    type: 'receiver'
                },
                {
                    id: 3,
                    message: 'How can I help you.',
                    type: 'sender'
                }
            ]

        },
        {
            id: 11,
            title: 'Annie',
            message: 'Hi, Mark Odama how are you',
            image: dummy,
            messagesArray: [
                {
                    id: 1,
                    message: 'Hi, Sweety! 👋 How are you today?',
                    type: 'sender'
                },
                {
                    id: 2,
                    message: 'I am fine',
                    type: 'receiver'
                },
                {
                    id: 3,
                    message: 'How can I help you.',
                    type: 'sender'
                }
            ]

        },
        {
            id: 12,
            title: 'John doe',
            message: 'Hi, Mark Odama how are you',
            image: dummy2,
            messagesArray: [
                {
                    id: 1,
                    message: 'Hi, Sweety! 👋 How are you today?',
                    type: 'sender'
                },
                {
                    id: 2,
                    message: 'I am fine',
                    type: 'receiver'
                },
                {
                    id: 3,
                    message: 'How can I help you.',
                    type: 'sender'
                }
            ]

        },
    ]

    return (
        <div className="kavan_admin_main_container">
            <div className="kwn-search" style={{ paddingBottom: 0 }}>
                <SearchBar />
            </div>
            <div className="kwn-chat-main_view">
                <div className="kwn-chat-inbox_top_view">
                    <div className="kwn-chat-inbox_view_header">
                        <h2>Messaging</h2>
                        <div>
                            <img src={optionsIcon} />
                            <img src={editSquare} />
                        </div>
                    </div>
                    <div className="kwn-chat-inbox_view">
                        {chatArray.map((item) => {
                            return (
                                <div onClick={() => setSelectedChat(item)} className="kwn-chat-inbox_item" style={{ backgroundColor: item.id === selectedChat.id ? '#55B48D' : '#F5F5F5', }}>
                                    <img src={item.image} />
                                    <div>
                                        <h2 style={{ color: item.id === selectedChat.id ? '#FFFFFF' : '#2D292A' }}>{item.title}</h2>
                                        <h3 style={{ color: item.id === selectedChat.id ? '#F5F5F5' : '#666666' }}>{item.message}</h3>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>

                <div className="kwn-chat-inbox_view_divider" />

                <div className="kwn-chat-message_top_view">
                    <div className="kwn-chat-message_view_header">
                        <div className="kwn-chat-message_view_header_title">
                            <img src={selectedChat.image} />
                            <div>
                                <h2>{selectedChat.title}</h2>
                                <h3>Active now</h3>
                            </div>
                        </div>
                        <div className="kwn-chat-message_view_header_icons">
                            <img className="kwn-chat-message_view_header_more_icon" src={optionsIcon} />
                            <img className="kwn-chat-message_view_header_video_icon" src={video} />
                        </div>
                    </div>
                    <div className="kwn-chat-messages-view">
                        <div className="kwn-chat-chating_view">
                            <div className="kwn-chat-chating_view_date">
                                <h3>Wed 8:21 AM</h3>
                            </div>
                            <div className="kwn-chat-chating_item_top_viwe">
                                {selectedChat.messagesArray.map((item) => {
                                    return (
                                        <div className="kwn-chat-chating_item_view" style={{ alignSelf: item.type === 'sender' ? 'flex-start' : 'flex-end' }}>
                                            {item.type === 'sender' &&
                                                <img src={chatLogo} />
                                            }
                                            <div style={{ backgroundColor: item.type === 'sender' ? '#FFFFFF' : '#006039', borderTopLeftRadius: item.type === 'sender' ? 0 : 24, borderBottomRightRadius: item.type === 'sender' ? 24 : 0 }}>
                                                <h3 style={{ color: item.type === 'sender' ? '#666666' : '#FFFFFF' }}>{item.message}</h3>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                        <div className="kwn-chat-send_view">
                            <div className="kwn-chat-send-input_view">
                                <input placeholder="Type a message..." />
                                <img src={mic} />
                            </div>
                            <div className="kwn-chat-send_button_view">
                                <img src={send} />
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default Chat;
