import React, { useState } from 'react'
import { House, Calendar, Mail, Copy, Settings, User, Sparkles, BotMessageSquare  } from 'lucide-react'

export default function Sidebar() {
    const [active, setActive] = useState('Home')

    return (
        <div className="w-16 h-screen bg-[#111111] border-r border-[#1f1f1f] flex flex-col items-center py-4 justify-between">

            {/* Top Icons */}
            <div className="flex flex-col items-center gap-6">
                <div className="w-10 h-10 bg-linear-to-br from-cyan-400 to-cyan-600 rounded-lg flex items-center justify-center">
                    <BotMessageSquare className="w-5 h-5 text-white" />
                </div>

                <div className="flex flex-col gap-4 mt-4">
                    <button
                        onClick={() => setActive('Home')}
                        className={`w-10 h-10 flex items-center justify-center ${active === 'Home' ? 'text-cyan-400' : 'text-gray-500 hover:text-gray-300'} hover:bg-[#1f1f1f] rounded-lg transition-colors`}
                    >
                        <House className="w-5 h-5" />
                    </button>

                    <button
                        onClick={() => setActive('Calendar')}
                        className={`w-10 h-10 flex items-center justify-center ${active === 'Calendar' ? 'text-cyan-400' : 'text-gray-500 hover:text-gray-300'} hover:bg-[#1f1f1f] rounded-lg transition-colors`}
                    >
                        <Calendar className="w-5 h-5" />
                    </button>

                    <button
                        onClick={() => setActive('Mail')}
                        className={`w-10 h-10 flex items-center justify-center ${active === 'Mail' ? 'text-cyan-400' : 'text-gray-500 hover:text-gray-300'} hover:bg-[#1f1f1f] rounded-lg transition-colors`}
                    >
                        <Mail className="w-5 h-5" />
                    </button>

                    <button
                        onClick={() => setActive('Copy')}
                        className={`w-10 h-10 flex items-center justify-center ${active === 'Copy' ? 'text-cyan-400' : 'text-gray-500 hover:text-gray-300'} hover:bg-[#1f1f1f] rounded-lg transition-colors`}
                    >
                        <Copy className="w-5 h-5" />
                    </button>
                </div>
            </div>

            {/* Bottom Icons */}
            <div className="flex flex-col gap-4">
                <button className="w-10 h-10 flex items-center justify-center text-gray-500 hover:text-gray-300 hover:bg-[#1f1f1f] rounded-lg transition-colors">
                    <Settings className="w-5 h-5" />
                </button>
                <button className="w-10 h-10 flex items-center justify-center text-gray-500 hover:text-gray-300 hover:bg-[#1f1f1f] rounded-lg transition-colors">
                    <User className="w-5 h-5" />
                </button>
            </div>
        </div>
    )
}