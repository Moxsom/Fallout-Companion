export type DiceResult = {
  dice: number[]
  successes: number
  complications: boolean
}

export type ActionResult = {
  roll: DiceResult
  ap_spent: number
  damage?: number
}