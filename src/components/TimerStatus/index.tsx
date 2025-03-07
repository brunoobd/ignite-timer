import { TimerStatus as TimerStatusType } from "@models";
import { StatusContainer, StatusIndicator, StatusTitle } from "./style";
import { useTheme } from "styled-components";

type Props = {
  status: TimerStatusType;
};

export const TimerStatus = ({ status }: Props) => {
  const { YELLOW_500, GREEN_300, RED_500 } = useTheme().COLORS;
  const statusIndicatorBackgroundColor: Record<TimerStatusType, string> = {
    inProgress: YELLOW_500,
    completed: GREEN_300,
    interrupted: RED_500,
  };

  return (
    <StatusContainer>
      <StatusIndicator
        backgroundColor={statusIndicatorBackgroundColor[status]}
      />
      <StatusTitle></StatusTitle>
    </StatusContainer>
  );
};
