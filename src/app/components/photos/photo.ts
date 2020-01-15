import { Image } from './image';

export class Photo {
    id: string;
    name: string;
    file: string;
    image: Image;

    constructor(name, file) {
        this.name = name;
        this.file = file;
    }
}