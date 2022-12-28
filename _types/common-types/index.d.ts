declare module 'common-types' {
  type Callback<Params = any[], Res = any> = (...params: Params) => Res;
}
