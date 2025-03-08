"use client"

import React, { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react'
interface Message {
    id: string;
    name: string;
    email: string;
    subject: string;
    text: string;
    read: boolean;
}

export default function MessagePage() {
    const [messages, setMessages] = useState<Message[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const { data: session } = useSession();


    async function fetchMessages() {
        if (session?.user?.email) {
            try {
                const response = await fetch('/api/fetchmessage', {
                    credentials: 'include',
                    method: 'GET',
                });
                if (!response.ok) {
                    throw new Error('Failed to fetch messages');
                }
                const data = await response.json();
                setMessages(data.data);
            } catch (err) {
                setError('Error loading messages');
                console.error(err);
            } finally {
                setLoading(false);
            }
        }
    }

    async function readMessages(e: React.MouseEvent<HTMLDivElement, MouseEvent>, id: string) {
        e.preventDefault();
        try {
            const response = await fetch('/api/fetchmessage', {
                credentials: 'include',
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ id })
            })
             await response.json()
            if (!response.ok) {
                throw new Error('Failed to read messages');
            }
            alert("Message has been marked as read")
            fetchMessages();
        } catch (error) {
            console.log(error, "button is not working")
        }
    }

    useEffect(() => {
        // checkUser();
        fetchMessages();
    }, [session?.user?.email]);

    if (loading) return <div className="flex justify-center p-8">Loading messages...</div>;
    if (error) return <div className="text-red-500 p-8">{error}</div>;

    return (
        <div className="container mx-auto p-4 bg-red-100 min-h-screen">
            <h1 className="text-2xl font-bold mb-6 text-center text-red-600">Messages</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {messages && messages.length > 0 ? messages.map((message) => (
                    <div key={message.id} className="bg-white rounded-lg shadow-md p-6 border border-gray-200 hover:shadow-xl transition-shadow duration-300 max-h-96 overflow-y-auto relative">
                        <div className="absolute top-2 right-2" onClick={(e) => readMessages(e, message.id)}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                        </div>
                        <h2 className="text-2xl font-semibold mb-2 text-gray-800">{message.subject.toUpperCase()}</h2>
                        <div className="mb-4 space-y-4">
                            <p className="text-gray-700"><span className="font-medium">From:</span> {message.name.toUpperCase()}</p>
                            <p className="text-gray-700"><span className="font-medium">Email:</span> {message.email.toLowerCase()}</p>
                        </div>
                        <div className="pt-4 mt-2 border-t border-gray-100">
                            <p className="text-gray-800 leading-relaxed">{message.text}</p>
                        </div>
                    </div>
                )) : (
                    <p className="text-gray-600 text-center py-8 col-span-2">No messages found</p>
                )}
            </div>
        </div>
    );
}