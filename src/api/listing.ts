import api from './axios';
import { Auctions } from "../components/ProductCard";

export async function fetchAllListings(): Promise<Auctions[]> {
    const response = await api.get('/auctions/');
    return response.data;
}