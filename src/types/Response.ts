export type UserResponse = {
    id: string;
    email: string;
    profile?: string;
    user_name?: string;
    first_name?: string;
    last_name?: string;
}

export type ProjectReponse = {
    id: string
    name: string;
    logo_url: string;
    banner_url: string;
    website_url: string;
    crypto_category: string;
    description: string;
    reason: string;
    category: string;
    contact: string;
    create_by: string;
    create_at: string;
}