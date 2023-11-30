const initialValue = { count: 0, step: 1 }

const reducer = (state, action) => {
  switch (action.type) {
    case 'decrement': {
      return {
        count: state.count - state.step,
        step: state.step,
      }
    }
    case 'increment': {
      return {
        count: state.count + state.step,
        step: state.step,
      }
    }
    case 'reset': {
      return {
        count: 0,
        step: state.step,
      }
    }
    case 'updateStep': {
      return {
        count: state.count,
        step: action.step,
      }
    }
    default: {
      throw new Error(
        `Action of the following type is not available: ${action.type}`
      )
    }
  }
}

export { reducer, initialValue }
