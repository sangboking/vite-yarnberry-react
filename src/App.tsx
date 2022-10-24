import Button from "@/components/Button";
import { Suspense } from "react";
import styled from "styled-components";

function App() {
  return (
    <Wrapper>
      <Suspense fallback={<div>버튼로딩...</div>}>
        <Button />
      </Suspense>
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
  width: 100px;
  height: 100px;
  background-color: pink;
`;
