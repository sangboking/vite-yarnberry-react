import Button from "@/components/Button";
import styled from "styled-components";

function App() {
  return (
    <Wrapper>
      <Button />
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
  width: 100px;
  height: 100px;
  background-color: pink;
`;
