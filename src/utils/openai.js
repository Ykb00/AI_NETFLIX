import OpenAI from 'openai'
import { OPENAI_API_KEY, OPENAI_API_KEY2} from '../components/Constants'



const openai = new OpenAI({
    apiKey: OPENAI_API_KEY,
    dangerouslyAllowBrowser: true
})

export default openai