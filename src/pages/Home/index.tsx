import { FormEvent, useState } from "react";

import { Button, Countdown } from "@components";

import {
  HomeContainer,
  InputContainer,
  InputLabel,
  TaskInput,
  DurationInput,
  DurationInputContainer,
  PlusIcon,
  MinusIcon,
  DurationInputActionItem,
} from "./styles";
import { useCycles, useTasks } from "@hooks";
import { CycleStatusEnum } from "@models";

type Option = {
  label: string;
  value: string;
};

export const Home = () => {
  const { tasks, createNewTask } = useTasks();
  const { hasCycleInProgress, createNewCycle, updateInProgressCycleStatus } = useCycles();

  const [taskInputValue, setTaskInputValue] = useState("");
  const [taskInputSelectedOption, setTaskInputSelectedOption] = useState<Option | null>(null);
  const [durationInputValue, setDurationInputValue] = useState<number>(0);

  const options = tasks.map(({ id, title }) => ({
    label: title,
    value: String(id),
  }));

  const isValidDuration = durationInputValue && durationInputValue >= 1 && durationInputValue <= 60;
  const isFormValid =
    (!!taskInputValue.trim().length || !!taskInputSelectedOption) && isValidDuration;
  const taskInputId = "task-input";
  const durationInputId = "duration-input";

  const noOptionsMessage = () => <p>Sem tarefas com esse nome</p>;

  const handleDurationInputIncrement = () =>
    setDurationInputValue((prevState) => (prevState < 60 ? prevState + 1 : prevState));

  const handleDurationInputDecrement = () =>
    setDurationInputValue((prevState) => (prevState > 0 ? prevState - 1 : prevState));

  const resetFormFields = () => {
    setTaskInputValue("");
    setTaskInputSelectedOption(null);
    setDurationInputValue(0);
  };

  const handleCompleteCycle = () => {
    resetFormFields();
    updateInProgressCycleStatus(CycleStatusEnum.Completed);
  };

  const handleInterruptCycle = () => {
    resetFormFields();
    updateInProgressCycleStatus(CycleStatusEnum.Interrupted);
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    const taskTitle = taskInputValue.trim();
    const hasTaskTitle = !!taskTitle.length;
    const hasSelectedOption = !!taskInputSelectedOption;
    let taskId: number | undefined;

    if (hasTaskTitle) {
      const existingTask = tasks.find((task) => task.title === taskTitle);

      if (existingTask) {
        taskId = existingTask.id;
      } else {
        taskId = createNewTask(taskTitle);
      }
    } else if (hasSelectedOption) {
      taskId = tasks.find((task) => task.id === Number(taskInputSelectedOption.value))?.id;
    }

    if (taskId === undefined) {
      return alert("Algo deu errado ao definir uma tarefa para o ciclo.");
    } else if (!durationInputValue) {
      return alert("Algo deu errado ao definir a duração do ciclo.");
    }

    createNewCycle({ taskId, duration: durationInputValue });
  };

  return (
    <HomeContainer onSubmit={handleSubmit}>
      <InputContainer>
        <InputLabel htmlFor={taskInputId}>Vou trabalhar em</InputLabel>
        <TaskInput
          options={options}
          inputId={taskInputId}
          inputValue={taskInputValue}
          onInputChange={(newValue, { action }) => {
            if (action !== "input-blur" && action !== "menu-close") {
              setTaskInputValue(newValue);
            }
          }}
          value={taskInputSelectedOption}
          onChange={(optionSelected) => {
            setTaskInputSelectedOption(optionSelected as Option);
          }}
          noOptionsMessage={noOptionsMessage}
          placeholder={"Dê um nome para o seu projeto"}
          isClearable
          required={!taskInputValue.length && !taskInputSelectedOption}
          isDisabled={hasCycleInProgress}
        />

        <InputLabel htmlFor={durationInputId}>durante</InputLabel>
        <DurationInputContainer>
          <DurationInputActionItem onClick={handleDurationInputDecrement}>
            <MinusIcon />
          </DurationInputActionItem>

          <DurationInput
            id={durationInputId}
            value={durationInputValue || ""}
            onChange={({ target }) => {
              const newValue = Number(target.value);

              if (newValue >= 0 && newValue <= 60) {
                setDurationInputValue(Number(target.value));
              }
            }}
            placeholder={"00"}
            min={1}
            max={60}
            required
            disabled={hasCycleInProgress}
          />

          <DurationInputActionItem onClick={handleDurationInputIncrement}>
            <PlusIcon />
          </DurationInputActionItem>
        </DurationInputContainer>

        <InputLabel>minuto(s).</InputLabel>
      </InputContainer>

      <Countdown onCompleteCountdown={handleCompleteCycle} />

      {hasCycleInProgress ? (
        <Button
          key={"interruptCycleButton"}
          variant={"danger"}
          type={"button"}
          onClick={handleInterruptCycle}
        />
      ) : (
        <Button
          key={"newCycleButton"}
          variant={"success"}
          type={"submit"}
          disabled={!isFormValid}
        />
      )}
    </HomeContainer>
  );
};
