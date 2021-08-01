import React, { useEffect } from 'react'
import "./App.css"

export default function App() {


  return (
    <div id="chat-wrap">
      <h2>Tinder</h2>
      <div id="chat-window">
        <div id="output"></div>
        <div id="feedback"></div>
      </div>

      <input type="text" id="sender" placeholder="Ad"></input>
      <input type="text" id="message" placeholder="Mesaj"></input>

      <button id="submitBtn">Gönder</button>
    </div>
  )
}
