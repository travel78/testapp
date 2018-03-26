import { StateProvider } from 'react-state-provider';

import getTwittLineByName from './http.service';

export default function findAndPushTwitterLine(name) {
    StateProvider.getState('spinner').update('spinner', true);

    getTwittLineByName(name).then((res) => {
        StateProvider.getState('twitts').update('twitts', res.data);
        StateProvider.getState('spinner').update('spinner', false);
    }).catch(() => {
        StateProvider.getState('spinner').update('spinner', false);
    });
}

