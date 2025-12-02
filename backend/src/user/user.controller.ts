import { Controller, Body, Req, Res, Post, HttpStatus, Param, Get } from '@nestjs/common';
import { CreateUserDto } from 'src/dto/create-user.dto';
import { UserService } from './user.service';
import { response } from 'express';
@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService){}
    @Post()
    async createUser(@Res() response, @Body() createUserDto: CreateUserDto){
        try {
            const newUser = await this.userService.createUser(createUserDto)
            return response.status(HttpStatus.CREATED).json({
                message: "Utworzono nowego użytkownika",

            })
        } catch (error) {
            return response.status(HttpStatus.BAD_REQUEST).json({
                message:"Error: Użytkownik nie został utworzony",
                error:"Bad request"
            })
        }
    }
    @Get()
    async getAllUsers(@Res() response){
        try {
            const users = this.userService.getAllUsers()
            return response.status(HttpStatus.OK).json({
                message:"Pobrano dane użytkowników",
                users
            })
        } catch (error) {
            return response.status(error.status).json(error.response);
        }
    }
}
