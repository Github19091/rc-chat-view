import React from 'react';
import PropTypes from 'prop-types';
import MessageList from './messages/MessageList';
import UserInput from './UserInput';
import Header from './Header';
import '../styles/chatWindow.css';
import { messageArrayType } from '../types';

const ChatWindow = ({
    userId,
    messageList,
    onUserInputSubmit,
    isOpen,
    headerConfig: { headerName, imageUrl },
    onClose,
    showEmoji,
    showUsername,
    showAvatar,
    avatarTopPosition,
    showDate,
    minDateDiff,
    isTyping,
}) => (
    <div className={`sc-chat-window ${isOpen ? 'opened' : 'closed'}`}>
        <Header headerName={headerName} imageUrl={imageUrl} onClose={onClose} />
        <MessageList
            messages={messageList}
            userId={userId}
            showUsername={showUsername}
            showAvatar={showAvatar}
            avatarTopPosition={avatarTopPosition}
            showDate={showDate}
            minDateDiff={minDateDiff}
            isTyping={isTyping}
        />
        <UserInput showEmoji={showEmoji} onSubmit={onUserInputSubmit} />
    </div>
);

ChatWindow.propTypes = {
    userId: PropTypes.string.isRequired,
    messageList: messageArrayType.isRequired,

    onClose: PropTypes.func.isRequired,

    onUserInputSubmit: PropTypes.func.isRequired,
    isOpen: PropTypes.bool.isRequired,

    headerConfig: PropTypes.shape({
        headerName: PropTypes.string.isRequired,
        imageUrl: PropTypes.string.isRequired,
    }).isRequired,

    showEmoji: PropTypes.bool.isRequired,
    showUsername: PropTypes.bool.isRequired,
    showAvatar: PropTypes.bool.isRequired,
    avatarTopPosition: PropTypes.bool.isRequired,
    showDate: PropTypes.bool.isRequired,
    minDateDiff: PropTypes.number.isRequired,
    isTyping: PropTypes.bool.isRequired,
};

export default ChatWindow;
