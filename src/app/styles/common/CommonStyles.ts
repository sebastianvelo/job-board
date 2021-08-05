import StyleSheetBuilder from "stylist/core/builder/StyleSheetBuilder";
import Stylist, { Display } from "stylist/Stylist";

export const InvisibleStyle = (style?: StyleSheetBuilder) => Stylist.builder().mix(style).inMobile({ display: Display.HIDDEN }).build();
