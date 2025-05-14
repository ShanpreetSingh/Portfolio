// src/components/Poetry.jsx
import React from 'react';

const poems = [
    {
        title: "To be human it’s easy ",
        content: `From pure light and piece of woods
Came into dark and a world of goods
Where the wrong prevails, the lamp is dark
Judged by brands, seen by the marks
With so much wrong, who is the guard
To be human it’s easy, but humane too hard`
      },
  {
    title: "वक्त ",
    content: `क्यों दूसरों के पैमाने पे जीता है तू, ये दाग ए ज़ख़्म भी मिट जाएँगे 
आओ बैठो मेरे तस्सवुर में , हम एक नया जहाँ बनाएँगे ।
गुनाह तेरे जब खत्म होंगे, तू ख़ुद ही खुदा हो जाएगा 
एक परिंदा ये वक्त है , वक्त आने पर उड़ जाएगा ।

यकीन रख ए बंदे ख़ुद पे, ये आज़माइश से गुज़र जाएगा 
कर बुलंद ख़ुद ही को इतना , कि ये जहाँ हैरान हो जाएगा 
आज अगर कश्कोल हाथ में,  ये वक्त भी गुज़र जाएगा 
एक परिंदा ये वक्त है , वक्त आने पर उड़ जाएगा।`
  },
];

export default function Poetry() {
  return (
    <section id="poetry" className="py-16 bg-white dark:bg-gray-900 transition-colors">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-8">
          My Poetry
        </h2>
        
        <div className="max-w-2xl mx-auto">
          {poems.map((poem, index) => (
            <div key={index} className="mb-12 p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200 text-center">
                {poem.title}
              </h3>
              <pre className="font-sans text-gray-600 dark:text-gray-300 whitespace-pre-wrap text-center">
                {poem.content}
              </pre>
            </div>
            
          ))}
          <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2 text-center">
              Want to read more?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4 text-center">
              Contact me for my complete poetry collection
            </p>

        </div>
      </div>
    </section>
  );
}