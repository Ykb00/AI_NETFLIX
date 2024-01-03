import OpenAI from 'openai'
import { OPENAI_API_KEY, OPENAI_API_KEY2} from '../components/Constants'



const openai = new OpenAI({
    apiKey: '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',
    dangerouslyAllowBrowser: true
})

export default openai