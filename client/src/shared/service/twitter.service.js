import {StateProvider} from 'react-state-provider';

import getTwittLineByName from './http.service';

export default function findAndPushTwitterLine(name) {

    getTwittLineByName(name).then((res) => {
        StateProvider.getState('twitts').update('twitts', res);
    });
}

