import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';

export class LoginUserDTO {
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @MinLength(8)
  password: string;

  id: string;
}
