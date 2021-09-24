export interface User{
    id:number,
    name:string,
    usename:string,
    email:string,
    address:Address,
    phone:string,
    website:string,
    company:string
}
export interface Address{
    street:string,
    suit:string,
    city:string,
    zipcode:string,
    geo:GeoLocation,
}

export interface GeoLocation{
    lat:string,
    lng:string,
}