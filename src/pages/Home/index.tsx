import {
  HomeContainer,
  InputContainer,
  InputLabel,
  TaskInput,
  TimeInput,
} from "./styles";
import { Button, Countdown } from "@components";

export const Home = () => {
  return (
    <HomeContainer>
      <InputContainer>
        <InputLabel>Vou trabalhar em</InputLabel>
        <TaskInput
          options={[
            {
              label: "Trabalhar no Design System",
              value: "Trabalhar no Design System",
            },
          ]}
          placeholder={"Dê um nome para o seu projeto"}
          isClearable
        />

        <InputLabel>dentro</InputLabel>
        <TimeInput placeholder={"00"} step={5} min={5} max={60} />
      </InputContainer>

      <Countdown />

      <Button />
    </HomeContainer>
  );
};
