import { useState } from "react";

import { Cycle } from "@models";

import {
  HistoryContainer,
  Table,
  TableBody,
  TableBodyCell,
  TableBodyRow,
  TableContainer,
  TableHeader,
  TableHeaderCell,
  Title,
} from "./styles";
import { CycleStatus } from "@components";

export const History = () => {
  const [cycles] = useState<Cycle[]>([
    {
      id: 1,
      task: { id: 1, title: "Estudar React" },
      duration: 25,
      startDate: new Date("2025-03-07T10:00:00"),
      status: "completed",
    },
    {
      id: 2,
      task: { id: 2, title: "Trabalhar no Design System" },
      duration: 45,
      startDate: new Date("2025-03-07T11:00:00"),
      status: "inProgress",
    },
    {
      id: 3,
      task: { id: 3, title: "Fazer pausa para o café" },
      duration: 10,
      startDate: new Date("2025-03-07T12:00:00"),
      status: "interrupted",
    },
    {
      id: 4,
      task: { id: 4, title: "Revisar código do projeto" },
      duration: 30,
      startDate: new Date("2025-03-07T13:00:00"),
      status: "completed",
    },
    {
      id: 5,
      task: { id: 5, title: "Escrever documentação" },
      duration: 40,
      startDate: new Date("2025-03-07T14:00:00"),
      status: "inProgress",
    },
    {
      id: 6,
      task: { id: 6, title: "Planejar próxima sprint" },
      duration: 35,
      startDate: new Date("2025-03-07T15:00:00"),
      status: "interrupted",
    },
  ]);

  return (
    <HistoryContainer>
      <Title>Meu histórico</Title>

      <TableContainer>
        <Table>
          <TableHeader>
            <TableHeaderCell>Tarefa</TableHeaderCell>
            <TableHeaderCell>Duração</TableHeaderCell>
            <TableHeaderCell>Início</TableHeaderCell>
            <TableHeaderCell>Status</TableHeaderCell>
          </TableHeader>

          <TableBody>
            {cycles.map(({ id, task, duration, startDate, status }) => (
              <TableBodyRow key={id}>
                <TableBodyCell>{task.title}</TableBodyCell>
                <TableBodyCell>{duration} minutos</TableBodyCell>
                <TableBodyCell>{startDate.toISOString()}</TableBodyCell>
                <TableBodyCell>
                  <CycleStatus status={status} />
                </TableBodyCell>
              </TableBodyRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </HistoryContainer>
  );
};
