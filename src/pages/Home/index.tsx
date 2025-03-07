import { Controller, useForm } from "react-hook-form";

import { Button, Countdown } from "@components";

import {
  HomeContainer,
  InputContainer,
  InputLabel,
  TaskInput,
  TimeInput,
} from "./styles";

export const Home = () => {
  const { control, watch } = useForm();
  const taskInputId = "task-input";
  const timeInputId = "time-input";

  const taskInput = watch("task");

  console.log(taskInput);

  return (
    <HomeContainer>
      <InputContainer>
        <InputLabel htmlFor={taskInputId}>Vou trabalhar em</InputLabel>
        <Controller
          name={"task"}
          control={control}
          render={({ field: { value } }) => (
            <TaskInput
              inputId={taskInputId}
              value={value}
              options={[]}
              placeholder={"Dê um nome para o seu projeto"}
              isClearable
            />
          )}
        />

        <InputLabel htmlFor={timeInputId}>durante</InputLabel>
        <Controller
          name={"time"}
          control={control}
          render={({ field: { value } }) => (
            <TimeInput
              id={timeInputId}
              value={value}
              placeholder={"00"}
              step={5}
              min={5}
              max={60}
            />
          )}
        />

        <InputLabel>minutos.</InputLabel>
      </InputContainer>

      <Countdown />

      <Button />
    </HomeContainer>
  );
};
