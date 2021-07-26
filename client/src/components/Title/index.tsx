import React from 'react';

const Title = (props: { title: string }): null => {
  React.useEffect(() => {
    document.title = props.title;
  }, [props.title]);

  return null;
};

export default Title;
