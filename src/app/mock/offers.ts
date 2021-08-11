import Offer from "app/entities/Offer";

const offers: Offer[] = [
    {
        id: `1000`,
        title: `Typescript Software Engineer`,
        salary: {
            min: 10000,
            max: 16400,
            currency: `USD`
        },
        location: `London`,
        seniority: `Mid`,
        contractor: {
            name: `Microsoft`,
            logo: `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQMAAADCCAMAAAB6zFdcAAAAclBMVEX////xURuAzCgAre/7vAkAqO7wQwD7twD6uKHQ7abwRgB5yRT70cn/0cb1++N1yADF6Kf/7uet8Pz+87DI5vrB7P//+db+4KHE9f7/+sb0+uHwNgD/+vgAo+36tJv7/fLp99RuxgDm+v7//u77swD//ePWuxWSAAABDUlEQVR4nO3Zy1LCQBCG0faSRAWJUcRLgGjE939FsdzPLKasKeWcdW/+b9sRAAAAAAAAAAAAAAAAAAAA8H8N+6uk/RAxXWe81V5RZjneJI23Ea/vi6T+rvaKMsv2LKk9Nlj150kLDTTQQAMNNNBAAw000EADDTTQQAMNNNBAAw000EADDTTQQAMNTrfB2Cb9/N77tD/eYDtkbI9Hq4yp9gooN99nzBEfDxmb2ivKrHdN0u4xYnPokg5PtVeUWTcXSc13g+4yqdNAAw000EADDTTQQAMNNNBAAw000EADDTTQQAMNNNBAAw000OB0G/i9x/ycMUdMLxmftVcAAAAAAAAAAAAAAAAAAADA7/kCywdYWjGc/HcAAAAASUVORK5CYII=`,
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
            currency: `USD`
        },
        location: `Amsterdam`,
        seniority: `Sr`,
        contractor: {
            name: `Facebook`,
            logo: `https://tecnisiem.com/wp-content/uploads/2019/11/facebook-wordmark-cycling-CONTENT-2019.gif`,
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
            currency: `USD`
        },
        location: `Madrid`,
        seniority: `Jr`,
        contractor: {
            name: `Google`,
            logo: `https://www.trecebits.com/wp-content/uploads/2015/09/google.jpg`,
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
            currency: `EUR`
        },
        location: `Dublin`,
        seniority: `Mid`,
        contractor: {
            name: `Netflix`,
            logo: `https://www.techgames.com.mx/wp-content/uploads/2019/12/Netflix-logo-2019.jpg`,
            employees: 1004,
        },
        tags: [`react`, `typescript`, `javascript`, `express`],
        date: `2021-06-20`,
        description: `Typescript is a new programming language that compiles to javascript. It is a superset of javascript that adds optional static typing, classes, and modules. Typescript is developed by Microsoft and is used by a number of large companies including Microsoft, Facebook, and Instagram.`,
    }
]

export default offers;