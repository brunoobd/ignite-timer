import styled, { css } from "styled-components";

type StatusIndicatorProps = {
  $backgroundColor: string;
};

export const StatusContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.4375rem;
`;

export const StatusIndicator = styled.div<StatusIndicatorProps>`
  width: 8px;
  height: 8px;

  border-radius: 100%;

  background-color: ${({ $backgroundColor }) => $backgroundColor};
`;

export const StatusTitle = styled.p`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_300};
    font-size: ${theme.FONT_SIZE.SM};
  `}
`;
