import styled, { css } from "styled-components";

export const HistoryContainer = styled.div`
  width: 100%;
  padding: 0 6rem 3rem 6rem;

  display: flex;
  flex-direction: column;
  align-items: start;

  gap: 2rem;
`;

export const Title = styled.h1`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.XLG}
    font-weight: ${theme.FONT_WEIGHT.BOLD};
  `}
`;

export const TableContainer = styled.div`
  width: 100%;

  overflow: auto;
`;

export const Table = styled.table`
  width: 100%;
  min-width: 600px;
  border-collapse: collapse;
`;

export const TableHeader = styled.tr`
  text-align: left;

  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM};

    background-color: ${theme.COLORS.GRAY_600};
  `}
`;

export const TableHeaderCell = styled.th`
  padding: 1rem 0;

  &:first-child {
    width: 50%;
    padding-left: 1.5rem;

    border-top-left-radius: 8px;
  }

  &:last-child {
    padding-right: 1.5rem;
    border-top-right-radius: 8px;
  }
`;

export const TableBody = styled.tbody`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM};

    color: ${theme.COLORS.GRAY_300};
  `}
`;

export const TableBodyRow = styled.tr`
  border-top: 4px solid ${({ theme }) => theme.COLORS.GRAY_800};
`;

export const TableBodyCell = styled.td`
  padding: 1rem 0;

  background-color: ${({ theme }) => theme.COLORS.GRAY_700};

  border: none;

  &:first-child {
    padding-left: 1.5rem;
  }

  &:last-child {
    padding-right: 1.5rem;
  }
`;
