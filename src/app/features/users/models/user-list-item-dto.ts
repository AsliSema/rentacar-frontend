export interface UserListItemDto {
    id: number,
    firstName: string,
    lastName: string,
    companyName: string,
    email: string,
    city: string,
    licenseId: number;
    licenseNumber: string;
    issueDate: string;
    licenseClass: string;
    phoneNumber: string,
    identityNumber: string,
    carId: number,
    createdDate: Date | string,
}