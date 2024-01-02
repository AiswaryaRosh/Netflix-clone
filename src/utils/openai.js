import OpenAI from 'openai';
import { OPEN_PLATFORM_API_KEYS } from './constants';
const openai = new OpenAI({
    apiKey: OPEN_PLATFORM_API_KEYS,
    dangerouslyAllowBrowser: true,
});

export default openai;