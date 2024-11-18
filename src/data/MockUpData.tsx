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
          value: 1,
          label: '2 vítězné sety',
        },
        {
          value: 0,
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
          type: 'play',
          label:
            'Na 2 hrané sety do 15 (o dva), při remíze a shodném počtu bodů, jeden zlatý míč.',
        },
        {
          value: 11,
          type: 'win',
          label:
            'Na 2 vítězné sety do 15 (o dva), 3. set do 10 (konec při 10), Zápas o umístění dle času, síly a chuti.',
        },
        {
          value: 12,
          type: 'play',
          label:
            'Na 2 hrané sety do 21 (o dva), při remíze a shodném počtu bodů, jeden zlatý míč.',
        },
        {
          value: 13,
          type: 'win',
          label:
            'Na 2 vítězné sety do 21 (o dva), 3. set do 15 (konec při 15), Zápas o umístění dle času, síly a chuti.',
        },
        {
          value: 14,
          type: 'play',
          label:
            'Na 2 hrané sety do 25 (o dva), při remíze a shodném počtu bodů, jeden zlatý míč.',
        },
        {
          value: 15,
          type: 'win',
          label:
            'Na 2 vítězné sety do 25 (o dva), 3. set do 15 (konec při 15), Zápas o umístění dle času, síly a chuti.',
        },
      ],
    },
  ],
};
