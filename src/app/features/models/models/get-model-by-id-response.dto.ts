export interface GetModelByIdResponse{
    id: number,
    name: string,
    brandId: number,
    fuelId: number,
    transmissionId: number,
    createdDate: Date | string,
    fuelName: string,
    transmissionName: string,
    brandName: string
}