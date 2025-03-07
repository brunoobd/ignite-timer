import styled, { css } from "styled-components";

export const CountdownContainer = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
`;

const CountdownSpanBase = styled.span`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.MONO}, monospace;
    font-weight: ${theme.FONT_WEIGHT.BOLD};
    font-size: ${theme.FONT_SIZE.XXLG};
  `}
`;

export const CountdownNumber = styled(CountdownSpanBase)`
  padding: 0 1rem;

  background-color: ${({ theme }) => theme.COLORS.GRAY_700};

  border-radius: 8px;
`;

export const CountdownSeparator = styled(CountdownSpanBase)`
  width: 4rem;

  display: flex;
  justify-content: center;

  color: ${({ theme }) => theme.COLORS.GREEN_500};
`;
