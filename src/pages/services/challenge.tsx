import {
  getResult,
  setResult,
  removeResult,
} from '../../utils/localStorage'

export {
  isTakenContest,
}

function isTakenContest () {
  if (!getResult) return false
  return true
}

