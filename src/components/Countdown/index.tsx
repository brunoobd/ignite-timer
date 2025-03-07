import {
  CountdownContainer,
  CountdownNumber,
  CountdownSeparator,
} from "./style";

export const Countdown = () => (
  <CountdownContainer>
    <CountdownNumber>0</CountdownNumber>
    <CountdownNumber>0</CountdownNumber>

    <CountdownSeparator>:</CountdownSeparator>

    <CountdownNumber>0</CountdownNumber>
    <CountdownNumber>0</CountdownNumber>
  </CountdownContainer>
);
