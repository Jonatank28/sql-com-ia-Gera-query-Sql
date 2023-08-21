// app/api/chat/route.ts

import OpenAI from 'openai'
import { OpenAIStream, StreamingTextResponse } from 'ai'
import { data } from './data'

// Optional, but recommended: run on the edge runtime.
// See https://vercel.com/docs/concepts/functions/edge-functions
export const runtime = 'edge'

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY!,
})

export async function POST(req: Request) {
    // Extract the `messages` from the body of the request
    const { schema, prompt } = await req.json()

    const message = `
    O seu trabalho é criar queries em SQL  a partir de uma schema SQL abaixo.
    Schema SQL: 
    """
    ${schema}
    """

    Considere usar os dados do arquivo ${data} também


    A partir do schema acima, escreva uma query SQL a partir da solicitação abaixo:
    Me retorne somente o código SQL, nada além.
    O código deve ser no formaro MYSQL

    Solicitação: ${prompt}

    `.trim()

    // Request the OpenAI API for the response based on the prompt
    const response = await openai.chat.completions.create({
        model: 'gpt-3.5-turbo-16k-0613',
        stream: true,
        messages: [{ role: 'user', content: message }],
    })

    // Convert the response into a friendly text-stream
    const stream = OpenAIStream(response)

    // Respond with the stream
    return new StreamingTextResponse(stream)
}
