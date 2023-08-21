'use client'
import Header from '@/components/Header'
import { BsStars } from 'react-icons/bs'
import Editor from 'react-simple-code-editor'
import { highlight, languages } from 'prismjs'
import 'prismjs/components/prism-sql'
import 'prismjs/themes/prism-dark.css'
import { useState } from 'react'
import { useCompletion } from 'ai/react'

export default function Home() {
    const [schema, setSchema] = useState('')

    const { completion, handleSubmit, input, handleInputChange } =
        useCompletion({
            api: 'api/generate-sql',
            body: {
                schema,
            },
        })

    const result = completion

    return (
        <main className="mx-auto flex justify-center items-center h-screen">
            <div className="p-4 bg-[#07061d] rounded-lg">
                <div className="flex flex-col gap-4 w-[500px]">
                    <Header />
                    <form
                        onSubmit={handleSubmit}
                        className="flex flex-col gap-4"
                    >
                        <label>Mais informações</label>
                        <Editor
                            textareaId="schema"
                            value={schema}
                            onValueChange={(code) => setSchema(code)}
                            highlight={(code) =>
                                highlight(code, languages.sql, 'sql')
                            }
                            padding={16}
                            className="bg-[#151a2a] h-20 rounded-md p-2 border outline-none focus:ring-1 focus:ring-[#2dff0b] font-mono"
                        />

                        <label>Faça uma pergunta sobre o código:</label>
                        <textarea
                            name="question"
                            id="question"
                            value={input}
                            onChange={handleInputChange}
                            className="bg-[#151a2a] rounded-md p-2 border outline-none focus:ring-1 focus:ring-[#2dff0b]"
                        />

                        <button
                            type="submit"
                            className="flex justify-center items-center gap-1 text-[#D3FFCC] border-2 border-[#D3FFCC] p-2 rounded-lg"
                        >
                            <BsStars className="text-lg" />
                            Perguntar á inteligência artificial
                        </button>
                    </form>
                    <div className="flex flex-col gap-4">
                        <span>Resposta:</span>

                        <Editor
                            readOnly
                            value={result}
                            onValueChange={() => {}}
                            highlight={(code) =>
                                highlight(code, languages.sql, 'sql')
                            }
                            padding={16}
                            textareaClassName="outline-none"
                            className="bg-transparent border-slate-500 rounded-md p-2 border outline-none "
                        />
                    </div>
                </div>
            </div>
        </main>
    )
}
