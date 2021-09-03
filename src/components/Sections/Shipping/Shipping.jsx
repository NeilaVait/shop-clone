import styled from 'styled-components';
import ShippingCol from './ShippingCol';

const ShippingSection = styled.section`
  margin: 0 5%;
`;

export default function Shipping() {
  return (
    <ShippingSection>
      <h2>section</h2>
      <ShippingCol />
    </ShippingSection>
  );
}
