import { ArrayNotEmpty, IsArray, IsDateString, IsMilitaryTime, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class UpdateSongsDTO {
    @IsOptional()
    @IsString()
    readonly title: string;

    @IsOptional()
    @IsArray()
    @IsString({each: true})
    readonly artists: string[];

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
