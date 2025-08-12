import { IsString,IsNotEmpty} from "class-validator";

export class CreateModeloDto {
    @IsString()
    @IsNotEmpty()
    readonly nombre: string
}
