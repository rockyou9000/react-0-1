const PLUS = 'PLUS'
const MINUS = 'MINUS'

export default function foo(state = 0, action) {
  switch (action.type) {
    case PLUS: return state + 1
    case MINUS: return state - 1
    default: return state
  }
}

export const plusAction = () => ({ type: PLUS })
export const minusAction = () => ({ type: MINUS })
