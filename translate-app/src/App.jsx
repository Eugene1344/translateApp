
import FieldComponent from './components/field/field.component';
import LanguagesComponent from './components/languages/languages.component';
import './App.css'
import { useState } from 'react'

function App() {
  const [language, setLanguage] = useState('es');
  const [text, setText] = useState('');

  return (
    <div className="App">
      <FieldComponent value={text} onChange={setText} />
      <LanguagesComponent language={language} onLanguageChange={setLanguage}/>
    </div>
  )
}

export default App
