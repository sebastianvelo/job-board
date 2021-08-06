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
    primary: new Theme('bg-gray-200', 'dark:bg-gray-800'),
    hoverable: new Theme('hover:bg-gray-300', 'dark:hover:bg-gray-900'),
};

export const text = {
    primary: new Theme('text-gray-800', 'dark:text-gray-200')
}