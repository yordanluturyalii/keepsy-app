import { useWindowDimensions } from 'react-native';

export const useResponsiveBreakpoint = () => {
    const { width, height } = useWindowDimensions();

    const getWidthCategory = () => {
        if (width < 360) return 'smallPhone';
        if (width < 415) return 'phone';
        if (width < 600) return 'largePhone';
        if (width < 900) return 'tablet';
        return 'largeTablet';
    };

    const getHeightCategory = () => {
        if (height < 600) return 'shortScreen';
        if (height < 800) return 'regularScreen';
        if (height < 1000) return 'tallScreen';
        return 'extraTallScreen';
    };

    return {
        widthCategory: getWidthCategory(),
        heightCategory: getHeightCategory(),
        width,
        height,
    };
};
