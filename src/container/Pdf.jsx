import React from 'react';

const Pdf = () => {
  return (
    <div style={{position: 'absolute', width: '100%', height:'100%'}}>
      <object
        data={require('../docs/CV_VillalobosCasanatanErick.pdf')}
        type="application/pdf"
        width="100%"
        height="100%"
      >

      </object>
    </div>
  );
}

export default Pdf;
