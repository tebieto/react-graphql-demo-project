import { useMutation } from '@apollo/client';
import { DialogContent } from '@material-ui/core';
import React from 'react';
import { ADD_ITEM } from '../../graphql/item/mutation';
import {
  AddItem as AddItemData,
  AddItemVariables,
} from '../../graphql/item/__generated__/AddItem';
import { CustomKeyValueObject } from '../../interface';
import { useAppDispatch } from '../../redux/hooks';
import { addItem as storeItem } from '../../redux/item/reducer';
import { INPUT_KEYS } from '../../utils/constants';
import CustomButton from '../CustomButton';
import CustomForm from '../CustomForm';
import CustomInput from '../CustomInput';
import { AddItemContainer } from './styles';

interface AddItemProps {
  handleClose: { (): void };
  open: true | false;
}

const AddItem = ({ handleClose, open }: AddItemProps): JSX.Element => {
  const defautltFields: AddItemVariables | CustomKeyValueObject = {
    title: '',
  };
  const [fields, setFields] = React.useState(defautltFields);

  const dispatch = useAppDispatch();

  const [persistItem, { error }] = useMutation<AddItemData, AddItemVariables>(
    ADD_ITEM,
    {
      errorPolicy: 'all',
      onCompleted: ({ addItem }) => {
        if (addItem && addItem.id) {
          dispatch(storeItem(addItem));
        }
      },
    },
  );

  const handleSubmit = React.useCallback(() => {
    const variables = fields as AddItemVariables;
    persistItem({ variables });
    handleClose();
  }, [fields]);
  return (
    <AddItemContainer open={open} onClose={handleClose}>
      <DialogContent>
        <CustomForm error={error}>
          <div className="form">
            <CustomInput
              name={INPUT_KEYS.title}
              value={fields.title}
              setFields={setFields}
              fields={fields as CustomKeyValueObject}
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
