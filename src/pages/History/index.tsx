import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";

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
  RocketLaunchIcon,
  TableEmpty,
  TableEmptyTitle,
  TableEmptyDescription,
  TableEmptyTextContainer,
  TableEmptyHeader,
  TableEmptyHeaderCell,
  TableEmptyContent,
  TableEmptyContentCard,
} from "./styles";

import { CycleStatus } from "@components";

import { useCycles, useTasks } from "@hooks";

export const History = () => {
  const { cycles } = useCycles();
  const { getTaskById } = useTasks();
  const ordenatedCycles = [...cycles].reverse();

  return (
    <HistoryContainer>
      <Title>Meu histórico</Title>

      <TableContainer>
        {cycles.length ? (
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
              {ordenatedCycles.map(({ id, taskId, duration, startDate, status }) => {
                const task = getTaskById(taskId);
                const startDateDistanceToNow = formatDistanceToNow(startDate, {
                  addSuffix: true,
                  locale: ptBR,
                });
                const startDateFormatted = `${startDateDistanceToNow[0].toUpperCase()}${startDateDistanceToNow.substring(
                  1
                )}`;

                return (
                  <TableBodyRow key={id}>
                    <TableBodyCell>{task?.title}</TableBodyCell>
                    <TableBodyCell>
                      {duration === 1 ? `${duration} minuto` : `${duration} minutos`}
                    </TableBodyCell>
                    <TableBodyCell>{startDateFormatted}</TableBodyCell>
                    <TableBodyCell>
                      <CycleStatus status={status} />
                    </TableBodyCell>
                  </TableBodyRow>
                );
              })}
            </TableBody>
          </Table>
        ) : (
          <TableEmpty>
            <TableEmptyHeader>
              <TableEmptyHeaderCell>Tarefa</TableEmptyHeaderCell>
              <TableEmptyHeaderCell>Duração</TableEmptyHeaderCell>
              <TableEmptyHeaderCell>Início</TableEmptyHeaderCell>
              <TableEmptyHeaderCell>Status</TableEmptyHeaderCell>
            </TableEmptyHeader>

            <TableEmptyContent>
              <TableEmptyContentCard>
                <RocketLaunchIcon />

                <TableEmptyTextContainer>
                  <TableEmptyTitle>Parece que ainda não há ciclos por aqui...</TableEmptyTitle>
                  <TableEmptyDescription>Que tal iniciar um novo desafio?</TableEmptyDescription>
                </TableEmptyTextContainer>
              </TableEmptyContentCard>
            </TableEmptyContent>
          </TableEmpty>
        )}
      </TableContainer>
    </HistoryContainer>
  );
};
