import React from 'react';

const Head = (props) => {
  React.useEffect(() => {
    document.title = props.title + ' | Coffee';
  }, [props]);

  return <></>;
};

export default Head;
