export interface UpdatedUserResponse{
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    companyName: string;
    city: string;
    password: string;
    role: string;
    licenseId: number;
    LocalDateTime: Date | string;
}