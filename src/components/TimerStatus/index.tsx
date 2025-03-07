import { TimerStatus as TimerStatusType } from "@models";
import { StatusContainer, StatusIndicator, StatusTitle } from "./style";
import { useTheme } from "styled-components";

type Props = {
  status: TimerStatusType;
};

export const TimerStatus = ({ status }: Props) => {
  const { YELLOW_500, GREEN_300, RED_500 } = useTheme().COLORS;
  const statusIndicatorStyle: Record<
    TimerStatusType,
    { title: string; backgroundColor: string }
  > = {
    inProgress: {
      title: "Em andamento",
      backgroundColor: YELLOW_500,
    },
    completed: {
      title: "Concluído",
      backgroundColor: GREEN_300,
    },
    interrupted: {
      title: "Interrompido",
      backgroundColor: RED_500,
    },
  };

  return (
    <StatusContainer>
      <StatusIndicator
        backgroundColor={statusIndicatorStyle[status].backgroundColor}
      />
      <StatusTitle>{statusIndicatorStyle[status].title}</StatusTitle>
    </StatusContainer>
  );
};
