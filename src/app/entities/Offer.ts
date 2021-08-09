interface Offer {
    id: string;
    title: string;
    salary: {
        min: number;
        max: number;
        currency: string;
    },
    location: string;
    seniority: string;
    contractor: {
        name: string;
        logo: string;
        employees: number;
    },
    tags: string[];
    date: string;
    description: string;
}

export default Offer;