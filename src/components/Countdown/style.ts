import styled, { css } from "styled-components";

export const CountdownContainer = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;

  @media (max-width: 800px) {
    justify-content: center;
  }
`;

const CountdownSpanBase = styled.span`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.MONO}, monospace;
    font-weight: ${theme.FONT_WEIGHT.BOLD};
    font-size: ${theme.FONT_SIZE.XXXXLG};

    @media (max-width: 800px) {
      font-size: ${theme.FONT_SIZE.XXXLG};
    }

    @media (max-width: 500px) {
      font-size: ${theme.FONT_SIZE.XXLG};
    }

    @media (max-width: 424px) {
      font-size: ${theme.FONT_SIZE.XLG};
    }
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

  @media (max-width: 500px) {
    width: 1rem;
  }
`;
