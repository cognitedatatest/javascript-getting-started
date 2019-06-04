/**
 * This is wrapper for react-odometerjs component that replaces
 * default odometer theme. Origin - https://github.com/HubSpot/odometer/blob/master/themes/odometer-theme-default.css
 * It's needed to avoid loading odometer theme CSS from CDN.
 */
declare const StyledOdometer: import("styled-components").StyledComponent<"div", any, {}, never>;
export default StyledOdometer;
