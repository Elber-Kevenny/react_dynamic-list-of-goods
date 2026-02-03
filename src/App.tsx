import React, { useEffect, useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { getAll, get5First, getRed } from './api/goods';
import { Good } from './types/Good';





export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([])
  const [error, setError] = useState('')

  useEffect(() => {
    getAll().then(setGoods)
    .catch(() => setError('error'))
  }, [])

  const handleGetAll = () => {
    getAll().then(setGoods)
  }

  const handleGetFive = () => {
    get5First().then(setGoods)
  }

  const handleGetRed = () => {
    getRed().then(setGoods)
  }

  return (
     <div className="App">
    <h1>Dynamic list of Goods</h1>

    <button onClick={() => handleGetAll()} type="button" data-cy="all-button">
      Load all goods
    </button>

      <button onClick={() => handleGetFive()}type="button" data-cy="first-five-button">
      Load 5 first goods
    </button>

    <button onClick={() => handleGetRed()} type="button" data-cy="red-button">
      Load red goods
    </button>

      <GoodsList goods={goods} />
      <span style={{ color: 'red' }}>{error}</span>
  </div>
  )
};
