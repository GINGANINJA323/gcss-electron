// Game table, add/remove/edit games here.
import React from 'react';
import styled from 'styled-components';

const Table = styled.div``;

const Row = styled.div``;

const GameTable = ({ setPage, games }) => {
  return (
    <Table>
      {
        games.map(g => (
          <Row key={g}>
            <p>{g}</p>
            <button onClick={() => setPage('gameSetup')}>{'Edit Game'}</button>
          </Row>
        ))
      }
    </Table>
  );
}

export default GameTable;