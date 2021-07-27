import { useQuery } from '@apollo/client';
import React, { useEffect } from 'react';
import AddItem from '../../components/AddItem';
import CustomButton from '../../components/CustomButton';
import Header from '../../components/Header';
import ItemCard from '../../components/ItemCard';
import Title from '../../components/Title';
import { GET_ITEMS } from '../../graphql/item/query';
import {
  GetItems,
  GetItems_getItems,
} from '../../graphql/item/__generated__/GetItems';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { addItems } from '../../redux/item/reducer';
import { ItemsContaier } from './styles';

const Items = (): JSX.Element => {
  const [addItem, setAddItem] = React.useState(false);

  const handleCloseDialog = React.useCallback(() => {
    setAddItem(false);
  }, [setAddItem]);

  const handleOpenDialog = React.useCallback(() => {
    setAddItem(true);
  }, [setAddItem]);

  const { data } = useQuery<GetItems>(GET_ITEMS);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (data && data.getItems) {
      const items = data.getItems as GetItems_getItems[];
      dispatch(addItems([...items]));
    }
  }, [data]);

  const storedItems = useAppSelector((state) => state.itemReducer.items);

  return (
    <ItemsContaier>
      <AddItem open={addItem} handleClose={handleCloseDialog} />
      <Header />
      <Title title="Items" />
      <div className="main">
        <div className="page-header">
          <h2>Items</h2>
          <CustomButton onClick={handleOpenDialog}>Add Item</CustomButton>
        </div>
        <div className="items">
          {storedItems.map((item) => (
            <ItemCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </ItemsContaier>
  );
};

export default Items;
