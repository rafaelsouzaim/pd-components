import { FC } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

export enum TipoAbertura {
  Otimizacao,
  Opcao2,
}

export enum Status {
  EmAndamento,
  Opcao2,
}

export interface ProjectDataForm {
  codigoProjeto: string,
  tipoAbertura: TipoAbertura,
  status: Status,
  usuarioVerificacao: string,
  dataAbertura: string,
  divisao: string,
  objetivoProjeto: string,
  definicaoProjeto: string,
  dataVerificacao: string,
}

interface ProjectEditFormProps {
  children: JSX.Element;
}

const ProjectEditForm: FC<ProjectEditFormProps> = ({ children }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm<ProjectDataForm>({
    defaultValues: {
      codigoProjeto: "TEX ABS",
      tipoAbertura: TipoAbertura.Otimizacao,
      status: Status.EmAndamento,
      dataAbertura: "2017-06-01",
      usuarioVerificacao: "Erika Guedes Santos",
      divisao: "MG2",
      definicaoProjeto: "Homologação dos novos anti-bloqueio em substituição aos materiais já homologados. Homologação dos novos anti-bloqueio em substituição aos materiais já homologados. Homologação dos novos anti-bloqueio em substituição aos materiais já homologados.",
      objetivoProjeto: "Aprovar aditivos contra tipos de anti-bloqueio em substituição aos materiais já homologados. Aprovar aditivos contra tipos de anti-bloqueio em substituição aos materiais já homologados. Aprovar aditivos contra tipos de anti-bloqueio em substituição aos materiais já homologados.",
      dataVerificacao: "2022-09-08",
    }
  });

  const onSubmit: SubmitHandler<ProjectDataForm> = data => console.log(data);

  return (<></>);
}

export default ProjectEditForm;