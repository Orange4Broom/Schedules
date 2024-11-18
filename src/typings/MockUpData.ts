export interface MockUpData {
  sections: Section[];
}

export interface Section {
  title: string;
  type: 'radio' | 'text' | 'number';
  name: string;
  compulsory: boolean;
  options: Option[];
}

export interface Option {
  value: number;
  type?: 'play' | 'win';
  label: string;
}
