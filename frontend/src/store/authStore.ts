export let token: string | null = null;
export let user: any = null;

export const setAuth = (data: any) => {
  token = data.token;
  user = data.user;
};

export const getToken = () => token;
export const getUser = () => user;