export type Special = {
  strength: number
  perception: number
  endurance: number
  charisma: number
  intelligence: number
  agility: number
  luck: number
}

export type Skill = {
  name: string
  rank: number
  focuses: string[]
}

export type Character = {
  name: string
  playerName: string
  level: number
  special: Special
  skills: Skill[]
  maxHp: number
  currentHp: number
  maxAp: number
  currentAp: number
}