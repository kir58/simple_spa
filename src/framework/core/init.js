import wfm from '../tools/delay';

export default (module) => wfm.delay(2000).then(() => module.start());
