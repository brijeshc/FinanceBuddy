import React from 'react';

type Props = {
  companyName: string;
  ticker: string;
  price: number;
};

const Card: React.FC<Props> = ({ companyName, ticker, price }: Props) : JSX.Element => {
  return (
    <div className='card'><img 
    src='https://images.unsplash.com/photo-1719230693490-786d994f72b2'
      />
      <div className='details'>
        <h2>{companyName} ({ticker})</h2>
        <p>${price}</p>
      </div>
      <p className='info'>Test desccription here</p></div>
  )
};

export default Card;