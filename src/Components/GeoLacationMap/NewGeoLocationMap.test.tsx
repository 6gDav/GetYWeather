import { render, waitFor } from '@testing-library/react';
import { describe, it, vi, beforeEach, afterEach, expect } from 'vitest';
import axios from 'axios';
import * as L from 'leaflet';
import NewGeoLocationMap from './NewGeoLocationMap';

vi.mock('axios');
vi.mock('leaflet', async () => {
    const actual = await vi.importActual<typeof import('leaflet')>('leaflet');
    return {
        ...actual,
        map: vi.fn(() => ({
            setView: vi.fn(),
            eachLayer: vi.fn(),
            addLayer: vi.fn(),
        })),
        tileLayer: vi.fn(() => ({ addTo: vi.fn() })),
        marker: vi.fn(() => ({
            addTo: vi.fn(() => ({
                openPopup: vi.fn(),
            })),
            setLatLng: vi.fn(),
        })),
        LatLng: vi.fn((lat, lon) => ({ lat, lon })),
    };
});

// Dummy Infos.TownName import
vi.mock('../UserDate/UserDate', () => ({
    default: {
        TownName: 'Budapest',
    },
}));

describe('NewGeoLocationMap', () => {
    const mockedAxios = axios as jest.Mocked<typeof axios>;

    beforeEach(() => {
        vi.clearAllMocks();
    });

    it('should render the map container', async () => {
        mockedAxios.get.mockResolvedValueOnce({
            data: [{ lat: 47.4979, lon: 19.0402 }],
        });

        const { container } = render(<NewGeoLocationMap />);
        const mapDiv = container.querySelector('#map');
        expect(mapDiv).toBeInTheDocument();

        await waitFor(() => {
            expect(axios.get).toHaveBeenCalledWith(
                'https://nominatim.openstreetmap.org/search',
                expect.objectContaining({
                    params: expect.objectContaining({
                        q: 'Budapest',
                    }),
                })
            );
        });


    });

    it('should fall back to London if no town is provided', async () => {
        vi.mocked(await import('../UserDate/UserDate')).default.TownName = '';

        mockedAxios.get.mockResolvedValueOnce({
            data: [{ lat: 51.5074, lon: -0.1278 }],
        });

        render(<NewGeoLocationMap />);
        await waitFor(() => {
            expect(axios.get).toHaveBeenCalledWith(
                'https://nominatim.openstreetmap.org/search',
                expect.objectContaining({
                    params: expect.objectContaining({
                        q: 'London',
                    }),
                })
            );
        });
    });
});
