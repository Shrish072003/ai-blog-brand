import { useRef, useState, useEffect } from "react";
import "./page.css";
import axios from "axios";
import MoodSetting from "./homecomponents/index";
import sendIcon from '../images/send.png';

const YOU = "you";
const AI = "ai";

function BlogsIdeas() {
  const textareaRef = useRef();
  const [qna, setQna] = useState([]);
  const [loading, setLoading] = useState(false);
  const chatRef = useRef();
  const [includeTags, setIncludeTags] = useState(false);
  const [tags, setTags] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const updateQNA = (from, value) => {
    setQna((qna) => [...qna, { from, value }]);
  };

  const handleSend = () => {
    let message = textareaRef.current.value;
    let messageWithoutKeywords = message; // Separate variable to store message without keywords
  
    if (includeTags) {
      messageWithoutKeywords = message; // Store the original message without changes
      message +=
        " - Generate " +
        (myInputValue() !== '' ? myInputValue() + " blogs topic and include these keywords " + tags.join(", ") : '') +
        ".";
    }
    
    // Update QnA state with the original message without keywords
    updateQNA(YOU, messageWithoutKeywords);
  
    textareaRef.current.value = "";
  
    if (message.trim() === '' && !includeTags) {
      // Check if the message is empty and tags are not included
      return; // Don't send the message if it's empty and tags are not included
    }
  
    setLoading(true);
    axios
      .post("http://24.199.99.229:8080/chat", {
        question: message,
      })
      .then((response) => {
        updateQNA(AI, response.data.answer);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  

  useEffect(() => {
    chatRef.current.scrollTop = chatRef.current.scrollHeight; // Scroll to the bottom of the chat window
  }, [qna]);

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault(); // Prevents the newline character from being added
      handleSend();
    }
  };

  const renderContent = (qna) => {
    const value = qna.value;

    if (Array.isArray(value)) {
      return value.map((v) => <p className="message-text">{v}</p>);
    }

    return <p className="message-text">{value}</p>;
  };

  const handleKeywordDown = (event) => {
    if (event.key === 'Enter' || event.key === ',') {
      event.preventDefault();
      const value = inputValue.trim();
      if (value) {
        setTags([...tags, value]);
        setInputValue('');
      }
    }
  };

  const handleDelete = (tagToDelete) => {
    const newTags = tags.filter((tag) => tag !== tagToDelete);
    setTags(newTags);
  };

  const myInputValue = () => {
    const myInput = document.getElementById("my-input");
    if (myInput !== null) {
      const inputItem = myInput.value;
      if (inputItem !== '') {
        const inputValue = parseInt(inputItem);
        if (!isNaN(inputValue) && inputValue <= 2200) {
          myInput.max = 2200;
          myInput.maxLength = 4;
          return inputValue / 1;
        } else {
          return "The input cannot be empty.";
        }
      } else {
        return "The input cannot be empty.";
      }
    }
    return '';
  };

  const paragraphStyle = {
    color: 'white',
    marginBottom: '4px',
  };

  



  return (
    <div className="container">
      <div className="container-main">
        <div className="chats" ref={chatRef}>
          {qna.map((qna) => {
            if (qna.from === YOU) {
              return (
                <div className="send chat">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/2202/2202112.png"
                    alt=""
                    className="avtar"
                  />
                  <p>{renderContent(qna)}</p>
                </div>
              );
            }
            return (
              <div className="recieve chat">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/4712/4712027.png"
                  alt=""
                  className="avtar"
                />
                <div className="output">{renderContent(qna)}</div>
              </div>
            );
          })}

          {loading && (
            <div className="recieve chat">
              <img
                src="https://cdn-icons-png.flaticon.com/512/4712/4712027.png"
                alt=""
                className="avtar"
              />
              <p>Typing...</p>
            </div>
          )}
        </div>

        <div className="Input_box">
          <div className="chat-input">
            <textarea
              type="text"
              ref={textareaRef}
              className="form-control col"
              placeholder="Give a reference or keywords..."
              onKeyDown={handleKeyDown}
            />
            <button disabled={loading} className="btn btn-success" onClick={handleSend}>
              <img src={sendIcon} alt="Send" />
            </button>
          </div>
        </div>

      </div>
      <main className='separator_col'></main>
      <main className="separator_col_top"></main>
    <main className="Keywoard_block_main">
        <main className="Keywoard_block">
          <div className="inline_keyword">
            <div className="Keyword_text"><div className="key_text">Keyword</div></div>
            <label className="switch">
              <input type="checkbox" onChange={(e) => setIncludeTags(e.target.checked)} />
              <span className="slider round"></span>
            </label>
          </div>
          <div className="Keyword_text_main">
            <div className="tag-container">
              {tags.map((tag) => (
                <div key={tag} className="tag">
                  {tag}
                  <button onClick={() => handleDelete(tag)}>x</button>
                </div>
              ))}
            </div>
          </div>
          <main className="Keyword_tag-input">
            <input
              required
              className="tag-input"
              type="text"
              placeholder="Add tag & wildcards"
              value={inputValue}
              onChange={(event) => setInputValue(event.target.value)}
              onKeyDown={handleKeywordDown}
            />
          </main>
        </main>
        <div>
          <MoodSetting />
          <div>
            <p style={paragraphStyle}>No Of Blog Topics*</p>
            <input
              type="number"
              required
              id="my-input"
              max="2200"
              maxLength="4"
              placeholder="No Of Blog Topics*"
              style={{
                background: "black",
                color: "white",
              }}
            />
          </div>
        </div>
      </main>
    </div>
  );
}

export default BlogsIdeas;