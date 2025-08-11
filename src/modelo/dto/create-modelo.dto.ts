import { IsString,IsNotEmpty,IsBoolean } from "class-validator";

export class CreateModeloDto {
    @IsBoolean()
    @IsNotEmpty()
    readonly activo: boolean

    @IsString()
    @IsNotEmpty()
    readonly nombre: string
}
