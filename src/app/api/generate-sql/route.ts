import OpenAI from 'openai'
import { OpenAIStream, StreamingTextResponse } from 'ai'
import { data } from './data'

// Optional, but recommended: run on the edge runtime.
// See https://vercel.com/docs/concepts/functions/edge-functions
export const runtime = 'edge'

const openai = new OpenAI({
    // apiKey: process.env.OPENAI_API_KEY!,
     apiKey: '434554hjnnjkrgnjklnmfglng'
})

// Declare a variable to store the cached data
let cachedData: string | null = null

// Declare a cache object for storing responses
const responseCache: Record<string, StreamingTextResponse> = {}

export async function POST(req: Request) {
    // Extract the `messages` from the body of the request
    const { schema, prompt } = await req.json()

    // Load data into cachedData if not already loaded
    if (cachedData === null) {
        // Assuming data is imported from './data'
        cachedData = data
    }

    const cacheKey = JSON.stringify({ schema, prompt })

    // Check if the response is already cached
    if (responseCache[cacheKey]) {
        return responseCache[cacheKey]
    }

    const message = `
    O seu trabalho é criar queries em SQL  a partir de uma schema SQL abaixo.
    Schema SQL: 
    """
    ${schema}
    """

    Considere usar os dados do arquivo ${cachedData}, 
    considere usar as chaves extrangeiras do arquivo cachedData

    A partir do schema acima, escreva uma query SQL a partir da solicitação abaixo:
    Me retorne somente o código SQL, nada além.
    O código deve ser no formaro MYSQL

    Solicitação: ${prompt}

    `.trim()

    // Request the OpenAI API for the response based on the prompt
    const response = await openai.chat.completions.create({
        model: 'gpt-3.5-turbo-16k',
        stream: true,
        messages: [{ role: 'user', content: message }],
    })

    // Convert the response into a friendly text-stream
    const stream = OpenAIStream(response)

    // Cache the response for future use
    responseCache[cacheKey] = new StreamingTextResponse(stream)

    // Respond with the stream
    return responseCache[cacheKey]
}
