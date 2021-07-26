import { DialogContent } from '@material-ui/core';
import React from 'react';
import CustomButton from '../CustomButton';
import CustomForm from '../CustomForm';
import CustomInput from '../CustomInput';
import { AddItemContainer } from './styles';

interface AddItemProps {
  handleClose: { (): void };
  open: true | false;
}

const AddItem = ({ handleClose, open }: AddItemProps): JSX.Element => {
  const handleSubmit = React.useCallback(() => {
    console.log('here');
  }, []);

  const handleChange = React.useCallback(() => {
    console.log('here');
  }, []);
  return (
    <AddItemContainer open={open} onClose={handleClose}>
      <DialogContent>
        <CustomForm>
          <div className="form">
            <CustomInput
              name="title"
              onChange={handleChange}
              placeholder="Enter Item Title"
            />
            <div className="form-actions">
              <span className="close" onClick={handleClose}>
                Close
              </span>
              <CustomButton onClick={handleSubmit}>Add Item</CustomButton>
            </div>
          </div>
        </CustomForm>
      </DialogContent>
    </AddItemContainer>
  );
};

export default AddItem;
