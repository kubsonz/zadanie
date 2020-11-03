import Header from './components/Header'
import Messages from './components/Messages'
import Technologies from './components/Technologies'

async function App() {
  const template = document.createElement('template')
  template.innerHTML = `
    <div class="container">
      ${Header()}
      ${await Messages()}
      ${Technologies()}
    </div>
  `
  return template.content.cloneNode(true)
}

export default App;