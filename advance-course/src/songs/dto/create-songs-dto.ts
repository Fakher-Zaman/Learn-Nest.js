import { ArrayNotEmpty, IsArray, IsDateString, IsMilitaryTime, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CreateSongsDTO {
    @IsString()
    @IsNotEmpty()
    readonly title: string;

    @IsNotEmpty()
    @IsArray()
    @ArrayNotEmpty()
    @IsString({each: true})
    readonly artists: string[];

    @IsNotEmpty()
    @IsDateString()
    readonly releasedDate: Date;

    @IsMilitaryTime()
    @IsNotEmpty()
    readonly duration: Date;

    @IsString()
    @IsNotEmpty()
    readonly lyrics: string;
}
