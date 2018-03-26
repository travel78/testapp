import axios from 'axios';

export default function getTwittLineByName(name) {
    return axios.get(`/api/timeline/`, {
        params: {
            name: name
        }
    });
}
