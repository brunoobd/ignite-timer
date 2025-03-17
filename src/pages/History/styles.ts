import { RocketLaunch } from "@phosphor-icons/react";
import styled, { css } from "styled-components";

export const HistoryContainer = styled.div`
  width: 100%;
  max-width: 62.5rem;
  height: 100%;
  padding: 0 2rem 4.375rem 2rem;

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
  height: 100%;
  max-height: 28.75rem;
  padding-right: 10px;
  padding-bottom: 10px;

  overflow: auto;

  ${({ theme }) => css`
    &::-webkit-scrollbar {
      width: 5px;
    }

    &::-webkit-scrollbar-track {
      background: transparent;
    }

    &::-webkit-scrollbar-thumb {
      background: ${theme.COLORS.GRAY_600};
      border-radius: 100px;
    }
  `}
`;

export const Table = styled.table`
  width: 100%;
  min-width: 54.125rem;

  border-collapse: collapse;
  border-radius: 8px;
`;

export const TableHeader = styled.thead`
  text-align: left;

  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM};

    background-color: ${theme.COLORS.GRAY_600};
  `}
`;

export const TableHeaderRow = styled.tr``;

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
  `};
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

export const TableEmpty = styled.div`
  width: 100%;
  min-width: 54.125rem;
  height: 100%;

  border-collapse: collapse;
  border-radius: 8px;

  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
`;

export const TableEmptyHeader = styled.div`
  width: 100%;

  display: flex;
  align-items: center;

  background-color: ${({ theme }) => theme.COLORS.GRAY_600};

  border-radius: 8px 8px 0 0;
`;

export const TableEmptyHeaderCell = styled.div`
  width: 16.5%;
  padding: 1rem 0;

  font-weight: ${({ theme }) => theme.FONT_WEIGHT.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.SM};

  &:first-child {
    width: 50%;
    padding-left: 1.5rem;
  }

  &:last-child {
    padding-right: 1.5rem;
  }
`;

export const TableEmptyContent = styled.div`
  width: 100%;
  height: calc(100% - 3.125rem);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const TableEmptyContentCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.875rem;
`;

export const TableEmptyTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.3125rem;
`;

export const TableEmptyTitle = styled.p`
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.BOLD};
`;

export const TableEmptyDescription = styled.p``;

export const RocketLaunchIcon = styled(RocketLaunch).attrs(({ theme }) => ({
  size: 75,
  color: theme.COLORS.GRAY_100,
}))``;
