import styled from 'styled-components';
import colors from '../../utils/colors';

export const CustomFormContainer = styled.div`
  width: 100%;
  height: 100%;
  margin: 100px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  .form-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid ${colors.primaryHoverColor};
    padding: 20px;

    .form {
      width: 90vw;
      max-width: 500px;
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      margin-top: 20px;

      .form-actions {
        a:link,
        a:visited {
          text-decoration: none;
          color: ${colors.primaryButtonColor};
          margin-right: 20px;
        }
      }
    }
  }
`;
