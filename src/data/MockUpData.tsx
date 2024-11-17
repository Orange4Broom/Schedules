import { MockUpData as Data } from '@/typings/MockUpData';

export const MockUpData: Data = {
  sections: [
    {
      title: 'Vyber počet týmů',
      type: 'radio',
      name: 'teams',
      compulsory: true,
      options: [
        {
          value: 3,
          label: '3 týmy',
        },
        {
          value: 4,
          label: '4 týmy',
        },
        {
          value: 5,
          label: '5 týmů',
        },
        {
          value: 6,
          label: '6 týmů',
        },
        {
          value: 7,
          label: '7 týmů',
        },
      ],
    },
    {
      title: 'Vyber typ setů',
      type: 'radio',
      name: 'sets',
      compulsory: true,
      options: [
        {
          value: true,
          label: '2 vítězné sety',
        },
        {
          value: false,
          label: '2 hrané sety',
        },
      ],
    },
    {
      title: 'Vyber jak se bude hrát',
      type: 'radio',
      name: 'play',
      compulsory: false,
      options: [
        {
          value: 10,
          label:
            'Na 2 hrané sety do 15 (o dva), při remíze a shodném počtu bodů, jeden zlatý míč.',
        },
        {
          value: 11,
          label:
            'Na 2 vítězné sety do 15 (o dva), 3. set do 10 (konec při 10), Zápas o umístění dle času, síly a chuti.',
        },
      ],
    },
  ],
};
