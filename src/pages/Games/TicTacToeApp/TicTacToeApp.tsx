import { useEffect, useState } from 'react'

type User = 'x' | 'o'

type XoData = {
  id: number
  value?: User
}

const winnerStat = ['123', '456', '789', '147', '258', '369', '159', '357']
const defaultData: XoData[] = [
  { id: 1 },
  { id: 2 },
  { id: 3 },
  { id: 4 },
  { id: 5 },
  { id: 6 },
  { id: 7 },
  { id: 8 },
  { id: 9 },
]

export const TicTacToeApp = () => {
  const [isX, setIsX] = useState(true)
  const [data, setData] = useState(defaultData)
  const [score, setScore] = useState({ x: 0, o: 0, draw: 0 })

  useEffect(() => {
    handleStat()
  }, [data])

  const handleStat = () => {
    const x = data.filter((item) => item.value === 'x').map((item) => item.id)
    const o = data.filter((item) => item.value === 'o').map((item) => item.id)
    const all = data.filter((item) => item.value).map((item) => item.id)

    if (all.length === 9) return handleDraw()

    if (x.length >= 3) return handleWinner('x', x)

    if (o.length >= 3) return handleWinner('o', o)
  }

  const handlePopup = (text: string) => {
    setTimeout(() => {
      if (confirm(text) === true) {
        handleReset()
      } else {
        handleReset()
      }
    }, 100)
  }

  const handleDraw = () => {
    setScore({ ...score, draw: score.draw + 1 })
    handlePopup('Draw!!!')
  }

  const handleWinner = (who: User, val: number[]) => {
    let temp: string[] = []

    winnerStat.forEach((stat) => {
      const tempStat = val
        .map((item) => {
          if (stat.includes(item.toString())) return item.toString()

          return ''
        })
        .filter((item) => item)

      if (tempStat.length === 3) temp = tempStat
    })

    if (temp.length === 3) {
      setScore({ ...score, [who]: score[who] + 1 })
      handlePopup(`${who.toUpperCase()} Winner!!!`)
    }
  }

  const handleOnClick = (item: XoData) => {
    if (item.value) return

    const tempData = data.map((tempItem) => {
      if (tempItem.id === item.id) {
        return { ...tempItem, value: (isX ? 'x' : 'o') as User }
      }

      return tempItem
    })

    setData(tempData)
    setIsX(!isX)
  }

  const handleReset = (isResetScore?: boolean) => {
    setData(defaultData)
    setIsX(true)

    if (isResetScore) setScore({ x: 0, o: 0, draw: 0 })
  }

  return (
    <>
      <h1 className='text-2xl font-bold text-center'>XO Game</h1>

      <div>
        <h2 className='text-xl font-bold text-center text-rose-600'>
          {isX ? 'X' : 'O'} Turn
        </h2>

        <div className='grid grid-cols-3 w-fit m-auto'>
          {data.map((item) => (
            <div
              className='h-32 w-32 border-2 border-slate-400 text-center text-8xl'
              key={item.id}
              onClick={() => handleOnClick(item)}
            >
              {item.value}
            </div>
          ))}
        </div>

        <div className='flex justify-center items-center flex-col mt-6'>
          {Object.entries(score).map(([key, value]) => (
            <div key={key} className='grid grid-cols-2 gap-1'>
              <span className='font-bold'>{key.toUpperCase()} :</span>
              <span className='font-bold text-rose-600'>{value}</span>
            </div>
          ))}

          <button
            className='px-4 py-2 mt-4 text-white bg-slate-400 rounded'
            onClick={() => handleReset()}
          >
            Reset
          </button>

          <button
            className='px-4 py-2 mt-4 text-white bg-slate-400 rounded'
            onClick={() => handleReset(true)}
          >
            Reset All
          </button>
        </div>
      </div>
    </>
  )
}
