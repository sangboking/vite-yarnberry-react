import styled from "styled-components";
import Button from "@/components/Button";

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
