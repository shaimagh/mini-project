export class users {
  public id: number;
  public gender: string;
  public f_name: string;
  public l_name: string;
  public email: String;
  public password: string;
  public datenaiss: Date;
  constructor(
    id: number,
    gender: string,
    f_name: string,
    l_name: string,
    email: String,
    password: string,
    datenaiss: Date
  ) {
    this.id = id;
    this.gender = gender;
    this.f_name = f_name;
    this.l_name = l_name;
    this.email = email;
    this.password = password;
    this.datenaiss = datenaiss;
  }
}
