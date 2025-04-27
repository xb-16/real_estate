import React from 'react';

export default function BlueButton({ content, className = "" }) {
  return (
    <button className={`sm:flex text-white bg-gradient-to-r from-blue-700 to-blue-800 p-2 rounded-md ${className}`}>{content}</button>
  );
}