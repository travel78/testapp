import {Service} from 'react-services-injector';
import {injector} from 'react-services-injector';
import {Subject} from "rxjs";

class TwitterService extends Service {
    twittLineList = new Subject();

    constructor() {
        super();
    }

    getTwitterLine() {
        return this.twittLineList;
    }

    findAndPushTwitterLine(name) {
        this.services.HttpService.getTwittLineByName(name).then((res) => {
            this.twittLineList.next(res.data);
        });
    }
}

TwitterService.publicName = 'TwitterService';

export default injector.connect(TwitterService, {
    toRender: ['HttpService']
});