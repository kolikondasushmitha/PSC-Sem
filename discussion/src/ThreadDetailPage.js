import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import ReplyForm from '.Backend/ReplyForm';
import { createReply } from './thread';

function ThreadDetailPage() {
    const { id } = useParams();
    const [replyContent, setReplyContent] = useState('');

    const handleSubmitReply = (e) => {
        e.preventDefault();
        createReply(id, replyContent)
            .then(data => {
                // Handle success
                console.log('Reply created:', data);
            })
            .catch(error => console.error('Error creating reply:', error));
    };

    return (
        <div>
            <h2>Thread Detail</h2>
            {/* Display thread details */}
            <ReplyForm onSubmit={handleSubmitReply} />
        </div>
    );
}

export default ThreadDetailPage;
