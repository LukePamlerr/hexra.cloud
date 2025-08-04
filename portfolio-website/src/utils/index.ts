export const fetchTools = async () => {
    const response = await fetch('/api/tools');
    if (!response.ok) {
        throw new Error('Failed to fetch tools');
    }
    return response.json();
};

export const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
};

export const generateSlug = (text: string) => {
    return text.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '').replace(/--+/g, '-');
};