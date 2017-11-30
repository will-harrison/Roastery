import styled from 'styled-components';

export const Order = styled.div`
margin: 25px 50px;
line-height: 1.5rem;
padding-bottom: 15px;
border-bottom: 1px solid rgba(0,0,0,.1)
`;

export const Name = styled.div`
font-size: 22px;
margin-bottom: 5px;
`;

export const Qty = styled.div`
font-size: 18px;
`;

export const SDate = styled.div``;

export const Button = styled.button`
padding; 5px 25px;
background-color: #fff;
border: 1px solid #888;
border-radius: 0;
transition: all .3s;

&:hover {
  background-color: #888;
  color: #fff;
  font-weight: 100;
}
`;