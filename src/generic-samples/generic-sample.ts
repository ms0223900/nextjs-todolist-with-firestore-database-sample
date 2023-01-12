// interface DataA {
//   id: string;
//   key: string;
//   value: string;
// }

// interface DataB {
//   id: string;
//   key: string;
//   value: number;
// }

// interface DataC {
//   id: string;
//   key: string;
//   value: string[];
// }

export interface GenericData<T> {
  id: string;
  key: string;
  value: T;
}
type DataA = GenericData<string>;
type DataB = GenericData<number>;
type DataC = GenericData<string[]>;

const dataA: DataA = {
  id: '',
  key: '',
  value: '123',
};
const dataB: DataB = {
  id: '',
  key: '',
  value: 123,
};
