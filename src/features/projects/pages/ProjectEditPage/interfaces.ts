import { ReactElement } from "react";
import { UseFormRegister } from "react-hook-form";
import { ProjectDataForm } from "./ProjectEditPage";

export interface ProjetoTabProps {
  register: UseFormRegister<ProjectDataForm>;
  path: string;
}

export interface TabItem {
  label: string,
  element: ReactElement<ProjetoTabProps>,
}