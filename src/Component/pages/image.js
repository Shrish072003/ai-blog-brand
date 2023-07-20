import { useState } from "react";
import { Configuration, OpenAIApi } from 'openai'
import './pages.css'

const OPENAI_API_KEY = "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";


function Images() {
  const [prompt, setPrompt] = useState('')
  const [results, setResults] = useState([]) // store all image URLs in an array
  const [loading, setLoading] = useState(false)
  
  const configuration = new Configuration({
    apiKey: OPENAI_API_KEY,
  })

  const openai = new OpenAIApi(configuration);

  const generateImage = async () => {
    setLoading(true)
    const response = await openai.createImage({
      prompt: prompt,
      n: 4,
      size: "1024x1024",
    });
    setLoading(false)
    setResults(response.data.data.map((item) => item.url)) // store all image URLs in the state
    console.log(response.data.data)
  };

  return (
    <div className="app">
      <h1>React AI Image Generator</h1>
      {loading ? (
        <h2> Image generation in progress ... Please wait!</h2>
      ) : (<></>)}
      <div className="card">
        <textarea
          className="text-input"
          placeholder="Enter a prompt"
          onChange={(e) => setPrompt(e.target.value)}
        />
        <button className="button" onClick={generateImage}>Generate Image</button>
        {results.length > 0 ? ( // use map function to display all images
          <div className="img_block">
            {results.map((url, index) => (
              <div className="img" style={{ backgroundImage: `url(${url})` }} key={index} />
            ))}
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  )
}

export default Images;
