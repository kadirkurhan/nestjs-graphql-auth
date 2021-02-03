import { Request } from 'express';
import { UseGuards } from "@nestjs/common";
import { UsersService } from "../users/users.service"
import { User } from "../users/models/user";
import { AuthService } from "./auth.service";
import { LocalAuthGuard } from "./guards/local-auth.guard";
import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { CreateUserInput } from 'src/users/dto/input/create-user.input';

@Resolver(() => User)
export class AuthResolver {
    constructor(private readonly usersService: UsersService, private readonly authService: AuthService) { }


    @UseGuards(LocalAuthGuard)
    @Mutation(() => User))
    login(@Args('loginUserData') loginData: CreateUserInput): User {
        return this.authService.login(loginData);
    }

}