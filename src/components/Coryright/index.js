import React, { useState } from 'react';
import { IconButton } from '@mui/material';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

// Mock data ของข้อความ
const mockData = [
  { text: 'test1' },
  { text: 'test2' },
  { text: 'test3' },
  { text: 'test4' },
];

function CopyrightButton() {
  const [disabledButtons, setDisabledButtons] = useState([]);

  const copyToClipboard = (text, index) => {
    navigator.clipboard.writeText(text)
    setDisabledButtons((prev) => [...prev, index]);
    setTimeout(() => {
      setDisabledButtons((prev) => prev.filter((btnIndex) => btnIndex !== index));
    }, 1000);
  };

  return (
    <>
      {mockData.map((item, index) => (
        <IconButton
          key={index}
          onClick={() => copyToClipboard(item.text, index)}
          disabled={disabledButtons.includes(index)}
        >
          <span>{item.text}</span>
          <ContentCopyIcon />
        </IconButton>
      ))}
    </>
  );
}

export default CopyrightButton;