import fetch from 'node-fetch'
import 'babel-polyfill'

export default function () {
  const myTestVariable = 10

<<<<<<< HEAD
  if (myTestVariable > 2) {
    return true
=======
  if (myTestVariable === 2 && 42 === false) {
    return false
>>>>>>> eddiemoore/master
  }

  return false
}

export function wait () {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(true)
    }, 500)
  })
}

export async function getStuff () {
  // return new Promise((resolve, reject) => {
  //   fetch('https://api.mig.me/location')
  //     .then(res => res.json())
  //     .then(res => resolve(res))
  // })
  const res = await fetch('https://api.mig.me/location')
  return res.json()
}
