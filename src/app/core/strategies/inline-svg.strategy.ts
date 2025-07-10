import { IIconStrategy } from '@core/models/icon-strategy.model';

export class InlineSvgStrategy implements IIconStrategy {
    private icons: Record<string, string> = {
        dashboard: `<svg class="max-w-full max-h-full" width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13 20V12C13 11.735 12.895 11.48 12.707 11.293C12.52 11.105 12.265 11 12 11H8C7.735 11 7.48 11.105 7.293 11.293C7.105 11.48 7 11.735 7 12V20" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M1 9C1 8.709 1.063 8.422 1.186 8.158C1.308 7.894 1.487 7.66 1.709 7.472L8.709 1.473C9.07 1.168 9.527 1 10 1C10.473 1 10.93 1.168 11.291 1.473L18.291 7.472C18.513 7.66 18.692 7.894 18.814 8.158C18.937 8.422 19 8.709 19 9V18C19 18.53 18.789 19.039 18.414 19.414C18.039 19.789 17.53 20 17 20H3C2.47 20 1.961 19.789 1.586 19.414C1.211 19.039 1 18.53 1 18V9Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>`,
        accounts: `<svg class="max-w-full max-h-full" width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 7C14.971 7 19 5.657 19 4C19 2.343 14.971 1 10 1C5.029 1 1 2.343 1 4C1 5.657 5.029 7 10 7Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M1 4V18C1 18.796 1.94799 19.559 3.63599 20.121C5.32399 20.684 7.613 21 10 21C12.387 21 14.676 20.684 16.364 20.121C18.052 19.559 19 18.796 19 18V4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M1 11C1 11.796 1.94799 12.559 3.63599 13.121C5.32399 13.684 7.613 14 10 14C12.387 14 14.676 13.684 16.364 13.121C18.052 12.559 19 11.796 19 11" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>`,
        brokers: `<svg class="max-w-full max-h-full" width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17 19C17 16.878 16.157 14.843 14.657 13.343C13.157 11.843 11.122 11 9 11C6.878 11 4.84299 11.843 3.34299 13.343C1.84299 14.843 1 16.878 1 19" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M9 11C11.761 11 14 8.761 14 6C14 3.239 11.761 1 9 1C6.239 1 4 3.239 4 6C4 8.761 6.239 11 9 11Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M21 18C21 14.63 19 11.5 17 10C17.657 9.50702 18.183 8.85901 18.531 8.11401C18.878 7.37001 19.037 6.55101 18.992 5.73001C18.948 4.90901 18.701 4.11201 18.275 3.40901C17.85 2.70701 17.257 2.11901 16.55 1.70001" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>`,
        submissions: `<svg class="max-w-full max-h-full" width="18" height="22" viewBox="0 0 18 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 17L10 14L7 11M11 1V5C11 5.53 11.211 6.039 11.586 6.414C11.961 6.789 12.47 7 13 7H17" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M1 10V3C1 2.47 1.211 1.961 1.586 1.586C1.961 1.211 2.47 1 3 1H12L17 6V19C17 19.53 16.789 20.039 16.414 20.414C16.039 20.789 15.53 21 15 21H3C2.47 21 1.961 20.789 1.586 20.414C1.211 20.039 1 19.53 1 19V16C1 15.47 1.211 14.961 1.586 14.586C1.961 14.211 2.47 14 3 14H10" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>`,
        organizations: `<svg class="max-w-full max-h-full" width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 21V3C5 2.47 5.211 1.961 5.586 1.586C5.961 1.211 6.47 1 7 1H15C15.53 1 16.039 1.211 16.414 1.586C16.789 1.961 17 2.47 17 3V21M5 21H17M5 21H3C2.47 21 1.961 20.789 1.586 20.414C1.211 20.039 1 19.53 1 19V13C1 12.47 1.211 11.961 1.586 11.586C1.961 11.211 2.47 11 3 11H5M17 21H19C19.53 21 20.039 20.789 20.414 20.414C20.789 20.039 21 19.53 21 19V10C21 9.47 20.789 8.961 20.414 8.586C20.039 8.211 19.53 8 19 8H17M9 5H13M9 9H13M9 13H13M9 17H13" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>`,
        goalsAndRules: `<svg class="max-w-full max-h-full" width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 12V1L18 5L10 9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M18.561 9.222C19.093 10.862 19.143 12.621 18.704 14.288C18.266 15.956 17.358 17.463 16.088 18.629C14.818 19.795 13.239 20.572 11.54 20.867C9.84098 21.162 8.094 20.963 6.505 20.293C4.916 19.623 3.553 18.511 2.578 17.089C1.602 15.667 1.05603 13.995 1.00403 12.271C0.952028 10.548 1.397 8.845 2.284 7.367C3.172 5.889 4.46499 4.69601 6.01099 3.93201" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M6.00203 8.99701C5.50103 9.66401 5.17499 10.446 5.05299 11.271C4.93099 12.097 5.01804 12.939 5.30604 13.723C5.59304 14.506 6.07201 15.205 6.69801 15.755C7.32501 16.306 8.07902 16.692 8.89302 16.876C9.70702 17.061 10.553 17.039 11.356 16.813C12.159 16.586 12.893 16.163 13.49 15.58C14.088 14.998 14.53 14.275 14.776 13.478C15.023 12.681 15.066 11.835 14.902 11.017" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>`,
        secured: `<svg class="max-w-full max-h-full" width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.58997 17.414C1.20997 17.789 1 18.298 1 18.828V21C1 21.265 1.11004 21.52 1.29004 21.707C1.48004 21.895 1.73 22 2 22H5C5.27 22 5.51996 21.895 5.70996 21.707C5.88996 21.52 6 21.265 6 21V20C6 19.735 6.11004 19.481 6.29004 19.293C6.48004 19.106 6.73 19 7 19H8C8.27 19 8.51996 18.895 8.70996 18.707C8.88996 18.52 9 18.265 9 18V17C9 16.735 9.11004 16.481 9.29004 16.293C9.48004 16.106 9.73 16 10 16H10.17C10.7 16 11.21 15.789 11.59 15.414L12.4 14.6C13.79 15.084 15.2999 15.082 16.6899 14.595C18.0799 14.107 19.26 13.163 20.04 11.916C20.83 10.67 21.16 9.19398 21 7.73198C20.83 6.26898 20.18 4.90598 19.13 3.86598C18.09 2.82498 16.73 2.16798 15.27 2.00298C13.81 1.83798 12.33 2.17398 11.08 2.95598C9.83996 3.73798 8.89003 4.91999 8.41003 6.30899C7.92003 7.69699 7.92002 9.20999 8.40002 10.6L1.58997 17.414Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M15.5 8C15.78 8 16 7.776 16 7.5C16 7.224 15.78 7 15.5 7C15.22 7 15 7.224 15 7.5C15 7.776 15.22 8 15.5 8Z" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>`,
        marine: `<svg class="max-w-full max-h-full" width="30" height="29" viewBox="0 0 30 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.999 12.419V17.5M14.999 1.5V5.5M24.333 16.167V8.16699C24.333 7.45899 24.052 6.78101 23.552 6.28101C23.052 5.78101 22.373 5.5 21.666 5.5H8.33301C7.62501 5.5 6.94702 5.78101 6.44702 6.28101C5.94702 6.78101 5.66602 7.45899 5.66602 8.16699V16.167" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M1.66602 26.833C2.46602 27.5 3.26601 28.167 4.99901 28.167C8.33301 28.167 8.33302 25.5 11.666 25.5C13.399 25.5 14.199 26.167 14.999 26.833C15.799 27.5 16.599 28.167 18.333 28.167C21.666 28.167 21.666 25.5 24.999 25.5C26.733 25.5 27.533 26.167 28.333 26.833" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>`,
        security: `<svg class="max-w-full max-h-full" width="24" height="29" viewBox="0 0 24 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.666 15.833C22.666 22.5 18 25.833 12.453 27.767C12.163 27.865 11.847 27.86 11.56 27.753C6 25.833 1.33301 22.5 1.33301 15.833V6.5C1.33301 6.146 1.473 5.80701 1.724 5.55701C1.974 5.30701 2.31302 5.16699 2.66602 5.16699C5.33302 5.16699 8.66602 3.56698 10.986 1.53998C11.269 1.29898 11.628 1.16602 12 1.16602C12.371 1.16602 12.731 1.29898 13.013 1.53998C15.346 3.57998 18.666 5.16699 21.333 5.16699C21.687 5.16699 22.026 5.30701 22.276 5.55701C22.526 5.80701 22.666 6.146 22.666 6.5V15.833Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M8 14.5L10.667 17.167L16 11.833" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>`,
        workers: `<svg class="max-w-full max-h-full" width="24" height="29" viewBox="0 0 24 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.50098 23.713C5.06998 22.183 6.09402 20.863 7.43402 19.931C8.77502 19 10.369 18.501 12.002 18.501C13.634 18.501 15.228 19.001 16.568 19.934C17.909 20.866 18.932 22.187 19.5 23.717" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M22.666 15.833C22.666 22.5 18 25.833 12.453 27.767C12.163 27.865 11.847 27.86 11.56 27.753C6 25.833 1.33301 22.5 1.33301 15.833V6.5C1.33301 6.146 1.473 5.80701 1.724 5.55701C1.974 5.30701 2.31302 5.16699 2.66602 5.16699C5.33302 5.16699 8.66602 3.56698 10.986 1.53998C11.269 1.29898 11.628 1.16602 12 1.16602C12.371 1.16602 12.731 1.29898 13.013 1.53998C15.346 3.57998 18.666 5.16699 21.333 5.16699C21.687 5.16699 22.026 5.30701 22.276 5.55701C22.526 5.80701 22.666 6.146 22.666 6.5V15.833Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M11.999 18.5C14.945 18.5 17.333 16.112 17.333 13.167C17.333 10.221 14.945 7.83301 11.999 7.83301C9.05402 7.83301 6.66602 10.221 6.66602 13.167C6.66602 16.112 9.05402 18.5 11.999 18.5Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>`,
        umbrella: `<svg class="max-w-full max-h-full" width="22" height="23" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11 11.5V19.5C11 20.03 11.21 20.539 11.59 20.914C11.96 21.289 12.47 21.5 13 21.5C13.53 21.5 14.04 21.289 14.41 20.914C14.79 20.539 15 20.03 15 19.5M11 1.5V2.5M21 11.5C20.73 9.037 19.56 6.76002 17.71 5.10602C15.87 3.45202 13.48 2.53699 11 2.53699C8.52 2.53699 6.13004 3.45202 4.29004 5.10602C2.44004 6.76002 1.27 9.037 1 11.5H21Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>`,
        checked: `<svg class="max-w-full max-h-full" width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 34.67C27.204 34.67 34.666 27.2 34.666 18C34.666 8.8 27.204 1.32996 18 1.32996C8.795 1.32996 1.33301 8.8 1.33301 18C1.33301 27.2 8.795 34.67 18 34.67Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M13 18L16.333 21.33L23 14.67" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>`,
        notChecked: `<svg class="max-w-full max-h-full" width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 34.67C27.2 34.67 34.67 27.2 34.67 18C34.67 8.8 27.2 1.32996 18 1.32996C8.795 1.32996 1.33301 8.8 1.33301 18C1.33301 27.2 8.795 34.67 18 34.67Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="4 4"/>
                <path d="M13 18L16.333 21.33L23 14.67" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>`,
        rocket: `<svg class="max-w-full max-h-full" width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 20.9999C2 22.6799 1.33301 27.6698 1.33301 27.6698C1.33301 27.6698 6.32 26.9999 8 24.9999C8.946 23.8799 8.933 22.16 7.88 21.12C7.361 20.63 6.67901 20.34 5.96301 20.32C5.24701 20.3 4.548 20.5399 4 20.9999ZM14 18.9999L10 14.9999C10.709 13.1599 11.603 11.3899 12.666 9.72989C14.22 7.24989 16.383 5.19995 18.95 3.78995C21.518 2.37995 24.403 1.64983 27.333 1.66983C27.333 5.28983 26.293 11.67 19.333 16.33C17.649 17.4 15.862 18.2899 14 18.9999Z" stroke="#3BB979" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M10 15.0001H3.33301C3.33301 15.0001 4.066 10.96 6 9.67003C8.16 8.23003 12.666 9.67003 12.666 9.67003M14 19.0001V25.67C14 25.67 18.04 24.9301 19.333 23.0001C20.773 20.8401 19.333 16.3302 19.333 16.3302" stroke="#3BB979" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>`,
        paperClip: `<svg class="max-w-full max-h-full" width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.823 13.5L13 8.19995M9.66701 4L4.058 9.71997C3.808 9.96997 3.66701 10.3099 3.66701 10.6699C3.66701 11.0199 3.808 11.3601 4.058 11.6101C4.308 11.8601 4.647 12 5 12C5.354 12 5.69299 11.8601 5.94299 11.6101L11.552 5.88989C12.052 5.38989 12.333 4.71 12.333 4C12.333 3.29 12.052 2.61011 11.552 2.11011C11.052 1.61011 10.374 1.33008 9.66701 1.33008C8.96001 1.33008 8.282 1.61011 7.782 2.11011L2.172 7.84009C1.421 8.59009 1 9.60992 1 10.6699C1 11.7299 1.421 12.75 2.172 13.5C2.922 14.25 3.939 14.6699 5 14.6699C6.061 14.6699 7.07899 14.25 7.82899 13.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>`,
    };

    getIcon(name: string): string {
        return this.icons[name] || '';
    }
}
