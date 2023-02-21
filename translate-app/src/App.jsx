
import FieldComponent from './components/field/field.component';
import './App.css'
import { useState } from 'react'

function App() {
  const [language, setLanguage] = useState('es');
  const [text, setText] = useState('');

  return (
    <div className="App">
      <FieldComponent />
    </div>
  )
}

export default App
