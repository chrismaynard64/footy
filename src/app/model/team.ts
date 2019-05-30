import { NumberSymbol } from '@angular/common';

export interface Team {
    id: number;
    name: string;
    picurl: string;
}
export interface Player {
    id: number;
    fname: string;
    lname: string;
    age: number;
    height: string;
    caps: number;
    goal: number;
    picurl: string;
    club: string;
    team: string;
    dob: Date;
}