import React from 'react';

import Preview from '../../components/Preview/Preview';
import Editor from '../../components/Editor/Editor';
import { useState } from 'react';

import './Home.css';

export default function Home() {
  const [title, setTitle] = useState('title');
  const [subtitle, setSubtitle] = useState('subtitle');
  const [font, setFont] = useState('font');
  const [align, setAlign] = useState('alignment');
  const [text, setText] = useState('text');
  return (
    <main>
      {/* pass the state variables as props to the presentational components */}
      <Preview {...{ title, subtitle, font, align, text }} />
      <Editor {...{ setTitle, setSubtitle, setFont, setAlign, setText }} />
    </main>
  );
}
