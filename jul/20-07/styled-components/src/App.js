import styled from "styled-components";

// Components
import PrimaryButton from "./components/Button";
import ListItem from "./components/ListItem";

// Styling a div html element
const Container = styled.div`
  display: flex;
`;

// Styling an existing react component
const StyledListItem = styled(ListItem)`
  list-style-type: none;
`;

function App() {
  return (
    <Container>
      <StyledListItem />
      <PrimaryButton
        text={"Click me"}
        handleClick={() => console.log("clicked the first button")}
      />
      <PrimaryButton
        color={"blue"}
        text={"Don't click me"}
        handleClick={() => console.log("clicked the second button")}
      />
      <PrimaryButton
        color={"gray"}
        text={"third button"}
        handleClick={() => console.log("clicked the third button")}
      />
      <PrimaryButton
        fullWidth={true}
        color={"green"}
        text={"green button"}
        handleClick={() => console.log("clicked the fourth button")}
      />
    </Container>
  );
}

export default App;
