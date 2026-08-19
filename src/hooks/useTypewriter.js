import { useState, useEffect } from "react";

export function useTypewriter(words, typingSpeed = 55, pauseTime = 1400) {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex % words.length];
    let timeoutId;

    if (!isDeleting && text.length < currentWord.length) {
      timeoutId = setTimeout(() => {
        setText(currentWord.slice(0, text.length + 1));
      }, typingSpeed);
    } else if (!isDeleting && text.length === currentWord.length) {
      timeoutId = setTimeout(() => setIsDeleting(true), pauseTime);
    } else if (isDeleting && text.length > 0) {
      timeoutId = setTimeout(() => {
        setText(currentWord.slice(0, text.length - 1));
      }, typingSpeed / 1.6);
    } else if (isDeleting && text.length === 0) {
      setIsDeleting(false);
      setWordIndex((index) => index + 1);
    }

    return () => clearTimeout(timeoutId);
  }, [text, isDeleting, wordIndex, words, typingSpeed, pauseTime]);

  return text;
}
