export interface GetRentalsByUserId{
    id: number,
    startDate: string,
    endDate: string,
    totalPrice: number,
    carId: number,
    carPlate: string,
    carColor: string,
    carDailyPrice: number,
    modelId: number,
    modelName: string,
    transmissionId: number,
    transmissionName: string
    fuelId: number,
    fuelName: string
    carImagePath: string,
    brandName: string
}