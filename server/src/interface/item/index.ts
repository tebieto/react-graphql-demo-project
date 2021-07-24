import { UserAttributes } from '../user';

export interface ItemAttributes {
  id: string;
  title: string;
  created_by: UserAttributes;
  created_at?: string;
}
