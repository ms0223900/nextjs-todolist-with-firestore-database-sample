type UserDataPayload = { userId: string; data: any };
const setUserDataAction = (payload: UserDataPayload) => ({
  type: 'SET_USER_DATA',
  payload,
});

const resetUserDataAction = () => ({
  type: 'RESET_USER_DATA',
});

type CartDataPayload = { productId: string };
const setCartDataAction = (payload: CartDataPayload) => ({
  type: 'SET_CART_DATA',
  payload,
});

// 泛型
// type Action<T, P> = {
//   type: T
//   payload: P
// }
// type ActionWithoutPayload<T> = {
//   type: T
// }
type Action<T, P = null> = P extends {} ? { type: T; payload: P } : { type: T };

type SetUserDataAction = Action<'SET_USER_DATA', UserDataPayload>;
type SetCartDataAction = Action<'SET_CART_DATA', CartDataPayload>;
type ResetUserDataAction = Action<'RESET_USER_DATA'>;

export type Actions =
  | SetUserDataAction
  | SetCartDataAction
  | ResetUserDataAction;

//...
