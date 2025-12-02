import { IsNotEmpty, IsString, MaxLength, MinLength, IsEmail,  } from "class-validator";
export class CreateUserDto{
    @IsString()
    @MinLength(5)
    @MaxLength(30)
    @IsNotEmpty()
    readonly username: string;

    @IsEmail()
    @IsNotEmpty()
    readonly email: string;

    @IsString()
    @MinLength(6)
    @IsNotEmpty()
    readonly password: string;


}