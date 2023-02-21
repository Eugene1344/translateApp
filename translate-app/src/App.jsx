
import FieldComponent from './components/field/field.component';
import LanguagesComponent from './components/languages/languages.component';
import TranslateComponent from './components/translations/translatations.component';
import './App.css'
import { useState } from 'react'

function App() {
  const [language, setLanguage] = useState('es');
  const [text, setText] = useState('');

  return (
    <div className="App">
      <FieldComponent value={text} onChange={setText} />
      <LanguagesComponent language={language} onLanguageChange={setLanguage}/>
      <hr />
      <TranslateComponent language={language} text={text} />
    </div>
  )
}

export default App
