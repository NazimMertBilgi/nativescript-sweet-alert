import { ShowCustomImage, ShowWarning, ShowError, ShowNormal, ShowText, ShowCheckbox } from "./classes";

export declare class SweetAlert {
    static showNormal(options: ShowNormal): Promise<any>;

    static showError(options: ShowError): Promise<any>;

    static showSuccess(options: ShowSuccess): Promise<any>;

    static showWarning(options: ShowWarning): Promise<any>;

    static showCustomImage(options: ShowCustomImage): Promise<any>;

    static showText(options: ShowText): Promise<any>;

    static showCheckbox(options: ShowCheckbox): Promise<any>;
}

export enum SweetAlertDialogTypes {
    NORMAL_TYPE = 0,
    ERROR_TYPE = 1,
    SUCCESS_TYPE = 2,
    WARNING_TYPE = 3,
    CUSTOM_IMAGE_TYPE = 4
}