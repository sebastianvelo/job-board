import Offer from "app/entities/Offer";

const offers: Offer[] = [
    {
        id: `1000`,
        title: `Typescript Software Engineer`,
        salary: {
            min: 10000,
            max: 16400,
            currency: `USD`,
            paymentTime: `gross/month`,
            type: `Permanent`,
        },
        location: `London`,
        seniority: `Mid`,
        contractor: {
            name: `Microsoft`,
            logo: `https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/1024px-Microsoft_logo.svg.png`,
            employees: 1004,
        },
        tags: [`javascript`, `typescript`, `react`, `svelte`],
        date: `2021-07-01`,
        description: `Typescript is a new programming language that compiles to javascript. It is a superset of javascript that adds optional static typing, classes, and modules. Typescript is developed by Microsoft and is used by a number of large companies including Microsoft, Facebook, and Instagram.`,
    },
    {
        id: `2000`,
        title: `Python Software Engineer`,
        salary: {
            min: 9000,
            max: 18000,
            currency: `USD`,
            paymentTime: `gross/month`,
            type: `Permanent`,
        },
        location: `Amsterdam`,
        seniority: `Sr`,
        contractor: {
            name: `Facebook`,
            logo: `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAZlBMVEU7WZj///8sT5MlS5HT1uLj5Ovr7PE4VpYyU5UdRo8rTpOIlbc3V5dgdadVap+8w9Vyg6+zu9Brfqz5+fqqs8udp8Py8/ZKZJ1XbqJccqXAxtfb3edEXpqapMGOmrvg4up9i7IFPYu6gpP+AAAChklEQVR4nO3cC27iMBhFYSYPbIKBkPBqYYZ2/5tsq5lW1RBDolqyr3W+FfgoJD+YJLMZAAAAAAAAAAAAAAAAAAAPOeeMMW6Iib22AGxR2uPxdDqthjzFXt5PmWbW7qq67395HIyLvcafMGX37G37a65c6JrufD9PvNBenh/2SRc27WFEoG6hK/dj+oQLi+24QNVC14w5BZULF2OPoGphM/IclC203fhAzUIzz7yw+D0hULHQzKYEKhYWu8wLnX3wY0K+0P6ZFChYWFwzL3SraYF6hXbC1xnNwqbKvfAy6mfvN2o7Ue54r6baL9v/dbGXPJG5c6G5rkprzY3YS57ozjS8Wht7dSFY/7fuJ7WjNcw/LKpF7LWF4f/a/ZLFZ/ReYSaB/sKD1Rp7Xt5t0nkRe2mBeAvr7AvzP4YUyqBQH4X6KNRHoT4K9VGoZeh+2CarwvWA48ZTWL8uhpXJ7m64SXdc+NXJbuCEKqya2CU+oQq3yZ6goQp3yW6khipMdy88VOEq2T9sAhX2p9wLD5fYIV6BCutkh0WowqqMHeIVqHCT/THcJzssQhWmOw5DFbbJDotQhemOw0CFfboXmkCF83SHRaDCc/aFCY/DQIUJj8NAhcvsC7t0h0WgwmQ32mYf+8HT7nfu+6Fn8hO+lL7bbW5tfdnVcb1ef71IofuU8If0XdHceq19heXHOzC+XobxT8KfUZ/SW5jstuhEFOqjUB+F+ijUR6E+CvVRqI9CfRTqo1Afhfoo1EehPgr1UaiPQn0U6qNQH4X6KNRHoT4K9VGoj0J9FOqjUB+F+ijUR6G+0vfI3jmXQvOyHNYKPsQ1zNhhaT+GBwAAAAAAAAAAAAAAAACI4g0VHDIXNrZKGgAAAABJRU5ErkJggg==`,
            employees: 1004,
        },
        tags: [`python`, `machinelearning`, `django`],
        date: `2021-08-01`,
        description: `Typescript is a new programming language that compiles to javascript. It is a superset of javascript that adds optional static typing, classes, and modules. Typescript is developed by Microsoft and is used by a number of large companies including Microsoft, Facebook, and Instagram.`,
    },
    {
        id: `3000`,
        title: `Scala Developer`,
        salary: {
            min: 3400,
            max: 9000,
            currency: `USD`,
            paymentTime: `gross/month`,
            type: `Permanent`,
        },
        location: `Madrid`,
        seniority: `Jr`,
        contractor: {
            name: `Google`,
            logo: `https://e7.pngegg.com/pngimages/8/502/png-clipart-google-logo-google-logo-google-now-google-search-google-plus-search-engine-optimization-trademark.png`,
            employees: 300,
        },
        tags: [`scala`, `python`],
        date: `2021-01-01`,
        description: `Typescript is a new programming language that compiles to javascript. It is a superset of javascript that adds optional static typing, classes, and modules. Typescript is developed by Microsoft and is used by a number of large companies including Microsoft, Facebook, and Instagram.`,
    },
    {
        id: `4000`,
        title: `React Developer`,
        salary: {
            min: 5000,
            max: 8400,
            currency: `EUR`,
            paymentTime: `gross/month`,
            type: `Permanent`,
        },
        location: `Dublin`,
        seniority: `Mid`,
        contractor: {
            name: `Netflix`,
            logo: `https://luhnoticias.es/wp-content/uploads/netflix-3.png`,
            employees: 1004,
        },
        tags: [`react`, `typescript`, `javascript`, `express`],
        date: `2021-06-20`,
        description: `Typescript is a new programming language that compiles to javascript. It is a superset of javascript that adds optional static typing, classes, and modules. Typescript is developed by Microsoft and is used by a number of large companies including Microsoft, Facebook, and Instagram.`,
    }
]

export default offers;