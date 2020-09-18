export interface Person {
    id ?: number;
    firstName: string;
    lastName: string;
    email ?: string;
    password ?: string;
    roles ?: [{
        id: number,
        name: string
    }
    ];
}
