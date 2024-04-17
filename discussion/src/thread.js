import axios from 'axios';

export const getThreads = () => {
    return axios.get('/api/threads')
        .then(response => response.data)
        .catch(error => {
            throw error;
        });
};

export const createThread = (title, content) => {
    return axios.post('/api/threads', { title, content })
        .then(response => response.data)
        .catch(error => {
            throw error;
        });
};

export const createReply = (threadId, content) => {
    return axios.post(`/api/threads/${threadId}/replies`, { content })
        .then(response => response.data)
        .catch(error => {
            throw error;
        });
};
