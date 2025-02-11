import { IsInt, IsNumber, IsString } from "class-validator"


export class CreateSaleItemDto {

    @IsInt()
    saleId:number
    
    @IsInt()
    productId:number
    
    @IsString()
    productName:string
    
    @IsInt()
    quantity:number
   
    @IsNumber({maxDecimalPlaces:2})
    price:number

    @IsNumber({maxDecimalPlaces:2})
    discount:number


}