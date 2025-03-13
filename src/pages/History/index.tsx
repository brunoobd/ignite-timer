import {
  HistoryContainer,
  Table,
  TableBody,
  TableBodyCell,
  TableBodyRow,
  TableContainer,
  TableHeader,
  TableHeaderRow,
  TableHeaderCell,
  Title,
} from "./styles";
import { CycleStatus } from "@components";
import { useCycles, useTasks } from "@hooks";

export const History = () => {
  const { cycles } = useCycles();
  const { getTaskById } = useTasks();

  return (
    <HistoryContainer>
      <Title>Meu histórico</Title>

      <TableContainer>
        <Table>
          <TableHeader>
            <TableHeaderRow>
              <TableHeaderCell>Tarefa</TableHeaderCell>
              <TableHeaderCell>Duração</TableHeaderCell>
              <TableHeaderCell>Início</TableHeaderCell>
              <TableHeaderCell>Status</TableHeaderCell>
            </TableHeaderRow>
          </TableHeader>

          <TableBody>
            {cycles.map(({ id, taskId, duration, startDate, status }) => {
              const task = getTaskById(taskId);

              return (
                <TableBodyRow key={id}>
                  <TableBodyCell>{task?.title}</TableBodyCell>
                  <TableBodyCell>{duration} minutos</TableBodyCell>
                  <TableBodyCell>{startDate.toISOString()}</TableBodyCell>
                  <TableBodyCell>
                    <CycleStatus status={status} />
                  </TableBodyCell>
                </TableBodyRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </HistoryContainer>
  );
};
