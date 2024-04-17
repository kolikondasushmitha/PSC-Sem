import React, { useState } from 'react';

function ReplyForm({ onSubmit }) {
    const [content, setContent] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(content);
        setContent('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <textarea value={content} onChange={(e) => setContent(e.target.value)}></textarea>
            <button type="submit">Submit</button>
        </form>
    );
}

export default ReplyForm;
