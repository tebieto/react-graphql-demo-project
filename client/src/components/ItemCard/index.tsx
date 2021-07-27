import React from 'react';
import { ItemCardContainer } from './styles';
import TimeAgo from 'timeago-react';
import { AddItem_addItem } from '../../graphql/item/__generated__/AddItem';

interface ItemCardProps {
  item: AddItem_addItem;
}

export const ItemCard = ({ item }: ItemCardProps): JSX.Element => {
  return (
    <ItemCardContainer>
      <h3 className="title">{item.title}</h3>
      <div className="info">
        <div className="creator">{item.creator?.full_name}</div>
        {item.createdAt ? (
          <div className="created_at">
            <TimeAgo datetime={item.createdAt} />
          </div>
        ) : null}
      </div>
    </ItemCardContainer>
  );
};

export default ItemCard;
