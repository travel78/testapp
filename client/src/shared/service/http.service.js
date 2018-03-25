import {Service} from 'react-services-injector';
import axios from 'axios';

class HttpService extends Service {
    constructor() {
        super();
    }

    getTwittLineByName(name) {
        return axios.get(`/api/timeline/`, {
            params: {
                name: name
            }
        });
    }
}

HttpService.publicName = 'HttpService';

export default HttpService;