import styled from "styled-components";
import { type BackgroundColors, backgroundColors } from "@/styles/paletteMapping";
//import { type TextColors, textColors } from "@/styles/paletteMapping";
import { palette } from "@/styles/palette";

export type HeaderPadding = 'p0' | 'p1' | 'p2' | 'p3' | string;

export type HeaderMargin = string;

export const StyledHeader = styled.div<{
    backgroundColor?: BackgroundColors;
    width?: string;
    minWidth?: string;
    maxWidth?: string;
    height?: string;
    maxHeight?: string;
    padding?: string;
    margin?: string;
    borderBottom?: HeaderBorderBottomStyles;
}>`
    display: flex;
    flex-direction: row;

    background-color: ${({backgroundColor = 'primary'}) => backgroundColors[backgroundColor]};
    width: ${({width}) => width || '100%'};
    min-width: ${({minWidth}) => minWidth || 'auto'};
    max-width: ${({maxWidth}) => maxWidth || '393px'};
    height: ${({height}) => height || '10vh'};
    max-height: ${({maxHeight}) => maxHeight || '100px'};
    padding: ${({padding = '0'}) => padding};
    margin: ${({margin = '0'}) => margin};
    border-bottom: ${({borderBottom = 'none'}) => headerBorderBottomStyles[borderBottom]};
    box-sizing: border-box;
    overflow: hidden;
`

export const HeaderContainer = styled.div`
    width: 100%;
    box-sizing: border-box;

    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    
`
export const HeaderCenter = styled.div`
    display: flex;
    flex: 2;
    align-items: center;
    justify-content: center;
    min-width: 30px;
    min-height: 30px;
`
export const HeaderSide =styled.div<{position?: 'left' | 'right', padding?: string}>`
    display: flex;
    flex: 0 0 auto;
    align-items: center;
    justify-content: ${({position = 'center'}) => position === 'left' ? 'flex-start' : position === 'right' ? 'flex-end' :'center'};
    min-width: 40px;
    min-height: 30px;
    gap: 20px;
    padding: ${({padding = '0'}) => padding || '0'};
`
export const HeaderTopRow = styled.div<{
    margin?: string
    padding?: string
}>`
    margin: ${({margin = '0'}) => margin};
    padding: ${({padding = '0'}) => padding};
`
export const HeaderBottomRow = styled.div<{
    margin?: string
    padding?: string
}>`
    margin: ${({margin = '0'}) => margin};
    padding: ${({padding = '0'}) => padding};
`

export const headerBorderBottomStyles = {
    primary: `1px solid ${palette.lightGray}`,
    secondary: `1px solid ${palette.gray}`,
    tertiary: `1px solid ${palette.navyBlue}`,
    none: 'none',
}as const;

export type HeaderBorderBottomStyles = keyof typeof headerBorderBottomStyles;