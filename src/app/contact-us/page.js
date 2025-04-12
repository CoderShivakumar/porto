"use client"
import React, { useState } from 'react'
import { Footer } from '../components/footer'

export default function ContactUs() {
  const [selectedTopics, setSelectedTopics] = useState([])
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')

  const topics = ['Mobile App', 'Web Dev', 'Story Writing', 'Content Creation']

  const toggleTopic = (topic) => {
    if (selectedTopics.includes(topic)) {
      setSelectedTopics(selectedTopics.filter((t) => t !== topic))
    } else {
      setSelectedTopics([...selectedTopics, topic])
    }
  }

  const handleSubmit = async () => {
    const payload = {
      name,
      email,
      subject,
      message,
      topics: selectedTopics,
    }

    try {
      const res = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      })

      if (res.ok) {
        alert('Message sent successfully!')
        setName('')
        setEmail('')
        setSubject('')
        setMessage('')
        setSelectedTopics([])
      } else {
        alert('Failed to send message.')
      }
    } catch (error) {
      console.error('Submission error:', error)
      alert('An error occurred. Please try again.')
    }
  }

  return (
    <>
      <div className='text-center mt-20 font-bold px-4'>
        <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-8xl'>
          <span className='text-gray-400'>Say Hi!</span> and tell me
        </h1>
        <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-8xl'>about your idea</h1>
        <h1 className='text-base sm:text-lg md:text-xl lg:text-2xl mt-5 font-thin'>
          Have a nice work? Reach out and let's chat.
        </h1>
      </div>
      <div className='flex flex-col items-center justify-center mt-16 px-4'>
        <div className='w-full max-w-md space-y-6'>
          <div>
            <h1 className='text-base sm:text-lg font-medium mb-1'>Your Name</h1>
            <input
              type='text'
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder='Enter your name...'
              className='w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400'
            />
          </div>

          <div>
            <h1 className='text-base sm:text-lg font-medium mb-1'>Your Email</h1>
            <input
              type='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder='Enter your email...'
              className='w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400'
            />
          </div>

          <div>
            <h1 className='text-base sm:text-lg font-medium mb-1'>Subject</h1>
            <input
              type='text'
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              placeholder='Subject...'
              className='w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400'
            />
          </div>

          <div>
            <h1 className='text-base sm:text-lg font-medium mb-3'>What’s on your mind?</h1>
            <div className='flex flex-wrap justify-center gap-3 mb-4'>
              {topics.map((topic) => (
                <button
                  key={topic}
                  type='button'
                  onClick={() => toggleTopic(topic)}
                  className={`px-4 py-2 rounded-full text-sm border ${
                    selectedTopics.includes(topic)
                      ? 'bg-blue-500 text-white border-blue-500'
                      : 'bg-white text-gray-700 border-gray-300'
                  } hover:shadow-md transition-all`}
                >
                  {topic}
                </button>
              ))}
            </div>
            <h1 className='text-base sm:text-lg font-bold'>Message</h1>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder='Type your message here...'
              rows={4}
              className='w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none'
            />
          </div>

          <div className='text-center'>
            <button
              onClick={handleSubmit}
              className='bg-[rgb(3,7,18)] text-white px-16 font-bold text-2xl py-6 py-2 rounded-4xl hover:bg-gray-600'
            >
              Submit
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
