import { useSyncExternalStore } from 'react'

const format = new Intl.DateTimeFormat('es-ES', {
  timeZone: 'America/Havana',
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit',
  hour12: false,
})

const subscribe = (onChange: () => void) => {
  const id = setInterval(onChange, 1000)
  return () => clearInterval(id)
}
const getTime = () => format.format(Date.now())
const getServerTime = () => null

export const Clock = () => {
  const time = useSyncExternalStore(subscribe, getTime, getServerTime)
  return (
    <span className="tabular-nums">
      La Habana{time && ` ${time}`}
    </span>
  )
}
