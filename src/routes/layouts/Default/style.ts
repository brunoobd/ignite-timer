import styled from "styled-components";

export const DefaultLayoutContainer = styled.div`
  max-width: 70rem;
  max-height: 46.25rem;
  height: calc(100vh - 10rem);
  margin: 5rem auto;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  background-color: ${({ theme }) => theme.COLORS.GRAY_800};

  border-radius: 8px;
`;
