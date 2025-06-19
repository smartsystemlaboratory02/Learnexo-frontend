export type ChildrenProps = {
    children: React.ReactNode
}

export type Option = {
    value: string,
    label: string
}

export type BaseQuestion = {
  index: number;
  question: string;
  options: Option[];
};