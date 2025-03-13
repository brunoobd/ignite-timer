import { TasksContext } from "@contexts";
import { useContext } from "react";

export const useTasks = () => useContext(TasksContext);
