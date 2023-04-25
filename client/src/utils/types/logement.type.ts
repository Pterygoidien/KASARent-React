import { Host } from "./host.type";

export type Logement = {
    id: string;
    title: string;
    cover: string;
    pictures: string[];
    description: string;
    host: Host;
    rating: number;
    location: string;
    equipments: string[];
    tags: string[];
}