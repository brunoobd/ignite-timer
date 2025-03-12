import { Button, Countdown } from "@components";

import { HomeContainer, InputContainer, InputLabel, TaskInput, DurationInput } from "./styles";
import { FormEvent, useState } from "react";
import { Cycle, CycleStatus, Task } from "@models";
import { getNextId } from "@utils";

type Option = {
  label: string;
  value: string;
};

type TaskId = Task["id"];

export const Home = () => {
  const [taskInputValue, setTaskInputValue] = useState("");
  const [taskInputSelectedOption, setTaskInputSelectedOption] = useState<Option | null>(null);
  const [durationInputValue, setDurationInputValue] = useState<number>(0);
  const [tasks, setTasks] = useState<Task[]>([
    { id: 1, title: "Estudar React" },
    { id: 2, title: "Revisar código" },
    { id: 3, title: "Implementar API" },
    { id: 4, title: "Debugar erro" },
    { id: 5, title: "Refatorar componente" },
    { id: 6, title: "Testar integração" },
    { id: 7, title: "Otimizar performance" },
  ]);
  const [cycles, setCycles] = useState<Cycle[]>([]);
  const options = tasks.map(({ id, title }) => ({
    label: title,
    value: String(id),
  }));
  const cycleInProgress = cycles.find((cycle) => cycle.status === "inProgress");
  const hasCycleInProgress = !!cycleInProgress;
  const isValidDuration = durationInputValue && durationInputValue >= 1 && durationInputValue <= 60;
  const isFormValid =
    (!!taskInputValue.trim().length || !!taskInputSelectedOption) && isValidDuration;
  const taskInputId = "task-input";
  const durationInputId = "duration-input";

  const noOptionsMessage = () => <p>Sem tarefas com esse nome</p>;

  const resetFormFields = () => {
    setTaskInputValue("");
    setTaskInputSelectedOption(null);
    setDurationInputValue(0);
  };

  const updateCycleStatus = (status: CycleStatus) => {
    if (hasCycleInProgress) {
      resetFormFields();

      setCycles((prevState) =>
        prevState.map(
          (cycle): Cycle => (cycle.status === "inProgress" ? { ...cycle, status } : cycle)
        )
      );
    }
  };

  const handleCompleteCycle = () => updateCycleStatus("completed");

  const handleInterruptCycle = () => updateCycleStatus("interrupted");

  const handleCreateNewCycle = (taskId: TaskId, duration: number) => {
    const newCycleId = getNextId<Cycle>(cycles);

    setCycles((prevState) => [
      ...prevState,
      { id: newCycleId, taskId, duration, startDate: new Date(), status: "inProgress" },
    ]);
  };

  const handleCreateNewTask = (taskTitle: string): TaskId => {
    const newTaskId = getNextId<Task>(tasks);

    setTasks((prevState) => [...prevState, { id: newTaskId, title: taskTitle }]);

    return newTaskId;
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    const taskTitle = taskInputValue.trim();
    const hasTaskTitle = !!taskTitle.length;
    const hasSelectedOption = !!taskInputSelectedOption;
    let taskId: number | undefined;

    if (hasTaskTitle) {
      taskId = handleCreateNewTask(taskTitle);
    } else if (hasSelectedOption) {
      taskId = tasks.find((task) => task.id === Number(taskInputSelectedOption.value))?.id;
    }

    if (!taskId) {
      return alert("Algo deu errado ao definir uma tarefa para o ciclo.");
    } else if (!durationInputValue) {
      return alert("Algo deu errado ao definir a duração do ciclo.");
    }

    handleCreateNewCycle(taskId, durationInputValue);
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
        <DurationInput
          id={durationInputId}
          value={durationInputValue}
          onChange={({ target }) => setDurationInputValue(Number(target.value))}
          placeholder={"00"}
          min={1}
          max={60}
          required
          disabled={hasCycleInProgress}
        />

        <InputLabel>minutos.</InputLabel>
      </InputContainer>

      <Countdown cycleInProgress={cycleInProgress} onCompleteCountdown={handleCompleteCycle} />

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
