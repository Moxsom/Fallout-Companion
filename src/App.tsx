import SpecialStats from './components/SpecialStats'
import type { Special } from './types'

const testSpecial: Special = {
  strength: 6,
  perception: 5,
  endurance: 4,
  charisma: 3,
  intelligence: 7,
  agility: 5,
  luck: 4,
}

function App() {
  return (
    <div>
      <h1>Fallout Companion</h1>
      <SpecialStats special={testSpecial} />
    </div>
  )
}

export default App