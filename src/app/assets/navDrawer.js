"use client";
import Header from "../assets/header";

import "../assets/home.css";

import { useState, useEffect } from "react";

export default function NavDrawer({ miniTitle, title,pretext,typingContent }) {
  const [visible, setVisible] = useState(true);

  const words = typingContent ? typingContent : [];

  const typingSpeed = 80;
  const deletingSpeed = 50;
  const pauseAfterType = 1200;

  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];
    let timeout;

    if(currentWord){
      if (!isDeleting ) {
      timeout = setTimeout(() => {
        setText(currentWord.slice(0, text.length + 1));

        if (text.length + 1 === currentWord.length) {
          setTimeout(() => setIsDeleting(true), pauseAfterType);
        }
      }, typingSpeed);
    } else {
      timeout = setTimeout(() => {
        setText(currentWord.slice(0, text.length - 1));

        if (text.length === 1) {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
        }
      }, deletingSpeed);
    }
    }
    

    return () => clearTimeout(timeout);
  }, [text, isDeleting, wordIndex]);

  return (
    <section className="flex h-screen">
      <div className=" m-auto">
        <div>
          <span>{miniTitle}</span>
          <h1 className="mt-0 text-7xl">
            {title}
          </h1>
            <h2 className="font-mono text-4xl">
              {pretext}
              <span className="bg-gradient-to-r from-indigo-400 to-pink-500 bg-clip-text text-transparent">
                {text}
              </span>
              <span className="ml-1 animate-blink">|</span>
            </h2>
            <div className="  ">
              <Header visible={visible} />
            </div>
          
        </div>
      </div>
    </section>
  );
}
