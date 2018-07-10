import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';

const Wrapper = styled.div`
/* 레이아웃 */
  height: 5rem;
  background: ${oc.gray[8]};
  border-bottom : 1px solid ${oc.red[9]};

/* 폰트설정 */
color : white;
font-weight : 500;
font-size : 1.5rem;

/* 가운데 정렬 */
display : flex;
align-items : center; /*세로정렬*/ 
justify-content : center; /*가로정렬*/

`;
const Header = () => ( 
  <Wrapper>
    주소록
  </Wrapper>
);

export default Header;
