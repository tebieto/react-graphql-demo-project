import React from 'react';
import AddItem from '../../components/AddItem';
import CustomButton from '../../components/CustomButton';
import Header from '../../components/Header';
import ItemCard from '../../components/ItemCard';
import Title from '../../components/Title';
import { ItemsContaier } from './styles';

const Items = (): JSX.Element => {
  const [addItem, setAddItem] = React.useState(false);

  const handleCloseDialog = React.useCallback(() => {
    setAddItem(false);
  }, [setAddItem]);

  const handleOpenDialog = React.useCallback(() => {
    setAddItem(true);
  }, [setAddItem]);

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
          <ItemCard />
          <ItemCard />
          <ItemCard />
        </div>
      </div>
    </ItemsContaier>
  );
};

export default Items;
