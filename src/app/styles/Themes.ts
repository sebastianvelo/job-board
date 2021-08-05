import Stylist, { Color, Hue } from "stylist/Stylist";

const PRIMARY_LIGHT: Hue = [Color.INDIGO, 200];
const PRIMARY: Hue = [Color.INDIGO, 300];
const PRIMARY_DARK: Hue = [Color.INDIGO, 600];
const PRIMARY_DARKER: Hue = [Color.INDIGO, 800];
const PRIMARY_DARKEST: Hue = [Color.INDIGO, 900];

const LIGHT: Hue = [Color.GRAY, 100];
const DARK: Hue = [Color.GRAY, 900];

export const PrimaryTheme = Stylist.builder()
    .inMobile({
        bgColor: PRIMARY,
        text: {
            color: DARK,
        }
    })
    .dark({
        bgColor: PRIMARY_DARK,
        text: {
            color: LIGHT,
        }
    });
export const PrimaryDarkTheme = Stylist.builder()
    .inMobile({
        bgColor: PRIMARY_DARK,
        text: {
            color: LIGHT,
        }
    })
    .dark({
        bgColor: PRIMARY_DARKER,
        text: {
            color: LIGHT,
        }
    });
export const PrimaryHovereableTheme = Stylist.builder()
    .hover({
        bgColor: PRIMARY_LIGHT,
        text: {
            color: DARK,
        }
    })
    .dark({})
    .hover({
        bgColor: PRIMARY_DARKEST,
        text: {
            color: LIGHT,
        }
    });

export const PrimaryActiveTheme = Stylist.builder()
    .inMobile({
        bgColor: PRIMARY_LIGHT,
        text: {
            color: DARK,
        }
    })
    .dark({
        bgColor: PRIMARY_DARKEST,
        text: {
            color: LIGHT,
        }
    });


export const DefaultTheme = Stylist.builder()
    .inMobile({
        bgColor: LIGHT,
        text: {
            color: DARK,
        }
    })
    .dark({
        bgColor: DARK,
        text: {
            color: LIGHT,
        }
    });