import { useState, useRef } from 'react'
import { Sparkles, Paperclip, ArrowUp } from 'lucide-react'

export default function Maincontainer({ userName = 'Abhishek' }) {

    const [message, setMessage] = useState('')
    const [messages, setMessages] = useState([])
    const [attachedFiles, setAttachedFiles] = useState([])

    const fileInputRef = useRef(null)
    const messagesRef = useRef(null)
    const textareaRef = useRef(null)

    const suggestions = [
        { title: 'Content Help', description: 'Help me create a Presentation', color: 'cyan' },
        { title: 'Suggestions', description: 'Give me ideas', color: 'purple' },
        { title: 'Job Application', description: 'Help with job application', color: 'green' }
    ]

    function submitMessage() {
        if (!message.trim() && attachedFiles.length === 0) return

        const newMsg = {
            id: Date.now(),
            text: message.trim(),
            files: attachedFiles.map(f => ({ name: f.name })),
            isUser: true
        }

        setMessages(prev => [...prev, newMsg])
        setMessage('')
        setAttachedFiles([])

        if (fileInputRef.current) fileInputRef.current.value = ''

        setTimeout(() => textareaRef.current?.focus(), 50)

        setTimeout(() => {
            messagesRef.current?.scrollTo({
                top: messagesRef.current.scrollHeight,
                behavior: 'smooth'
            })
        }, 100)
    }

    function handleAttachFile() {
        fileInputRef.current?.click()
    }

    function handleFileChange(e) {
        const files = e.target.files
        if (files?.length > 0) setAttachedFiles(Array.from(files))
    }

    return (
        <div className="flex-1 flex flex-col items-center px-6 pt-6 pb-32 relative z-10 w-full">

            {/* Greeting + Suggestions */}
            {messages.length === 0 && (
                <>
                    <h1 className="text-4xl mb-2">Hey! {userName}</h1>
                    <p className="text-xl text-gray-400 mb-8">
                        What can I help with?
                    </p>

                    <div className="flex gap-4 mb-8 flex-wrap justify-center">
                        {suggestions.map((s, i) => (
                            <button
                                key={i}
                                className={`px-4 py-3 rounded-xl border transition-all hover:scale-105
                  ${s.color === 'cyan'
                                        ? 'bg-cyan-500/10 border-cyan-500/30 hover:bg-cyan-500/20'
                                        : s.color === 'purple'
                                            ? 'bg-purple-500/10 border-purple-500/30 hover:bg-purple-500/20'
                                            : 'bg-green-500/10 border-green-500/30 hover:bg-green-500/20'}`}
                            >
                                <div className="text-sm mb-1">{s.title}</div>
                                <div className="text-xs text-gray-500">{s.description}</div>
                            </button>
                        ))}
                    </div>
                </>
            )}

            {/* Chat Area */}
            <div
                ref={messagesRef}
                className="w-full max-w-2xl flex-1 overflow-y-auto mt-2 no-scrollbar"
                style={{ maxHeight: "calc(100vh - 200px)" }}
            >
                <div className="flex flex-col gap-3 justify-end min-h-full pb-20">
                    {messages.map(m => (
                        <div key={m.id} className="flex justify-end">
                            <div className="bg-cyan-500/80 text-black p-3 rounded-lg max-w-[75%] whitespace-pre-wrap wrap-break-word">
                                {m.text}

                                {m.files?.length > 0 && (
                                    <div className="mt-2 flex gap-2 flex-wrap">
                                        {m.files.map((f, i) => (
                                            <span key={i} className="text-sm bg-transparent text-black px-2 py-1 rounded">
                                                {f.name}
                                            </span>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Bottom Input */}
            <div className="sticky bottom-6 z-20 w-full max-w-2xl">
                <div className="bg-[#1a2832] rounded-2xl border border-[#2a3842] p-1">

                    <div className="flex items-start gap-3 p-4">
                        <Sparkles className="w-5 h-5 text-gray-400 mt-1" />

                        <textarea
                            ref={textareaRef}
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            placeholder="Ask me anything..."
                            className="flex-1 bg-transparent text-white placeholder-gray-500 resize-none outline-none min-h-6 max-h-32 whitespace-pre-wrap"
                            rows={1}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter' && !e.shiftKey) {
                                    e.preventDefault()
                                    submitMessage()
                                }
                            }}
                        />
                    </div>

                    <hr className="border-[#21303a] my-2" />

                    <div className="flex items-center justify-between px-4 pb-3">

                        {/* LEFT - Attach */}
                        <div className="flex items-center gap-2">
                            <button
                                onClick={handleAttachFile}
                                className="flex items-center gap-2 px-3 py-1.5 bg-[#2a4450] hover:bg-[#345560] text-cyan-100 rounded-lg text-sm"
                            >
                                <Paperclip className="w-4 h-4" />
                                Attach file
                            </button>

                            <input
                                ref={fileInputRef}
                                type="file"
                                className="hidden"
                                multiple
                                onChange={handleFileChange}
                            />

                            <div className="text-sm text-gray-300">
                                {attachedFiles.length > 0 && `${attachedFiles.length} file(s) attached`}
                            </div>
                        </div>

                        {/* RIGHT - Send */}
                        <button
                            onClick={submitMessage}
                            disabled={!message.trim() && attachedFiles.length === 0}
                            className="w-10 h-10 bg-cyan-500 hover:bg-cyan-600 disabled:bg-gray-600 disabled:cursor-not-allowed rounded-lg flex items-center justify-center"
                        >
                            <ArrowUp className="w-5 h-5 text-white" />
                        </button>

                    </div>
                </div>
            </div>

        </div>
    )
}
