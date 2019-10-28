import axios from 'axios';

export interface NavbarItem {
    label: string;
    href: string;
}

export interface PanjsData {
    navbarItems: NavbarItem[];
    duration: string;
    detail: string;
    condition: string;
}

export async function getPanjsData(): Promise<PanjsData> {
    const response = await axios.get<PanjsData>('https://panjs.com/ywc.json');
    return response.data;
}