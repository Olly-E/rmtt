/** @type {import('next').NextConfig} */
const nextConfig = {
    redirects: async () => {
        return [
            {
                source: '/',
                destination: '/time',
                permanent: true,
            },
        ];
    },
};

export default nextConfig;
