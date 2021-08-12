class Theme {
    light: string;
    dark: string;

    constructor(light: string, dark: string) {
        this.light = light;
        this.dark = dark;
    }

    get() {
        return `${this.light} ${this.dark}`;
    }
}

export const background = {
    primary: new Theme('bg-gray-300', 'dark:bg-gray-900'),
    secondary: new Theme('bg-gray-200', 'dark:bg-gray-800'),
    accent: new Theme('bg-pink-500 text-white', 'dark:bg-pink-600'),
    hoverable: new Theme('hover:bg-pink-500 hover:text-white', ''),
};

export const text = {
    primary: new Theme('text-gray-800', 'dark:text-gray-200')
}

export const transition = {
    default: `transition duration-1000`
}