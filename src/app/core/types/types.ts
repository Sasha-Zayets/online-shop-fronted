export type ID = number;
export type CATEGORY_ID = ID;

export type ACCSESS_TOKEN = string;

export type DeleteRespose = {
  status: string;
};

export type Login = {
  email: string;
  password: string;
};

export type LoginResponse = {
  access_token: ACCSESS_TOKEN;
};
