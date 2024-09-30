import { ArrayNotEmpty, IsArray, IsDateString, IsMilitaryTime, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class UpdateSongsDTO {
    @IsOptional()
    @IsString()
    readonly title: string;

    @IsOptional()
    @IsArray()
    @IsNumber({}, {each: true})
    readonly artists;

    @IsOptional()
    @IsDateString()
    readonly releasedDate: Date;

    @IsOptional()
    @IsMilitaryTime()
    readonly duration: Date;

    @IsOptional()
    @IsString()
    readonly lyrics: string;
}
