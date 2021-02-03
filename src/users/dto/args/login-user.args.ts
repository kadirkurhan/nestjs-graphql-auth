import { ArgsType, Field } from "@nestjs/graphql";
import { IsNotEmpty } from "class-validator";

@ArgsType()
export class LoginUserArgs {
    @Field()
    @IsNotEmpty()
    userId: string;
}