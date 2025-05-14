import { ApiProperty } from '@nestjs/swagger';

export class CreateProductDto {
  @ApiProperty({ example: 'olma', description: 'olma name' })
  name: string;
}
