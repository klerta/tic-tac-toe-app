// app/page.tsx
import React from 'react';
import Game from './components/Game';

export default function HomePage() {
  return (
    <div>
      <h1>Tic-Tac-Toe Game</h1>
      <Game />
    </div>
  );
}
