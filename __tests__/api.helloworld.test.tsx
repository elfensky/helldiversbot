import { describe, it, expect } from 'vitest';
import { GET } from '@/app/api/helloworld/route';

describe('GET /api/hello', () => {
    it('should return a 200 status and a message', async () => {
        const request = new Request('http://localhost/api/hello');
        const response = await GET(request);

        expect(response.status).toBe(200);

        const data = await response.json();
        expect(data).toEqual({ message: 'Hello, world!' });
    });
});
