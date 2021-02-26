export interface UserData {
    fname?: string;
    lname?: string;
    location?: {
        lat: number,
        long: number
    };
    email?: string;
    token?: string;
    password?: string;
    phone?: string;
    uid?: string;
    profileimg?: string;
    noti?: {
        break: boolean,
        product: boolean,
        message: boolean,
        range: number,
        start: string,
        end: string,
        type: string
    };
    favorite?: {
        beaches: string,
        products: string,
        discussions: string
    };
    review?: number;
    adminrole?: number;
}

export interface Message {
    uid: string;
    name: string;
    photo: string;
    content: string;
    time: Object;
    contentimg: string;
    isRead?: boolean;
    boardName?: string;
    location?: {
        lat: any,
        long: any
    };
}

export interface SurfBoard {
    title: string;
    description: string;
    condition: number;
    price?: number;
    location: {
        lat: number,
        long: number,
        name: string,
        state: string,
        country: string
    };
    imgs?: string[];
    id: string;
    ownerid: string;
    ownername: string;
    createdat?: any;
}
