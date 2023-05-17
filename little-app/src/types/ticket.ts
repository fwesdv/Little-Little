import dayjs from "dayjs";

export interface TicketType {
    Name: String,
    Price: Number ,
    Id: String,
    Email: String,
    Date: Date | string;
    Phone: String,
    Type: String,
    Amount: String,
}

export interface ticket {
    Name: String,
    Email: String,
    Phone: String,
    Type: String,
    Amount: String,
    SelectedDate: Date| String;
}