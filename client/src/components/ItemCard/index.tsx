import React from 'react';
import { ItemCardContainer } from './styles';
import TimeAgo from 'timeago-react';

export const ItemCard = (): JSX.Element => {
  return (
    <ItemCardContainer>
      <h3 className="title">Read book tomottow</h3>
      <div className="info">
        <div className="creator">Terry Ebieto</div>
        <div className="created_at">
          <TimeAgo datetime={new Date().toUTCString()} />
        </div>
      </div>
    </ItemCardContainer>
  );
};

export default ItemCard;
