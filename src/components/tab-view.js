import React from 'react';
import styled from 'styled-components';

const TabButton = styled.button`
  border: none;
  border-radius: 5px;
  background: ${(props) => props.selected ? 'pink' : 'black'}
`;

const TabView = ({ tab, tabs, changeTab }) => {
  if (!tabs || !tabs.length) {
    return null;
  }

  return (
    <>
      {
        tabs.map(t => (
          <TabButton
            key={t}
            onClick={e => changeTab(e.target.value)}
            value={t}
            selected={t === tab}>
              {t}
            </TabButton>
        ))
      }
    </>
  );
}

export default TabView;