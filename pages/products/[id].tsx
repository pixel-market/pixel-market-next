import styled from "@emotion/styled";
import type { NextPage } from "next";
import { MainLayout } from "layouts/Main";

export const Wrapper = styled.div`
  background-color: red;
`;

const Product: NextPage = () => {
  return (
    <MainLayout title="Product">
      <Wrapper>Product</Wrapper>
    </MainLayout>
  );
};

export default Product;
