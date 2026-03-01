import type { Special } from '../types'

type Props = {
  special: Special
}

const LABELS: Record<keyof Special, string> = {
  strength: 'Strength',
  perception: 'Perception',
  endurance: 'Endurance',
  charisma: 'Charisma',
  intelligence: 'Intelligence',
  agility: 'Agility',
  luck: 'Luck',
}

function SpecialStats({ special }: Props) {
  return (
    <div>
      <h2>S.P.E.C.I.A.L.</h2>
      {(Object.keys(special) as Array<keyof Special>).map((stat) => (
        <div key={stat}>
          <span>{LABELS[stat]}</span>
          <span>{special[stat]}</span>
        </div>
      ))}
    </div>
  )
}

export default SpecialStats