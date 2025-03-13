import { useContext } from "react";
import { TasksContext } from "@contexts";

export const useTasks = () => useContext(TasksContext);
